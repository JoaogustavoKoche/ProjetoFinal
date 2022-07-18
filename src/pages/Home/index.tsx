import React from "react";
import Content from "../../components/HomeComponents/Content";
import Footer from "../../components/HomeComponents/Footer";
import Navbar from "../../components/HomeComponents/Nav";

export default function Home(){
    return(
        <div>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}