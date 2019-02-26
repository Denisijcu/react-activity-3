import React, {useState} from 'react';
import { Link} from "@reach/router"
import Details from '../../components/Details/Details';

import pic1 from '../../img/camarurigth.jpg';
import pic2 from '../../img/camarubackright.jpg';
import pic3 from '../../img/camaruback.jpg';
import pic4 from '../../img/camaruinside.jpg';
import camarus from '../../img/camarufront.jpg';
const Camarus = () => {
    const [state, setState] = useState([pic1, pic2, pic3, pic4]);
    return (<div>
          <h5>Camarus</h5>
          <img src={camarus} alt="no found" />
          <Details pics = {state}> Este es el Camarus</Details>
        </div>)
}

export default Camarus;
