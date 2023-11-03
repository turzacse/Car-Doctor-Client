import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking";
import axios from "axios";


const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5002/bookings?email=${user.email}`;

    useEffect( () =>{

        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    } ,[]);

    const handleDelete = id => {
        const proceed = confirm('Are you want to delete');
        if(proceed){
            fetch(`http://localhost:5002/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Delete Successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    return (
        <div className="my-10">
           <h2 className="text-4xl font-bold">Your Bookings: ${bookings.length}</h2>
           <div>
             {
                bookings.map(booking => <Booking key={booking._id} booking={booking} handleDelete={handleDelete}></Booking>)
             }
           </div>
        </div>
    );
};

export default Bookings;