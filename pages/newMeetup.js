import NewMeetupForm from "../components/meetups/NewMeetupForm";
const NewMeetup = () => {
  async function addMeetupHandler(enteredMeetupData){
    const response = await fetch("/api/newMeetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "content-type": "application/json" },
    });
    const data=await response.json();
     console.log(data);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};
export default NewMeetup;
