import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-green-500 gap-2">
                <CircleUserRound className="text-green-500" />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link to='/user-profile' className="font-bold hover:text-green-500">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem asChild>
                    <Button onClick={() => logout()} className="flex flex-1 font-bold bg-green-500 mt-1">
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UsernameMenu;
