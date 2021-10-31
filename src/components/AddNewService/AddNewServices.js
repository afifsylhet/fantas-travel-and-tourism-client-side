import React, { useRef } from 'react';



const AddNewServices = () => {


    const nameRef = useRef("")
    const img_1Ref = useRef("")
    const img_2Ref = useRef("")
    const img_3Ref = useRef("")
    const durationRef = useRef("")
    const include_1Ref = useRef("")
    const include_2Ref = useRef("")
    const include_3Ref = useRef("")
    const disRef = useRef("")
    const priceRef = useRef(0)
    const rating_CountRef = useRef(0)

    const setToDatabase = (e) => {
        const name = nameRef.current.value;
        const img_1 = img_1Ref.current.value;
        const img_2 = img_2Ref.current.value;
        const img_3 = img_3Ref.current.value;
        const duration = durationRef.current.value;
        const include_1 = include_1Ref.current.value;
        const include_2 = include_2Ref.current.value;
        const include_3 = include_3Ref.current.value;
        const dis = disRef.current.value;
        const price = priceRef.current.value;
        const rating_Count = rating_CountRef.current.value;

        const newService = { name, img_1, img_2, img_3, duration, include_1, include_2, include_3, dis, price, rating_Count }

        fetch('https://young-beach-62796.herokuapp.com/services', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data)
                    alert("Successfully added the user")
                }
            })

        e.target.reset();
        e.preventDefault();
        console.log(newService)
    }


    return (
        <div className="container p-3">
            <div className=" border border-muted border-2 p-3">
                <h2 className="text-muted my-3 text-center">Add a new service</h2>
                <p>For adding a new service, please fillup the bellow form. In this form have to need fillup all input section. Please note that if you blank any input blank, then your data will not sent to server. </p>

                <div>
                    <form onSubmit={setToDatabase}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Package Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Type your package name" ref={nameRef} />
                        </div>

                        <div className="mb-3">
                            <label for="imgUrl1" className="form-label">Frist Image Url</label>
                            <input type="text" className="form-control" id="imgUrl1" placeholder="Type your frist img url" ref={img_1Ref} />
                        </div>
                        <div className="mb-3">
                            <label for="imgUrl2" className="form-label">Second Image Url</label>
                            <input type="text" className="form-control" id="imgUrl2" placeholder="Type your second img url" ref={img_2Ref} />
                        </div>
                        <div className="mb-3">
                            <label for="imgUrl3" className="form-label">Third Image Url</label>
                            <input type="text" className="form-control" id="imgUrl3" placeholder="Type your third img url" ref={img_3Ref} />
                        </div>

                        <div className="mb-3">
                            <label for="duration" className="form-label">Duration</label>
                            <input type="text" className="form-control" id="duration" placeholder="Type  package duration" ref={durationRef} />
                        </div>

                        <div className="mb-3">
                            <label for="include1" className="form-label">This Package Include: </label>
                            <input type="text" className="form-control" id="include1" placeholder="Type package include: food" ref={include_1Ref} />
                        </div>
                        <div className="mb-3">
                            <label for="include2" className="form-label">This Package Include: </label>
                            <input type="text" className="form-control" id="include2" placeholder="Type package include: Accomodation" ref={include_2Ref} />
                        </div>
                        <div className="mb-3">
                            <label for="include3" className="form-label">This Package Include: </label>
                            <input type="text" className="form-control" id="include3" placeholder="Type package include: Transport" ref={include_3Ref} />
                        </div>
                        <div className="mb-3">
                            <label for="dis" className="form-label">A short discription about the package </label>
                            <textarea type="text" className="form-control" id="dis" placeholder=" A short discription about your package" ref={disRef} />
                        </div>

                        <div className="mb-3">
                            <label for="price" className="form-label"> Price in USD </label>
                            <input type="number" className="form-control" id="price" placeholder="Type  the package price" ref={priceRef} />
                        </div>

                        <div className="mb-3">
                            <label for="rating" className="form-label"> Total Rating Count </label>
                            <input type="number" className="form-control" id="rating" placeholder="Type total rating count like 567" ref={rating_CountRef} />
                        </div>

                        <input type="submit" value="Submit" className="btn btn-secondary" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddNewServices;