import React from 'react';
import { Link} from "@reach/router"
import '../../App.css';


import cadillac from '../../img/c1front.jpg';
import mustang from '../../img/mustangfront.jpg';
import camarus from '../../img/camarufront.jpg';




const Cars = ()=>{


    return ( <div className="header"> 
    
      

         
         <ul> 
          <li>
          <h5>Cadillac</h5>
          <Link to = "cadillac">   <img src={cadillac} alt="no found" /> </Link> 
          </li>
          <li>
          <h5>Mustang</h5>
          <Link to = "mustang">   <img src={mustang} alt="no found" /> </Link> 
          </li>
          <li> 
          <h5>Camarus</h5>
         <Link to = "camarus">   <img src={camarus} alt="no found" /> </Link> 
          </li>
    
         </ul>
        

     
    
    </div>)
}

export default Cars;

