import React from 'react';
import "./Home.scss"

import {Navbar, Header, Featured, PropertyList, FeaturedProperties, MailList, Footer} from "components";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Header/>
            <div className="home__container">
                <Featured/>
                <h1 className="home__title">Browse by property type</h1>
                <PropertyList />
                <h1 className="home__title">Home Guest Love</h1>
                <FeaturedProperties/>
                <MailList />
                <Footer/>

            </div>
        </div>
    );
};

export default Home;
