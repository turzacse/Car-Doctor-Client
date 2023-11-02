import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Checkout = () => {
    const service = useLoaderData();
    console.log(service);
    const {price, title, _id,img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const booking = {
            customerName: name,
            email, 
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5002/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="my-10">
            <h2>{service.title}</h2>
            <form onSubmit={handleBookService} className="card-body bg-base-200 shadow-2xl">
                <div className="lg:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" defaultValue={user?.displayName} type="text" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name="date"  type="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" defaultValue={user?.email} type="email" placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Deu Ammount</span>
                        </label>
                        <input name="ammount" type="text" defaultValue={ '$' + service.price} placeholder="Due ammount" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-warning" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;