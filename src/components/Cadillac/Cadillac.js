import React, {useState} from 'react';
import { Link} from "@reach/router"
import Details from '../../components/Details/Details';
import cadillac from '../../img/c1front.jpg';
import pic1 from '../../img/c4right.jpg';
import pic2 from '../../img/c5rightback.jpg';
import pic3 from '../../img/c2back.jpg';
import pic4 from '../../img/c3inside.jpg';

const Cadillac = () => {

    const [state, setState] = useState([pic1, pic2, pic3, pic4]);

    return (<div>
        
        <img src={cadillac} alt="no found" />
        <Details pics = {state}> Este es el cadillac</Details>
      


          
        </div>)
}

export default Cadillac;
