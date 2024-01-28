import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../components/meetups/MeetupDetail";
const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupscollection = db.collection("meetups");
  const meetups = await meetupscollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupscollection = db.collection("meetups");
  const selectedMeetup =await meetupscollection.findOne({ _id:new  ObjectId(meetupId) });
  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        id: selectedMeetup._id.toString(),
      },
    },
  };
}
export default MeetupDetailPage;
