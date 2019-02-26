import React, {useState} from 'react';
import { Link} from "@reach/router"
import Details from '../../components/Details/Details';
import mustang from '../../img/mustangfront.jpg';

import pic1 from '../../img/mustangrigth.jpg';
import pic2 from '../../img/mustangbackright.jpg';
import pic3 from '../../img/mustangback.jpg';
import pic4 from '../../img/mustaninside.jpg';
const Mustang = () => {
    const [state, setState] = useState([pic1, pic2, pic3, pic4]);
    return (<div>
          <h5>Mustang</h5>
          <img src={mustang} alt="no found" />
          <Details pics = {state}> Este es el Mustang</Details>
        
  
        </div>)
}

export default Mustang;
