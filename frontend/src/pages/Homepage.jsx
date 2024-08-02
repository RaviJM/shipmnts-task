import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Homepage() {
  const [from, setFrom] = useState("");

  function handleChange(e) {
    setFrom(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Email Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">Your Email: </label>
        <input
          type="email"
          id="from"
          name="from"
          value={from}
          onChange={handleChange}
          required
        ></input>
      </form>
      {from !== "" && (
        <div>
          <Link to={"/scheduleEmail"}>
            <button>Schedule Email</button>
          </Link>

          <Link to={"/scheduledEmails"} state={from}>
            <button>View All Scheduled Email</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Homepage;
