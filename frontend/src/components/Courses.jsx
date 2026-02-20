import React from "react";

function Courses(){
    return (
        <>
        <section className="courses-section mt-5 p-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="container">
                            <h4 className="text-center p-5">Courses We Offer</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">
                        <div className="card shadow-lg">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <h5>MERN Full Stack Development</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" className="btn btn-xs btn-outline-primary rounded-pill">Get Started</button>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-sm-3">
                        <div className="card shadow-lg">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <h5>MEAN Full Stack Development</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" className="btn btn-xs btn-outline-primary rounded-pill">Get Started</button>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-sm-3">
                        <div className="card shadow-lg">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <h5>PHP Full Stack Development</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" className="btn btn-xs btn-outline-primary rounded-pill">Get Started</button>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-sm-3">
                        <div className="card shadow-lg">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <h5>Laravel Full Stack Development</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" className="btn btn-xs btn-outline-primary rounded-pill">Get Started</button>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Courses;