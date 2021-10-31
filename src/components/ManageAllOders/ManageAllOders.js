import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../utilities/useAuth';




const ManageAllOders = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        const url = "https://young-beach-62796.herokuapp.com/services/myOrder";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services]);


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


    const updateData = (product) => {
        const exists = services.find(pd => pd._id === product._id);
        console.log(exists)
        const url = "https://young-beach-62796.herokuapp.com/services/myOrder"
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(exists)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }



    let totalbill = 0;
    for (const bill of services) {
        const element = bill.price;
        totalbill = totalbill + element;
    }

    return (
        <div>
            <h1 className="py-4 text-success text-center">Total Order Summary</h1>

            {

                services.map(service =>
                    <div key={service._id}>
                        <br />
                        <div className="w-75 bg-success p-4 mx-auto rounded-3">
                            <h4>Package Name : {service.name} </h4>
                            <h5>Email Address : {service.email} </h5>
                            <h5>Confarmation Status: {service.status} </h5>
                            <h5>Unit price of this package: ${service.price} </h5>

                            <hr />
                            <h4>Total Pirce of this package: ${service.price * service.quantity} </h4>
                            <hr />
                            <button onClick={() => removeUser(service)} className="btn btn-outline-dark me-3 mt-2">Remove this package</button>

                            <button onClick={() => updateData(service)} className="btn btn-outline-dark mt-2">Confirm Service</button>
                        </div>
                        <br />
                    </div>
                )
            }
        </div >
    );
};

export default ManageAllOders;