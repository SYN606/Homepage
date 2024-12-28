import React from "react";
import { FaLaptopCode, FaMicrochip, FaServer, FaShieldAlt, FaNetworkWired } from "react-icons/fa";  // Import React Icons

const Skills = () => {
    // Define the skills data
    const skillsData = [
        {
            title: "Web Development",
            description: "Web Development is a dynamic and ever-evolving field at the forefront of technological innovation. It encompasses a wide spectrum of technologies and practices essential for building modern digital experiences.",
            icon: <FaLaptopCode className="text-2xl text-accent ml-2" />
        },
        {
            title: "Hardware",
            description: "Understanding hardware is essential for anyone diving into the world of computers. From processors and RAM (DIMMs) to motherboards and instruction sets, these components form the backbone of computing technology.",
            icon: <FaMicrochip className="text-2xl text-accent ml-2" />
        },
        {
            title: "Sys Admin",
            description: "System Administration is in high demand due to the growing complexity of managing systems, both in the cloud and on local machines. It involves optimizing performance, ensuring security, and managing diverse software and hardware configurations.",
            icon: <FaServer className="text-2xl text-accent ml-2" />
        },
        {
            title: "Cyber Security",
            description: "Cyber Security is more than just a buzzword—it's a mindset. It goes beyond learning from books and technologies; it’s about adopting a proactive approach to protect information and systems from threats and vulnerabilities.",
            icon: <FaShieldAlt className="text-2xl text-accent ml-2" />
        },
        {
            title: "Networking",
            description: "Networking expertise is essential for understanding clouds, internet infrastructure, network tunneling, and protocols.",
            icon: <FaNetworkWired className="text-2xl text-accent ml-2" />
        },
    ];

    return (
        <>
            <section className="mb-16">
                <div className="container mx-auto px-4">
                    <h3 className="text-4xl text-text font-semibold">Skills</h3>
                    <p className="text-lg text-text mb-6">I don't need ; to complete my statements.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4">
                        {/* Skill 1: Web Development */}
                        <div className="col-start-1">
                            <div className="flex flex-col items-start p-4 rounded-xl bg-[#111928c0] backdrop-blur-[16px] backdrop-saturate-[180%] border border-white/[0.125]">
                                <div className="flex items-center">
                                    <h3 className="text-2xl font-semibold text-white mb-4 text-left">{skillsData[0].title}</h3>
                                    {skillsData[0].icon} {/* Icon after the heading */}
                                </div>
                                <p className="text-base text-white">{skillsData[0].description}</p>
                            </div>
                        </div>

                        {/* Skill 2: Hardware */}
                        <div className="col-start-1 sm:col-start-2 sm:col-span-1">
                            <div className="flex flex-col items-start p-4 rounded-xl bg-primary">
                                <div className="flex items-center">
                                    <h3 className="text-2xl font-semibold text-white mb-4 text-left">{skillsData[1].title}</h3>
                                    {skillsData[1].icon} {/* Icon after the heading */}
                                </div>
                                <p className="text-base text-white">{skillsData[1].description}</p>
                            </div>
                        </div>

                        {/* Skill 3: Sys Admin */}
                        <div className="col-start-1 sm:col-start-3 sm:col-span-1">
                            <div className="flex flex-col items-start p-4 rounded-xl border border-accent">
                                <div className="flex items-center">
                                    <h3 className="text-2xl font-semibold text-white mb-4 text-left">{skillsData[2].title}</h3>
                                    {skillsData[2].icon} {/* Icon after the heading */}
                                </div>
                                <p className="text-base text-white">{skillsData[2].description}</p>
                            </div>
                        </div>

                        {/* Skill 4: Cyber Security */}
                        <div className="col-span-1 sm:col-span-2 sm:col-start-1 sm:row-start-2">
                            <div className="flex flex-col items-start p-4 rounded-xl bg-primary">
                                <div className="flex items-center">
                                    <h3 className="text-2xl font-semibold text-white mb-4 text-left">{skillsData[3].title}</h3>
                                    {skillsData[3].icon} {/* Icon after the heading */}
                                </div>
                                <p className="text-base text-white">{skillsData[3].description}</p>
                            </div>
                        </div>

                        {/* Skill 5: Networking */}
                        <div className="col-start-1 sm:col-start-3 sm:row-start-2">
                            <div className="flex flex-col items-start p-4 rounded-xl bg-[#111928c0] backdrop-blur-[16px] backdrop-saturate-[180%] border border-white/[0.125]">
                                <div className="flex items-center">
                                    <h3 className="text-2xl font-semibold text-white mb-4 text-left">{skillsData[4].title}</h3>
                                    {skillsData[4].icon} {/* Icon after the heading */}
                                </div>
                                <p className="text-base text-white">{skillsData[4].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
