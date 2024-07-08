import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus";

import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

 const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems,"cart");


    return(
               <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
                 <div>
                   <img
                    className="w-56"
                     src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
                  </div>
                 <div className="nav-items">
                    <ul className="flex p-4 m-4">
                    <li className="px-4" >Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <Link to = "/" >
                        <li className="px-4">Home</li>
                        </Link>  
                        <Link to = "/about"> <li className="px-4">About Us</li></Link>
                        <Link to = "/contact" ><li className="px-4">Contact Us</li></Link>
                        <Link to = "/grocery" ><li className="px-4">Grocery</li></Link>
                        <Link to = "/cart" > <li className="font-bold text-xl px-4">Cart-{cartItems.length}</li></Link>
                 
            
               
        
        <button className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          
          <li className="px-4 ">{loggedInUser}</li> 
          </ul>
                  </div>

      
    </div>
  );
};

export default Header;