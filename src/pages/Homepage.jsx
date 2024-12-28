import React from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects"
import { Title } from "react-head";

const Homepage = () => {
    return (
        <>
            <Title>
                Syn 606 - Portfolio
            </Title>
            <Header />
            <Skills />
            <Projects />

        </>
    );
};

export default Homepage;
