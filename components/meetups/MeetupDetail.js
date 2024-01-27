import classes from "./MeetupDetail.module.css";
function MeetupDetail(props) {
  return (
    <>
      <div className={classes.detail}>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <h4>{props.description}</h4>
      </div>
    </>
  );
}

export default MeetupDetail;
