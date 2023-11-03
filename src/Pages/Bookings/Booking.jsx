

const Booking = ({ booking, handleDelete }) => {
    console.log('hi');
    console.log(booking);
    const { img, service, price, date, _id } = booking;

    

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table border-0">
                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle bg-[#444444] text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                    </div>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12">
                                            <img className="h-24" src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service}</div>
                                        {/* <div className="text-sm opacity-50">United States</div> */}
                                    </div>
                                </div>
                            </td>
                            <td>
                                ${price}
                            </td>
                            <td>{date}</td>
                            <th>
                                <button className="btn btn-ghost btn-md text-white capitalize border-none shadow-2xl bg-[#FF3811]">Pending</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;