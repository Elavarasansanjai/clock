import React, { useEffect, useState } from "react";
import "./UserAlaram.css";
const UserAlaram = (props) => {
  const [hour, setHour] = useState("");
  const [minute, setminute] = useState("");
  const [second, setsecond] = useState("");
  const [calendar, setCalendar] = useState("");

  const setHourHandler = (e) => {
    setHour(e.target.value);
  };
  const setMinuteHandler = (e) => {
    setminute(e.target.value);
  };
  const setSecHandler = (e) => {
    setsecond(e.target.value);
  };
  const calendarHandler = (e) => {
    setCalendar(e.target.value);
  };
  const month = new Date(calendar).getMonth();
  const year = new Date(calendar).getFullYear();
  const date = new Date(calendar).getDate();
  const setAlaram = (e) => {
    e.preventDefault();
    alert("your alarem is created");

    // props.alaram(hour, minute, second, year, day + 1, date);
  };
  useEffect(() => {
    localStorage.setItem("hour", `${hour}`);
    localStorage.setItem("minute", `${minute}`);
    localStorage.setItem("sec", `${second}`);
    localStorage.setItem("year", `${year}`);
    localStorage.setItem("month", `${month + 1}`);
    localStorage.setItem("date", `${date + 1}`);
    const hr = localStorage.getItem("hour");
    const min = localStorage.getItem("minute");
    const se = localStorage.getItem("sec");
    const ye = localStorage.getItem("year");
    const mon = localStorage.getItem("month");
    const dat = localStorage.getItem("date");
    if (
      props.datas.hour == hr &&
      props.datas.minute == min &&
      props.datas.second == se &&
      props.datas.year == ye &&
      props.datas.month + 1 == mon &&
      props.datas.date == dat
    ) {
      alert("aleram start");
    } else {
      console.log(
        props.datas.hour,
        props.datas.minute,
        props.datas.second,
        props.datas.year,
        props.datas.month,
        props.datas.date
      );
      console.log(hr, min, se, ye, mon, dat);
    }
    return () => {
      console.log("clear");
    };
  });
  return (
    <React.Fragment>
      <form>
        <div>
          <input
            onChange={setHourHandler}
            max={12}
            min={1}
            type="number"
            placeholder="hour"
          ></input>
          <input
            onChange={setMinuteHandler}
            max={60}
            min={0}
            type="number"
            placeholder="minute"
          ></input>
          <input
            onChange={setSecHandler}
            type="number"
            max={60}
            min={0}
            placeholder="second"
          ></input>
          <input type="date" onChange={calendarHandler} />
        </div>
        <button type="submit" onClick={setAlaram}>
          Set Alaram
        </button>
      </form>
    </React.Fragment>
  );
};
export default UserAlaram;
