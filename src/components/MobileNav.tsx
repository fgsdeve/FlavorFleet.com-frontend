import { Separator } from "@radix-ui/react-separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CircleUserRound, Menu } from 'lucide-react';
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className='text-green-500' />
        </SheetTrigger>
        <SheetContent className="space-y-3">
          <SheetTitle>
            {isAuthenticated ? 
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-green-500"/>
              {user?.email}
            </span>
            : <span>Welcome to FlavorFleet.com!</span>
            }
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col space-y-3">
            {isAuthenticated ? (
              <>
                <MobileNavLinks />
                <Button className="flex-1 font-bold bg-green-500" onClick={() => logout()}>
                  Log Out
                </Button>
              </>
            ) : (
              <Button className="flex-1 font-bold bg-green-500" onClick={() => loginWithRedirect()}>
                Log in
              </Button>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
