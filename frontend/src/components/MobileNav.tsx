import { CircleUserRound, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';
import MobileNavLinks from './MobileNavLinks';

const MobileNav = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Sheet>
      {/* This will open the side menu (Sheet content) on click */}
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className='flex items-center font-bold gap-2'>
              <CircleUserRound className='text-orange-500' />
              {user?.given_name}
            </span>
          ) : (
            <span>Welcome to AdirEats.com</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? <MobileNavLinks /> : <Button className="flex-1 font-bold bg-orange-500" onClick={() => loginWithRedirect()}>Log In</Button>}
          
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
