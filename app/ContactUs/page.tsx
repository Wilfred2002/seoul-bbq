import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ContactUs() {
    return (
        <div className="bg-gray-100 min-h-screen text-gray-800">
            <Nav />

            {/* Hero Section */}
            <section className="relative bg-cover bg-center bg-[url('/hero.webp')] h-[50vh] flex items-center justify-center text-white">
                <div className="bg-black bg-opacity-50 p-8 rounded-md text-center">
                    <h1 className="text-5xl font-bold">Contact Us</h1>
                    <p className="text-xl mt-2">We'd love to hear from you!</p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-12 px-4 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-4xl font-bold text-center mb-6">Get in Touch with Us!</h2>
                    <p className="text-lg text-center mb-8">
                        Whether you're craving authentic Korean BBQ or have a question, we're here to help.
                        Feel free to reach out to us through any of the following methods. Call for a reservation or email us directly!
                    </p>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-semibold mb-2">LOCATION</h3>
                            <p>825 Baltimore Pike, Springfield</p>
                            <p>Pennsylvania, USA</p>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-semibold mb-2">PHONE</h3>
                            <p>484-472-8799</p>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-semibold mb-2">EMAIL</h3>
                            <p><a href="mailto:seoulbbqandhotpot@gmail.com" className="text-blue-600 hover:underline mr-12">seoulbbqandhotpot@gmail.com</a></p>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-semibold mb-2">HOURS</h3>
                            <p>Sunday-Thursday: 12:00 PM - 10:00 PM</p>
                            <p>Friday-Saturday: 12:00 PM - 11:00 PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mb-12">
                        <h3 className="text-3xl font-bold text-center mb-4">Send Us a Message</h3>
                        <form className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-lg font-semibold">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg font-semibold">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg font-semibold">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Your Message"
                                    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:border-gray-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 font-bold text-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map and Image Section */}
            <section className="py-12 px-4 md:px-12 lg:px-24">
                <h3 className="text-3xl font-bold text-center mb-6">Come Visit Us</h3>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    {/* Image Section */}
                    <div className="w-full ">
                        <img 
                            src="/outdoorSeoul.webp"  // Replace with your actual image path
                            alt="Restaurant Interior"
                            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Google Map Section */}
                    <div className="w-full md:w-1/2">
                        <iframe
                            title="Seoul BBQ & Hotpot Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0204482846675!2d-75.35464378415368!3d39.90752997942639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6d56c95dfd8d1%3A0x5e0417c579b9a2a2!2s825%20Baltimore%20Pike%2C%20Springfield%2C%20PA%2019082%2C%20USA!5e0!3m2!1sen!2sus!4v1615829309227!5m2!1sen!2sus"
                            className="w-full h-[500px] border-0 rounded-lg shadow-lg"
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
