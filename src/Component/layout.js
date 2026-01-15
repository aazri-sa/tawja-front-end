import React from 'react';
import Header from "./header";
import Footer from "./footer";

const Layout =({children}) =>{
    return(
        <>
            <Header/>
            <main className={"container mt-5 mb-5 mx-auto flex max-w-7xl"}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;