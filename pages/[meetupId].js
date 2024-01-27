import MeetupDetail from "../components/meetups/MeetupDetail";
const MeetupDetailPage = () => {
  return (
    <MeetupDetail
      image="https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/02/barcelonameetups.jpg"
      title="First meetup"
      address="some address 5 some city"
      description="This is a First Meetup"
    />
  );
};
export async function getStaticPaths() {
  return {
    fallback:true,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/02/barcelonameetups.jpg",
        id: meetupId,
        title: "First meetup",
        address: "some address 5 some city",
        description: "This is a First Meetup",
      },
    },
  };
}
export default MeetupDetailPage;
