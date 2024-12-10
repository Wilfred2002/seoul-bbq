import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Seoul Korean BBQ and Hotpot. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <Link href="/">
                        <p className="hover:text-gray-400">Privacy Policy</p>
                    </Link>
                    <Link href="/">
                        <p className="hover:text-gray-400">Terms of Service</p>
                    </Link>
                    <Link href="/">
                        <p className="hover:text-gray-400">Contact Us</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
