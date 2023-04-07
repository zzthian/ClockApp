import React from 'react';
import './index.css';
import Counter from './Counter';
import {Link } from "react-router-dom";

function Page1() {
    return (
        <div>
          <p>
            This is the first page.
            <Counter/>
            <br />
            Click on the button below.
          </p>
          <Link to="/ClockPage"><button>
            Go to Clock Page!
          </button>
          </Link>
        </div>
      );
}
export default Page1;