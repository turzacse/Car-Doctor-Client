import { AiOutlineArrowRight } from 'react-icons/ai';

const Service = ({service}) => {
    //const [title, img, price] = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-[200px] rounded-xl' src={service.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {service.title}
                    </h2>
                    <div className="card-actions justify-between text-[#FF3811] font-bold">
                        <div className="">Price: ${service.price}</div>
                        <button className=""><AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;