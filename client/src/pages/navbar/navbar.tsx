import { useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Navbar = () => {
   const [menu, setMenu] = useState(false);
    return (
        <div>
            {/* navbar */}
            <div className="flex justify-end p-2">
         
                <button>
                  <PiDotsThreeOutlineVerticalFill />
                </button>
             
            </div>
        </div>
    )
}
export default Navbar;