import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../utilities/useAuth';



const MyOders = (props) => {
    const [services, setServices] = useState([]);
    const { id } = useParams
    const { user } = useAuth();


    useEffect(() => {
        const url = "http://localhost:5000/services/myOrder";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const yourData = services.filter(service => service.email === user.email);

    return (
        <div className="bg-light">
            <h1 className="py-4 text-success text-center">Your Order Summary</h1>

            {
                yourData.map(service =>
                    <div key={service._id}>
                        <br />
                        <div className="w-75 bg-success p-4 mx-auto rounded-3">
                            <h4>Package Name : {service.name} </h4>
                            <h5>Your Email Address : {service.email} </h5>
                            <p> <span className="fs-4 fw-bold">About your package :</span> {service.dis}</p>
                            <h4>Your Package include:</h4>
                            <ul>
                                <li>{service.include_1}</li>
                                <li>{service.include_2}</li>
                                <li>{service.include_3}</li>
                            </ul>
                            <h5>Confarmation Status: {service.status} </h5>
                            <h5>Total Pirce of this package: ${service.price} </h5>
                            <hr />
                            <button className="btn btn-outline-dark me-3 mt-2">Remove this package</button>
                            <button className="btn btn-outline-dark mt-2">Add More package</button>
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }

        </div >
    );
};

export default MyOders;