import React from 'react';
import { Link } from "react-router-dom";

function Links() {
  return (
    <div>
        <li>
                    <Link to= "/"> Home
                    </Link>
                 </li>
                 <li>
                    <Link to ="/cars"> Cars
                    </Link>
                 </li>
    </div>
  )
}

export default Links