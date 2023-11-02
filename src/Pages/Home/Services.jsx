import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5002/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    console.log(services);

    return (
        <div className="mt-10">
            <div className="text-center space-y-6 w-[717px] mx-auto">
                <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
                <h1 className="text-5xl  font-bold">Our Service Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 mt-10">  
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;