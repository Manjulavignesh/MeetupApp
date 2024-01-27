import MeetupList from "../components/meetups/MeetupList";
const dummyMeetups = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/02/barcelonameetups.jpg",
    address: "some address5,12345 some city",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/02/barcelonameetups.jpg",
    address: "some address5,789456 some city",
    description: "this is a second meetup",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
export async function getStaticProps(){
  return {
    props:{
      meetups:dummyMeetups
    }
  }
} 
export default HomePage;
