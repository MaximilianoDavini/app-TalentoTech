import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Layout/Layout.module.css";

export function Layout ({children}) {

    return (
        <>
        <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );

}
