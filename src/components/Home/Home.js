
import './Home.css'
import React from 'react';
import Services from '../services/Services';
import Reviews from '../Reviews/Reviews';
import AtAGlance from '../atAGlance/AtAGlance';

const Home = () => {
    return (
        <div>
            <div className="backgorundImg py-5 text-white text-end ">
                <br />
                <div className="me-3">
                    <div className="mb-5">
                        <h2> Wellcome to</h2>
                        <h1> Fantasy Travel and Tourism</h1>
                    </div>
                    <h2 className=" mt-3">No matter where you're going from, we take you there</h2>
                    <button className=" mt-5 btn btn-outline-light fs-5">Contact us</button>
                </div>
            </div>
            <br />
            <div className="bg-light">
                <h1 id="home1" className=" text-center p-2 text-success">Lets introduce your current package !!!</h1>
                <Services></Services>
            </div>
            <br />
            <div>
                <h1 className=" text-center p-2 text-success">Our client is our motivation...</h1>
                <Reviews></Reviews>
            </div>
            <div>
                <h1 className=" text-center p-2 text-success">Fantasy Travel and Tourism At a Glance...</h1>
                <AtAGlance></AtAGlance>
            </div>
        </div >
    );
};

export default Home;