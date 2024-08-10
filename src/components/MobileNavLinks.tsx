import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
    return (
        <>
            <Link to='/user-profile'
                className='flex bg-white items-center font-bold hover:text-green-500 p-3 rounded my-3 border-t border-gray-300'
            >
                User Profile
            </Link>
            <Button
                className="flex items-center px-3 font-bold hover:bg-gray-500"
            >
                Some Action
            </Button >
        </>
    );
}

export default MobileNavLinks;
