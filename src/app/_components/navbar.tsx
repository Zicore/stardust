import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/stardust" className="text-gray-300 hover:text-white">
            Stardust Ore
          </Link>
          <Link href="/gold" className="text-gray-300 hover:text-white">
            Silver and Gold
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
