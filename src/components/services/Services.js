import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utilities/useAuth'


const Services = () => {
    const { user } = useAuth();

    const [services, setServices] = useState([])

    useEffect(() => {
        const url = "http://localhost:5000/services";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleAddToCart = async (product) => {
        const exists = services.find(pd => pd._id === product._id);
        exists.email = user.email;
        exists.status = "Painding";
        // if (!exists.quantity) {
        //     exists.quantity = 1;
        // } else {
        //     exists.quantity = exists.quantity + 1;
        // }
        console.log(exists)
        fetch('http://localhost:5000/services/myOrder', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exists)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    alert("Your Order Received")
                }
            })
    }



    return (
        <div>
            <div className="mx-3 pb-3">
                {
                    services.map(service => {

                        return (
                            <div className="row mt-4 shadow p-2" key={service.ObjectId} >

                                <div className="col-lg-5 col-md-12 col-xs-12">


                                    <div>

                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={service.img_1}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>{service.name}</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={service.img_2}
                                                    alt="Second slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>{service.name}</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={service.img_3}
                                                    alt="Third slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>{service.name}</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>


                                    </div>



                                    {/* <img src={service.img_1} alt="" className="img-fluid" /> */}
                                </div>

                                <div className="col-lg-4 col-md-6 col-xs-12">
                                    <h3 className="text-success border border-success border-2 border-top-0 border-start-0 border-end-0 pb-2">{service.name}</h3>

                                    <h4 className="text-muted my-2">Duration : {service.duration}</h4>
                                    <p className="fw-ligh my-2">{service.dis}</p>
                                    <p>{service.name} package is one of the most attractive packages in our business. Travelers loved this package so many times. This package has a total of {service.rating_Count} reviews. On average to get a single review we need to sell at least 20 packages.   </p>
                                </div>

                                <div className="col-lg-3 col-md-6col-xs-12 bg-white ">
                                    <div className="">
                                        <h3 className="mb-2 text-success">Price : $ {service.price}</h3>
                                        <h3 className="text-muted"> Package Includes: {service.pirce}
                                        </h3>
                                        <ul className="mb-2 ms-3 fs-5">
                                            <li >{service.include_1}</li>
                                            <li >{service.include_2}</li>
                                            <li >{service.include_3}</li>
                                        </ul>
                                        <h5 className="text-success">Total Review : {service.rating_Count}</h5>
                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <Link to={`/myOrders/${service._id}`}>
                                                <button
                                                    onClick={() => handleAddToCart(service)}
                                                    className="btn btn-success py-2 px-3  fs-5 w-100">Book This Package</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div >
    );
};

export default Services;