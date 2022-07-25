import React from "react";
import Content from "../../components/HomeComponents/Content";
import Footer from "../../components/HomeComponents/Footer";
import Navbar from "../../components/HomeComponents/Nav";
import styles from "./Home.module.scss";

export default function Home(){
    return(
        <div className={styles.homeContainer}>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}