import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupscollection = db.collection("meetups");
  const meetups = await meetupscollection.find().toArray();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}
export default HomePage;
