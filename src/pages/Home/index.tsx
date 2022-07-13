import React from "react";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";

export default function Home(){
    return(
        <div>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}