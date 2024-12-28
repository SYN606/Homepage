import React from "react";
import project_1 from '../images/project_1.jpg';
import project_2 from '../images/project_2.webp';
import project_3 from '../images/project_3.png';

const projectData = [
    {
        title: "EduVance-Frontend",
        description:
            "EduVance-Frontend is a modern web application built with React 19 and styled using Tailwind CSS. The app features a dynamic title for each page, providing an improved user experience. It integrates with a backend via an API connection, ensuring seamless data flow and interactivity. Additionally, the project includes a dynamic carousel powered by Swiper, offering smooth and responsive image or content sliders.",
        imageUrl: project_1,
        buttonText: "Visit Code",
        code_link: "https://github.com/SYN606/EduVance-Frontend",
    },
    {
        title: "EduVance-Backend",
        description:
            "EduVance-Backend is a secure backend system with user registration, email authentication, and verification. It features an admin panel for managing users and roles, with role-based authorization for tailored access. Private API access ensures secure data handling for authenticated users. The student panel allows students to manage profiles and view relevant data.",
        imageUrl: project_2,
        buttonText: "Visit Code",
        code_link: "https://github.com/SYN606/EduVance-Backend",
    },
    {
        title: "CSV CRUD Operations with Flask and CLI",
        description:
            "CSV CRUD Operations with Flask and CLI project offers both a command-line interface (CLI) and a web interface for managing CSV files. It enables users to create new CSV files with predefined columns, and perform operations such as adding, updating, or deleting rows. The project leverages Python, Flask, and Pandas to handle CSV data and provides a web interface for easy data visualization.",
        imageUrl: project_3,
        buttonText: "Visit Code",
        code_link: "https://github.com/SYN606/csv-reader",
    },
];

const Projects = () => {
    return (
        <>
            <section className="mt-20">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className="col-span-1 flex flex-col rounded-xl overflow-hidden bg-background shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="flex flex-col p-4">
                                <h3 className="text-xl font-semibold text-text mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-secondary mb-4">{project.description}</p>
                                <a
                                    href={project.code_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="bg-accent text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors">
                                        {project.buttonText}
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
