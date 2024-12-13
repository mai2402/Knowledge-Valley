import { HiOutlineBell, HiOutlineHeart, HiShoppingCart } from "react-icons/hi";
import DropDownMenu from "./DropDownMenu";
import useUser from "../hooks/authentication/useUser";






    export default function UserHeader() {
        const {user}= useUser()
        console.log(user,"user")
      return (
        <header className="bg-primary text-white p-4 shadow-md flex justify-between items-center">
          {/* Left Section: Brand Name */}
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold tracking-wide">Knowledge Valley</h1>
          </div>

           <div className="flex justify-start items-center space-x-4 ">
       
          <div className="flex space-x-6">
            <DropDownMenu trigger={ <p className="text-base font-medium cursor-pointer hover:text-opacity-80 transition">
              My Learning
            </p>} placeholder="Start learning from over 250,000 courses today." />
            <DropDownMenu trigger={
            <HiOutlineHeart className="text-2xl cursor-pointer hover:text-opacity-80 transition" />}
            placeholder="No courses added "
            />
            <HiShoppingCart className="text-2xl cursor-pointer hover:text-opacity-80 transition" />
            <DropDownMenu trigger={<HiOutlineBell className="text-2xl cursor-pointer hover:text-opacity-80 transition" />} 
                          placeholder="no notification..." />
          </div>
    
           <DropDownMenu trigger={<div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-lg font-semibold">
                                    MF</div>} title="Mai Fareed" email={user?.email} items={["My learning" , "wishlist", "Messages","logout"]}  />
       
           </div>
        </header>
        

      );
    }
    
    

  
 
