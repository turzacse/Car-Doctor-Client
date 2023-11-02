import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col justify-between lg:flex-row">
                    <div className='relative'>
                        <img src={person} className="max-w-sm rounded-lg shadow-2xl relative"/>
                        <img src={parts} className="absolute max-w-sm rounded-lg shadow-2xl hidden md:block top-1/2 left-1/2 border-8 border-white"/>
                    </div>
                    <div className='w-1/2 p-2'>
                        <h3 className='text-xl text-[#FF3811] font-bold mb-6'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <div className='text-[#737373]'>
                            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                            <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                        <button className="btn mt-6 text-white bg-[#FF3811] border-none hover:bg-orange-400">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;