import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Nav />

      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left side with the image */}
        <div
          className="flex-1 bg-cover bg-center"
          style={{
            backgroundImage: "url('/ourstoryPic.png')", // Replace with your image path
          }}
        ></div>

        {/* Right side with the about us info */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center bg-gray-50">
          <h1 className="text-3xl font-bold mb-6 text-center">ABOUT US</h1>
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            Welcome to Seoul Korean BBQ & Hotpot! Located in the heart of Springfield, we opened our doors in October to bring the rich, authentic flavors of Korea to our community. Our passion for Korean cuisine and hospitality drives everything we do. 
          </p>
          <p className="text-lg text-gray-700 text-justify leading-relaxed mt-4">
            At Seoul Korean BBQ & Hotpot, we strive to create an unforgettable dining experience for you and your loved ones. From our sizzling barbecue grills to our bubbling hotpots, every dish is crafted with care and the finest ingredients to ensure a taste that’s both traditional and unique. Whether you're here for a special occasion or simply to enjoy a great meal, we are dedicated to making your time with us exceptional.
          </p>
          <p className="text-lg text-gray-700 text-justify leading-relaxed mt-4">
            We are thrilled to be part of the Springfield community and look forward to serving you!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
