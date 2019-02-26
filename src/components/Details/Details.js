import React from 'react';
import { Link} from "@reach/router"


const Details = (props) => {
    return (<div className="details">
          <h5>Details</h5>
          <img src={props.pics[0]} alt="no found" />
          <img src={props.pics[1]} alt="no found" />
          <img src={props.pics[2]} alt="no found" />
          <img src={props.pics[3]} alt="no found" />
          <h5> {props.children}</h5>
          <Link to = "/"> Go back </Link>
        </div>)
}

export default Details;
