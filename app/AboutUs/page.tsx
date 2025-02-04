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
          <h1 className="text-3xl font-bold mb-6 text-center">OUR STORY</h1>
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            At Seoul Korean BBQ & Hotpot, we’re more than just a restaurant—we’re a celebration of Asian culinary traditions. Nestled in the heart of Springfield, we opened our doors in October with a mission to bring the vibrant flavors and warm hospitality of Asia to your table.
          </p>
          <p className="text-lg text-gray-700 text-justify leading-relaxed mt-4">
            Our journey began with a simple idea: to create a space where friends and families can gather, share delicious food, and make lasting memories. From the sizzle of our barbecue grills to the comforting warmth of our hotpots, every dish is prepared with the freshest ingredients and a dedication to authenticity. Every bite tells a story of tradition and passion.
          </p>
          <p className="text-lg text-gray-700 text-justify leading-relaxed mt-4">
            We’re proud to be part of the Springfield community and are committed to providing an exceptional dining experience for every guest. Thank you for choosing Seoul Korean BBQ & Hotpot—we can’t wait to welcome you and share the flavors of Korea with you!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}