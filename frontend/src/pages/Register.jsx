import { React, useState } from "react";
import Header from "../components/Header";
import Pagebanner from "../components/Pagebanner";
import { Link } from "react-router-dom";
import axios from "axios";

function Register(){
    const [formData, setFormdata] = useState({
        name:"",
        email:"",
        password:"",
        phone:""        
    });

    const [message, setMessage] = useState("");

    const handleChange=(e)=>{
        setFormdata({
            ...formData,
            [e.target.name]:e.target.value
        })
    };

    const userRegister= async (e)=>{
        e.preventDefault();
        
        try {
            const res = await axios.post(`http://localhost:3000/api/students`, formData);
            resetFields();
        } catch (error) {
            setMessage(error.message+"=>");
        }
    };

    const resetFields=()=>{
        setFormdata({
            name:"",
            email:"",
            password:"",
            phone:""
        });
        setMessage("New student registration is completed.");

        hideMessage();
    }

    const hideMessage=()=>{
        setTimeout(()=>{
            setMessage('');
        }, 3000)
    }

    return (
        <>
            <Header />
            <Pagebanner title="Register" />

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
                                            {message && 
                                            <div className="alert alert-info">{message}</div>
                                            }
                                            <h4 className="text-center mb-3">Create Account</h4>
                                            <p>Already have an account <Link to="/login">Login here?</Link>
                                            </p>
                                            <form action="" method="post" autoComplete="off" onSubmit={userRegister}>
                                                <div className="form-group">
                                                    <label htmlFor="Username">Name</label>
                                                    <input type="text" className="form-control shadow-sm" name="name" id="name" placeholder="Enter your full name" autoComplete="off" value={formData.name} onChange={handleChange} />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="Username">Email</label>
                                                    <input type="email" className="form-control shadow-sm" name="std_email_26" id="std_email_26" placeholder="Enter your email" autoComplete="off" value={formData.email} onChange={handleChange} />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input type="text" className="form-control shadow-sm" name="phone" id="phone" placeholder="Enter your phone number" autoComplete="off" value={formData.phone} onChange={handleChange} />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" className="form-control shadow-sm" name="password" id="password" autoComplete="off" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="" className="termsandconditions">
                                                        <input type="checkbox" name="" id="" />
                                                        &nbsp;Agree the terms and conditions
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

export default Register;