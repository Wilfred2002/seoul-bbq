import Image from "next/image";
import Nav from "./components/Nav";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black font-roboto">
      <Nav />

      {/* Background Image Section */}
      <section className="relative flex items-center justify-center h-screen">
        {/* Background Image */}
        <Image
          src="/herooo.png" // Make sure this matches the location of the uploaded image
          alt="Background Image"
          layout="fill" // Makes the image cover the entire section
          objectFit="cover" // Ensures the image covers the full area
          quality={100} // Set quality to 100 for maximum resolution
          className="absolute inset-0 z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-45 z-10"></div>

        {/* Text Content on Top of Image */}
        <div className="relative z-20 text-center text-white p-8">
          <h1 className="text-6xl font-bold font-roboto">SEOUL KOREAN BBQ AND HOTPOT</h1>
          <h2 className="text-xl mt-4 font-poppins">Experience premium and authentic quality with no limits</h2>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 md:space-x-8">
        {/* Left Image */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <Image
            src="/leftimg.png" // Replace with your left image path
            alt="Korean BBQ Dish"
            width={600} // Adjust width and height as needed
            height={800}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:w-1/3 px-4 mb-24">
          <h3 className="text-sm text-red-600 mb-2 font-poppins">ABOUT US</h3>
          <h2 className="text-4xl font-semibold mb-4 font-poppins">KOREA TO SPRINGFIELD</h2>
          <hr className="w-12 mx-auto border-t-2 border-red-600 mb-4" />
          <p className="text-gray-700 mb-6">
            Our mission at Seoul KBBQ and Hotpot is to deliver an authentic all-you-can-eat, premium dining experience that brings the rich flavors 
            of Korean BBQ and Hotpot to our guests. We're dedicated to offering the true taste of Korean barbecue in a modern, convenient setting. Our menu showcases a 
            diverse selection of expertly prepared Korean BBQ options, including beef, pork, and chicken, all crafted to perfection. 
          </p>
          <Link href="/AboutUs">
            <p className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-green-700 font-poppins">
              LEARN MORE
            </p>
          </Link>
          <p className="text-gray-500 text-sm mt-4">SERVING DINE-IN w/ TAKEOUT OPTION</p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <Image
            src="/rightimg.png" // Replace with your right image path
            alt="Korean BBQ Sauce"
            width={600} // Adjust width and height as needed
            height={800}
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
