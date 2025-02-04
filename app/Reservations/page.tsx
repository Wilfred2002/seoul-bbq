import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Reservations() {
    return (
        <>
            <Nav />
            <div className="flex flex-col md:flex-row w-full min-h-screen">
                {/* Left side with the image */}
                <div
                    className="flex-1 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/reservationPic.png')",
                    }}
                ></div>

                {/* Right side with the reservation info */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center bg-gray-50">
                    <h1 className="text-3xl font-bold mb-6 text-center">RESERVATIONS</h1>
                    <p className="text-lg text-gray-700 text-center">
                        To book a table, please visit our reservation page on Yelp or call us.
                    </p>
                    <p className="text-lg text-gray-700 mt-2 text-center">
                        We look forward to hosting you!
                    </p>
                                        {/* Yelp Reservation Button */}
                                        <a
                        href="https://www.yelp.com/biz/seoul-korean-bbq-and-hot-pot-springfield#location-and-hours"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 px-6 py-3 bg-black text-white text-lg font-medium rounded-md shadow-md hover:bg-gray-800"
                    >
                        GO TO YELP!
                    </a>
                    {/* Address Section */}
                    <div className="mt-8 w-full max-w-lg">
                        <h2 className="text-xl font-semibold mb-4">MAP</h2>
                        <p className="text-gray-700 mb-1">825 Baltimore Pike</p>
                        <p className="text-gray-700 mb-4">Springfield, PA 19064</p>
                        <iframe
                            title="Seoul BBQ & Hotpot Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0204482846675!2d-75.35464378415368!3d39.90752997942639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6d56c95dfd8d1%3A0x5e0417c579b9a2a2!2s825%20Baltimore%20Pike%2C%20Springfield%2C%20PA%2019082%2C%20USA!5e0!3m2!1sen!2sus!4v1615829309227!5m2!1sen!2sus"
                            className="w-full h-[200px] border-0 rounded-lg shadow-lg"
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Hours of Operation */}
                    <div className="mt-8 w-full max-w-lg">
                        <h2 className="text-xl font-semibold mb-4">HOURS</h2>
                        <ul className="text-gray-700">
                            <li>Mon: 12:00 PM - 10:00 PM</li>
                            <li>Tue: 12:00 PM - 10:00 PM</li>
                            <li>Wed: 12:00 PM - 10:00 PM</li>
                            <li>Thu: 12:00 PM - 10:00 PM</li>
                            <li>Fri: 12:00 PM - 11:00 PM</li>
                            <li>Sat: 12:00 PM - 11:00 PM</li>
                            <li>Sun: 12:00 PM - 10:00 PM</li>
                        </ul>
                        <p className="text-green-600 font-bold mt-4">Open now</p>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
}
