import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5002/bookings?email=${user.email}`;

    useEffect( () =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    } ,[])

    return (
        <div className="my-10">
           <h2 className="text-4xl font-bold">Your Bookings: ${bookings.length}</h2>
        </div>
    );
};

export default Bookings;