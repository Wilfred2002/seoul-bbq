import Image from "next/image";
import Nav from "./components/Nav";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black font-roboto">
      <Nav />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen">
        <Image
          src="/herooo.png"
          alt="Sizzling Korean BBQ meats and fresh ingredients"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-45 z-10"></div>
        <div className="relative z-20 text-center text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold font-roboto mb-4">SEOUL KOREAN BBQ & HOTPOT</h1>
          <h2 className="text-lg md:text-xl mt-4 font-poppins max-w-2xl mx-auto">
            Authentic dining experience with premium all-you-can-eat BBQ and bubbling hotpot.
          </h2>
        </div>
      </section>

      {/* Korean BBQ Focus Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-red-50">
  {/* Left Image */}
  <div className="w-full md:w-1/3 mb-8 md:mb-0">
    <Image
      src="/leftimg.png"
      alt="Sizzling Korean BBQ meats on a grill"
      width={600}
      height={800}
      className="object-cover rounded-lg shadow-lg"
    />
  </div>

  {/* Text Content */}
  <div className="text-center md:w-1/3 px-4 mb-24">
    <h3 className="text-sm text-red-600 mb-2 font-poppins">A CULINARY JOURNEY</h3>
    <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-poppins">
      FROM ASIA TO SPRINGFIELD
    </h2>
    <hr className="w-12 mx-auto border-t-2 border-red-600 mb-4" />
    <p className="text-gray-700 mb-6 leading-relaxed">
      At Seoul Korean BBQ & Hotpot, we bring the vibrant flavors of Asia to your table. 
      Indulge in premium, all-you-can-eat Korean BBQ featuring marinated beef bulgogi, 
      spicy pork belly, and succulent ribeye steak. Pair it with our bubbling hotpots, 
      offering rich broths like Szechuan Spicy and Japanese Miso. Every bite is a celebration 
      of authentic Asian cuisine.
    </p>
    <Link href="/Menu">
      <p className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 font-poppins">
        EXPLORE OUR MENU
      </p>
    </Link>
    <p className="text-gray-500 text-sm mt-4">ALL-YOU-CAN-EAT | PREMIUM SELECTIONS</p>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/3 mt-8 md:mt-0">
    <Image
      src="/rightimg.png"
      alt="Korean hotpot with fresh ingredients"
      width={600}
      height={800}
      className="object-cover rounded-lg shadow-lg"
    />
  </div>
</section>
      {/* Food Promotion Section */}
      <section className="grid md:grid-cols-2 gap-8 px-8 py-16">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/bbq-promo.jpg"
            alt="Korean BBQ grill"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">BBQ EXPERIENCE</h3>
            <p className="text-white mb-4">Grill premium meats at your table</p>
            <Link href="/Menu">
              <span className="text-red-400 hover:text-red-300 font-poppins">
                VIEW MENU →
              </span>
            </Link>
          </div>
        </div>

        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/hotpot-promo.jpg"
            alt="Korean hotpot"
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">HOTPOT SELECTION</h3>
            <p className="text-white mb-4">Customize your bubbling broth</p>
            <Link href="/Menu">
              <span className="text-red-400 hover:text-red-300 font-poppins">
                VIEW MENU →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bar Section (Distinct Style) */}
      <section className="relative py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">KOREAN-INSPIRED BAR</h2>
            <p className="text-gray-300 mb-6">
              Complement your meal with our selection of soju cocktails, 
              Japanese beers, and premium sake.
            </p>
            <Link href="/Menu">
              <p className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 font-poppins w-fit">
                DRINK MENU
              </p>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/bar-section.jpg"
              alt="Korean bar drinks"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}