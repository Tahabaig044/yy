// import Link from "next/link";
// import Menu from "./Menu";
// import Image from "next/image";
// import SearchBar from "./SearchBar";
// import dynamic from "next/dynamic";
// // import NavIcons from "./NavIcons";

// const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

// const Navbar = () => {
//   return (
//     <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
//       {/* MOBILE */}
//       <div className="h-full flex items-center justify-between md:hidden">
//         <Link href="/">
//           <div className="text-2xl tracking-wide">LAMA</div>
//         </Link>
//         <Menu />
//       </div>
//       {/* BIGGER SCREENS */}
//       <div className="hidden md:flex items-center justify-between gap-8 h-full">
//         {/* LEFT */}
//         <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
//           <Link href="/" className="flex items-center gap-3">
//             <Image src="/logo.png" alt="" width={24} height={24} />
//             <div className="text-2xl tracking-wide">LAMA</div>
//           </Link>
//           <div className="hidden xl:flex gap-4">
//             <Link href="/">Homepage</Link>
//             <Link href="/">Shop</Link>
//             <Link href="/">Deals</Link>
//             <Link href="/">About</Link>
//             <Link href="/">Contact</Link>
//           </div>
//         </div>
//         {/* RIGHT */}
//         <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
//           <SearchBar />
//           <NavIcons />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white shadow-md sticky top-0 z-50">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl font-semibold tracking-wide text-gray-800">LAMA</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="LAMA logo" width={32} height={32} />
            <div className="text-2xl font-semibold tracking-wider text-gray-800">LAMA</div>
          </Link>
          <div className="hidden xl:flex gap-6 text-lg font-medium text-gray-600">
            <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
            <Link href="/Shop" className="hover:text-gray-800 transition-colors">Shop</Link>
            <Link href="/deals" className="hover:text-gray-800 transition-colors">Deals</Link>
            <Link href="/about" className="hover:text-gray-800 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gray-800 transition-colors">Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-end gap-6">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
