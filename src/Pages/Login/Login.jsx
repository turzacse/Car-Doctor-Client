import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handlelogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };
                //navigate(location?.state? location?.state : '/')
                //get access token
                axios.post('http://localhost:5002/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#FFF]">
                        <form onSubmit={handlelogin} className="card-body">
                            <h2 className='text-center text-3xl font-bold'>Login</h2>
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
                    onClick={handlelogin}
                    className="btn bg-[#FF3811] hover:bg-orange-500 text-white font-semibold"
                    >Sign In</button> */}

                                <input
                                    className="btn bg-[#FF3811] hover:bg-orange-500 text-white font-semibold" type="submit" value="Sign In" />


                                <h3 className='text-center my-5 font-semibold'>Or Sign In with</h3>

                                <p className='text-center'>Have an account? <Link to='/register' className='text-[#FF3811]'>Sign Up</Link></p>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;