import '../css/blob.css';
import syn606_gif from '../images/syn606.gif';
import { FiGithub } from "react-icons/fi";

const Header = () => {
    return (
        <>
            <div className="blob"></div>
            <header className="my-20">
                <div className="container mx-auto px-8 gap-12">
                    {/* Main flex container */}
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        {/* Box 1: Main Introduction */}
                        <div className="flex-1 w-full sm:w-auto p-6 sm:p-8">
                            <h2 className="text-4xl sm:text-6xl font-light mb-4">
                                Hey.. I'm
                                <span className="bg-secondary rounded-md py-0.5 px-1 text-primary">
                                    SYN 606
                                </span>
                            </h2>
                            <p className="text-xl mb-4">A web developer and cyber security analyst, also a tech enthusiast.</p>

                            {/* GitHub Button with Icon */}
                            <a
                                href="https://github.com/syn606"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[var(--primary)] text-white py-2 px-6 rounded-lg hover:bg-[var(--secondary)] transition-all duration-300"
                            >
                                <FiGithub className="mr-2 text-xl" /> {/* GitHub icon */}
                                View my GitHub
                            </a>
                        </div>

                        {/* Box 2: Image */}
                        <div className="w-full sm:w-auto p-6 sm:p-8">
                            <img className="rounded-xl shadow-[var(--primary) -14px 10px 38px -23px]" src={syn606_gif} alt="a gif containing syn606 text logo" />
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
