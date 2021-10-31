import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../utilities/useAuth';



const MyOders = (props) => {
    const [services, setServices] = useState([]);
    const { id } = useParams
    const { user } = useAuth();


    useEffect(() => {
        const url = "https://young-beach-62796.herokuapp.com/services/myOrder";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services]);

    const yourData = services.filter(service => service.email === user.email);

    const removeUser = (product) => {

        var result = window.confirm("Want to delete?");
        if (result) {
            const exists = services.find(pd => pd._id === product._id);
            console.log(exists)
            fetch('https://young-beach-62796.herokuapp.com/services/myOrder', {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(exists)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount) {
                        alert("Your order removed")
                    }
                })
        }

    }

    let totalbill = 0;
    for (const bill of yourData) {
        const element = parseInt(bill.price);
        totalbill = totalbill + element;
    }

    return (
        <div className="bg-light">
            <h1 className="py-4 text-success text-center">Your Order Summary</h1>

            {

                yourData.map(service =>
                    <div key={service._id}>
                        <div key={service._id}>
                            <br />
                            <div className="w-75 bg-success p-4 mx-auto rounded-3">
                                <h4>Package Name : {service.name} </h4>
                                <h5>Your Email Address : {service.email} </h5>
                                <h4>Your Package include:</h4>
                                <ul>
                                    <li>{service.include_1}</li>
                                    <li>{service.include_2}</li>
                                    <li>{service.include_3}</li>
                                </ul>
                                <h5>Confarmation Status: {service.status} </h5>
                                <h5>Unit price of this package: ${service.price} </h5>
                                <h5> Total numbers of unit(Quantity): {service.quantity} </h5>
                                <hr />
                                <h4>Total Pirce of this package: ${service.price * service.quantity} </h4>
                                <hr />

                                <button onClick={() => removeUser(service)} className="btn btn-outline-dark me-3 mt-2">Remove this package</button>

                                <Link to="/home#home1">
                                    <button className="btn btn-outline-dark mt-2">Add More package</button>
                                </Link>
                            </div>
                            <br />
                        </div>
                    </div>
                )
            }

            <div className="w-75 bg-secondary p-4 mx-auto my-3 rounded-3">
                <h1>Your total bill is : {totalbill}</h1>
            </div>
        </div >
    );
};

export default MyOders;