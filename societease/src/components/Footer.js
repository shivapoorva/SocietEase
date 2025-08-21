import { FaLinkedin, FaInstagram, FaFacebook  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "../styles/Footer.css";

const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <footer className="relative bg-black text-white">
            <div className="absolute top-20  left-0 w-[100%] overflow-hidden">
            
                <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20 footer">
                    <div className="flex flex-col gap-5">
                    <h2 className="text-3xl text-blue-300">SocietEase</h2>
                        <p >
                        SocietEase provides online software for housing societies,
                         simplifying tasks like maintainance and ensuring 
                        peace of mind with reliable, computerized management.
                        </p>
                    </div>

                    <div>
    <li className="text-[22px] list-none font-semibold text-blue-300 py-2 uppercase">
        About Company
    </li>
    <ul className="pl-0">
        <li className="mb-3">
            <a href="/terms">Terms & Conditions</a>
        </li>
        <li className="mb-3">
            <a href="/privacy">Privacy Policy</a>
        </li>
        <li className="mb-3">
            <a href="/abuse">Report Abuse</a>
        </li>
    </ul>
</div>


                    <div>
                        <li className="text-[22px] list-none font-semibold text-blue-300 py-2 uppercase">
                            Coming Soon on</li>
                            <div className="flex space-x-10">
                            <a
                                className="text-white hover:text-blue-300 transform hover:scale-150 
                            transition-all duration-150 ease-in-out text-3xl" href="https://in.linkedin.com//">
                                <FaLinkedin />
                            </a>
                            <a
                                className="text-white hover:text-blue-300 transform hover:scale-150
                             transition-all duration-150 ease-in-out text-3xl" href="https://www.facebook.com/">
                                <FaFacebook  />
                            </a>
                            <a
                                className="text-white hover:text-blue-300 transform hover:scale-150
                             transition-all duration-150 ease-in-out text-3xl" 
                             href="https://twitter.com/?lang=en">
                               <FaXTwitter />

                            </a>
                            <a
                                className="text-white hover:text-blue-300 transform hover:scale-150
                             transition-all duration-150 ease-in-out text-3xl" href="https://www.instagram.com/">
                                <FaInstagram />
                            </a>
                            </div>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-blue-300 py-2 uppercase">Contact US</h2>
                        <p className="text-[16px] my-4"> SocietEase@gmail.com</p>
                       
                        
                    </div>
                </div>

                <div className="mt-10000">
                </div>
                <h6 className=" text-center text-blue-300">&copy;SocietEase {Year}</h6>
           </div>
     </footer>
    );
};

export default Footer;