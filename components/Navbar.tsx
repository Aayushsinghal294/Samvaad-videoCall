import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6  lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/samvaad-logo.svg"
          width={100}
          height={72}
          alt="samvaad logo"
          className="max-sm:size-10"
        />
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;