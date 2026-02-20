import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";

function Home(){
    return (
        <>
            <Header />
            <Banner />
            <Services />
            <Courses />
            <Testimonials />
        </>
    )
}

export default Home;