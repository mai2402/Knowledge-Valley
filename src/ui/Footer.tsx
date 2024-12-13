
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="bg-primary text-white py-6">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Knowledge Valley</h3>
                    <p>Unlock your full potential with a range of high-quality online courses. Learn anytime, anywhere.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/about" className="hover:text-teal-500">About us</Link></li>
                        <li><Link to="/contact" className="hover:text-teal-500">Contact us</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <ul className="space-y-2">
                        <li><Link to="https://facebook.com" className="hover:text-teal-500">Facebook</Link></li>
                        <li><Link to="https://twitter.com" className="hover:text-teal-500">Twitter</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8 text-sm">
                <p>&copy; 2024 Knowledge Valley. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;



