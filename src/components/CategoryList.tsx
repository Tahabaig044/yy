// import { wixClientServer } from "@/lib/wixClientServer";
// import Image from "next/image";
// import Link from "next/link";

// const CategoryList = async () => {
//   const wixClient = await wixClientServer();

//   const cats = await wixClient.collections.queryCollections().find();

//   return (
//     <div className="px-4 overflow-x-scroll scrollbar-hide">
//       <div className="flex gap-4 md:gap-8">
//         {cats.items.map((item) => (
//           <Link
//             href={`/list?cat=${item.slug}`}
//             className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
//             key={item._id}
//           >
//             <div className="relative bg-slate-100 w-full h-96">
//               <Image
//                 src={item.media?.mainMedia?.image?.url || "cat.png"}
//                 alt=""
//                 fill
//                 sizes="20vw"
//                 className="object-cover"
//               />
//             </div>
//             <h1 className="mt-8 font-light text-xl tracking-wide">
//               {item.name}
//             </h1>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 py-8 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-6 md:gap-10">
        {cats.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 transform transition-transform hover:scale-105"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-80 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={item.media?.mainMedia?.image?.url || "cat.png"}
                alt=""
                fill
                sizes="20vw"
                className="object-cover hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <h1 className="mt-4 font-semibold text-lg text-gray-800 tracking-wide text-center">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
