import React from "react";
import { FaDiscord, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-secondary text-primary py-6 mt-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
                    <div className="footer_box-1">
                        <p className="msg border-b border-black pb-4 mb-4 font-open-sans">
                            It was a distinct honor to have you visit my website. I greatly appreciate your time and interest. Please feel free to submit any inquiries or suggestions you may have.
                        </p>
                        <span className="thanks font-semibold text-2xl">Thank you for your visit.</span>
                    </div>

                    <div className="footer_box-2 w-80">
                        <h4 className="font-ibm-plex-serif border-b border-[#052659] text-xl">Contact me</h4>
                        <ul className="footer_nav-list mt-1.5 flex flex-col gap-3 pt-6">
                            <li>
                                <a href="https://www.linkedin.com/in/syn606" className="flex items-center text-primary hover:text-[#010b18] transition-all duration-300 text-base">
                                    <FaLinkedin className="logo mr-3 text-lg" /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.com/invite/YcQXAuDK2m" className="flex items-center text-primary hover:text-[#010b18] transition-all duration-300 text-base">
                                    <FaDiscord className="logo mr-3 text-lg" /> Discord Server
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@syn_606?si=rFxCyy6De3Y_fuRa" className="flex items-center text-primary hover:text-[#010b18] transition-all duration-300 text-base">
                                    <FaYoutube className="logo mr-3 text-lg" /> YouTube
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/syn_606" className="flex items-center text-primary hover:text-[#010b18] transition-all duration-300 text-base">
                                    <FaTelegram className="logo mr-3 text-lg" /> Telegram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
