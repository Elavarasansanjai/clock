import React, { Fragment } from "react";
const Time = (props) => {
  return (
    <Fragment>
      <p>
        Time = {props.setdate.hour} : {props.setdate.minute} :{" "}
        {props.setdate.second}
      </p>
      <label>
        Date = {props.setdate.year}/{props.setdate.month + 1}/
        {props.setdate.date}
      </label>
    </Fragment>
  );
};
export default Time;
