import React, { useState } from "react";
import Header from "../components/Header";
import Pagebanner from "../components/Pagebanner";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const userLogin= async (e)=>{
        e.preventDefault();


        const res = await axios.post(`http://localhost:3000/api/students/getinfo`,{
            email:email
        });

        if(!res.data)
            setMessage("Invalid login credentials.");

        console.log(`Database Password ${res.data.password}`);
        console.log(`Login Password ${password}`);

        if(res.data.password === password){
            navigate('/student-dashboard');
        }
        else{
            setMessage("Invalid username and password.");
        }

    }

    return (
        <>
            <Header />
            <Pagebanner title="Login" />

            <section className="login-screen p-5 bg-light">
                <div className="container">
                    <div className="login-box shadow-lg">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body login-left-screen">
                                        <p>Nice to see you again</p>
                                        <h1>Welcome Back</h1>
                                        <div className="login-dash"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="container">
                                    <div className="card login-right-screen">
                                        <div className="login-form">
                                            <h4 className="text-center mb-3">Login</h4>
                                            <p>Don't have an account <Link to="/register">Create a new account here?</Link>
                                            </p>
                                            <form action="" method="post" autoComplete="off" onSubmit={userLogin}>
                                                <div className="form-group">
                                                    <label htmlFor="Username">Username</label>
                                                    <input type="email" className="form-control shadow-sm" name="username" id="username" placeholder="Enter your email" onChange={(e)=>{
                                                        setEmail(e.target.value)
                                                    }} />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" className="form-control shadow-sm" name="password" id="password" placeholder="Enter password" onChange={(e)=>{
                                                        setPassword(e.target.value)
                                                    }} />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="" className="rememberme">
                                                        <input type="checkbox" name="" id="" />
                                                        &nbsp;Remember me
                                                    </label>
                                                </div>

                                                <div className="form-group">
                                                    <button className="btn btn-outline-primary rounded-pill">Sign In</button>
                                                </div>
                                            </form>
                                            <p>Forgot Password <a href="#">Click Here</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;