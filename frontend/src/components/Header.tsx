import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import MainNav from './MainNav';

const Header = () => {
  return (
    <div className="max-sm:px-3 border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          AdirEats.com
        </Link>
        {/* Side menu for mobile screens */}
        <div className="md:hidden">
          <MobileNav />
        </div>
        {/* Desktop menu */}
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
