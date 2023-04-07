import React from 'react';
import Clock from './Clock';
import SecondClock from './SecondClock'
import {Link } from "react-router-dom";

function ClockPage() {
    return (
        <div>
          <p>
            Welcome to the CLOCK PAGE!
            <br />
            Click on the button below to return back to the first page, the lame one.
          </p>
          <h1>HERE ARE SOME CLOCKS</h1>
          <Clock/>
          <SecondClock/>
          <Link to="/"><button>
            Go to Clock Page!
          </button>
          </Link>
        </div>
      );
}
export default ClockPage;