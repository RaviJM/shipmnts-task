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
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">Your Email: </label>
        <input
          id="from"
          name="from"
          value={from}
          onChange={handleChange}
        ></input>
      </form>
      <Link to={"/scheduleEmail"}>
        <button>Schedule Email</button>
      </Link>

      <Link to={"/scheduledEmails"}>
        <button>View All Scheduled Email</button>
      </Link>
    </div>
  );
}

export default Homepage;
