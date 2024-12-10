import Link from "next/link";

export default function Nav() {
    return (
        <>
            {/* Top Navbar (Address and Contact) */}
            <nav className="bg-gray-900 text-white font-poppins">
                <div className="flex justify-end px-10 py-2 text-sm">
                    <div className="flex items-center mr-6">
                        <img src="/location-pin.svg" className="h-4 w-4 mr-1 filter invert" />
                        <Link href="https://www.google.com/maps/dir/?api=1&destination=Seoul+Korean+BBQ+And+Hotpot%2C+825+Baltimore+Pike%2C+Springfield" className="hover:text-blue-400 transition-colors duration-200">
                            <p className="underline underline-offset-2">825 Baltimore Pike, Springfield, PA</p>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <img src="/phone-svgrepo-com.png" className="h-4 w-4 mr-1 filter invert" />
                        <Link href="/">
                            <p className="hover:text-blue-400 transition-colors duration-200 underline underline-offset-2">484-472-8799</p>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Navigation */}
            <nav className="bg-white shadow-md flex items-center justify-between h-20 px-10 font-poppins text-gray-800">
                {/* Left Links */}
                <div className="flex space-x-6 ml-8">
                    <Link href="/" className="text-black hover:text-blue-500 transition-colors duration-200">
                        <h1 className="font-semibold tracking-wide">HOME</h1>
                    </Link>
                    <Link href="/Menu" className="text-black hover:text-blue-500 transition-colors duration-200">
                        <h1 className="font-semibold tracking-wide">MENU</h1>
                    </Link>
                </div>

                {/* Centered Logo */}
                <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                    <Link href="/">
                        <img 
                            src="betterLogo.png" 
                            alt="Seoul Logo" 
                            className="h-16 w-auto"
                        />
                    </Link>
                </div>

                {/* Right Links */}
                <div className="flex space-x-6 mr-8">
                    <Link href="/AboutUs" className="text-black hover:text-blue-500 transition-colors duration-200">
                        <h1 className="font-semibold tracking-wide">OUR STORY</h1>
                    </Link>
                    <Link href="/ContactUs" className="text-black hover:text-blue-500 transition-colors duration-200 pl-2">
                        <h1 className="font-semibold tracking-wide">CONTACT US</h1>
                    </Link>
                    <Link href="/Reservations" className="text-black hover:text-blue-500 transition-colors duration-200 px-2">
                        <h1 className="font-semibold tracking-wide">RESERVATIONS</h1>
                    </Link>
                </div>
            </nav>
        </>
    );
}
