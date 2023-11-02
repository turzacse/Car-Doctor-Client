import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser( email, password) 
         .then(result => {
            const user = result.user;
            console.log(user);
         })
         .catch(error =>{
            console.log(error);
         })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#FFF]">
            <form onSubmit={handleSignUp} className="card-body">
                <h2 className='text-center text-3xl font-bold'>Sign Up</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" 
                    name='name'
                    placeholder="Your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" 
                    name='email'
                    placeholder="Your email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Confirm Password</span>
                    </label>
                    <input type="password" 
                    name='password'
                    placeholder="Your password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    {/* <button 
                    onClick={handleSignUp}
                    className="btn bg-[#FF3811] hover:bg-orange-500 text-white font-semibold"
                    >Sign Up</button> */}

                    <input 
                    className="btn bg-[#FF3811] hover:bg-orange-500 text-white font-semibold" type="submit" value="Sign In" />

                    
                    <h3 className='text-center my-5 font-semibold'>Or Sign In with</h3>

                    <p className='text-center'>Already have an account?<Link to='/login' className='text-[#FF3811]'>Login</Link></p>

                </div>
            </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;