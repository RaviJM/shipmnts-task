import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ScheduleEmail() {
  const [from, setFrom] = useState("");
  const [recepient, setRecepient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleChange(e) {
    switch (e.target.name) {
      case "from":
        setFrom(e.target.value);
        break;

      case "recepient":
        setRecepient(e.target.value);
        break;

      case "subject":
        setSubject(e.target.value);
        break;

      case "body":
        setBody(e.target.value);
        break;

      case "date":
        setDate(e.target.value);
        break;

      case "time":
        setTime(e.target.value);
        break;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("asdf");
  }

  return (
    <div>
      <h1>Email Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recepient">From: </label>
        <input
          type="email"
          id="from"
          name="from"
          value={from}
          onChange={handleChange}
          required
        ></input>
        <br></br>

        <label htmlFor="recepient">To: </label>
        <input
          type="email"
          id="recepient"
          name="recepient"
          value={recepient}
          onChange={handleChange}
          required
        ></input>
        <br></br>

        <label htmlFor="subject">Subject: </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={handleChange}
          required
        ></input>
        <br></br>

        <label htmlFor="body">Content: </label>
        <textarea
          cols={92}
          rows={12}
          type="text"
          id="body"
          name="body"
          value={body}
          onChange={handleChange}
          required
        ></textarea>
        <br></br>

        <label htmlFor="date">Date: </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleChange}
          required
        ></input>
        <br></br>

        <label htmlFor="time">Time: </label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={handleChange}
          required
        ></input>
        <br></br>

        <button type="submit">Schedule</button>
      </form>
    </div>
  );
}

export default ScheduleEmail;
