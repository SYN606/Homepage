import React from "react";
import { FaDiscord, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-secondary text-primary py-16 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
                    {/* Footer Message Section */}
                    <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-6">
                        <p className="border-b border-black pb-4 text-base leading-relaxed text-center md:text-left">
                            It was a distinct honor to have you visit my website. I greatly appreciate your time and interest. Please feel free to submit any inquiries or suggestions you may have.
                        </p>
                        <span className="font-semibold text-2xl">
                            Thank you for your visit.
                        </span>
                    </div>

                    {/* Contact Section */}
                    <div className="w-full md:w-80 flex flex-col items-center md:items-start space-y-6">
                        <h4 className="border-b border-[#052659] text-xl pb-2 text-center md:text-left">
                            Contact Me
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/syn606"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-primary hover:text-[#010b18] transition duration-300 text-base"
                                >
                                    <FaLinkedin className="mr-3 text-lg" />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.com/invite/YcQXAuDK2m"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-primary hover:text-[#010b18] transition duration-300 text-base"
                                >
                                    <FaDiscord className="mr-3 text-lg" />
                                    Discord Server
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://youtube.com/@syn_606?si=rFxCyy6De3Y_fuRa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-primary hover:text-[#010b18] transition duration-300 text-base"
                                >
                                    <FaYoutube className="mr-3 text-lg" />
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://t.me/syn_606"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-primary hover:text-[#010b18] transition duration-300 text-base"
                                >
                                    <FaTelegram className="mr-3 text-lg" />
                                    Telegram
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
