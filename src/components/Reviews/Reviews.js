import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';


const Reviews = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/services";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div>
            <Row xs={1} sm={1} md={2} lg={3} className="m-2">
                {
                    services.map(service =>
                        <Col key={service._id} className="my-3">
                            <Card className="shadow ">
                                <div className="d-flex justfy-content-around">
                                    <img src={service.rel_img} alt="sdf" className="rounded-circle w-50 img-fluid mx-auto p-2 border border-info m-2" />
                                </div>
                                <Rating className="fs-1 text-center bg-light p-1 my-1"
                                    initialRating={service.rating}
                                    readonly
                                />
                                <Card.Body>
                                    <h4>{service.rel_name}</h4>
                                    <h5 className="text-muted">{service.rel_address}</h5>
                                    <p className="py-3">{service.rel_text}</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    )
                }
            </Row>
        </div >
    );
};

export default Reviews;