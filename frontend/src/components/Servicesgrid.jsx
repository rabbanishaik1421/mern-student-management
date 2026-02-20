import React from "react";

function Servicesgrid(){
    return (
        <>
            <section className="servicesgrid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card bg-pink rounded-0">
                                <h5 className="card-title text-center text-white text-uppercase">
                                    Courses
                                </h5>
                                <p className="text-center text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card bg-purple rounded-0">
                                <h5 className="card-title text-center text-white text-uppercase">
                                    Realtime Project Training
                                </h5>
                                <p className="text-center text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card bg-yellow rounded-0">
                                <h5 className="card-title text-center text-white text-uppercase">
                                    Interview Guide
                                </h5>
                                <p className="text-center text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Servicesgrid;