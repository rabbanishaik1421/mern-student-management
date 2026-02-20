import React from "react";

function Pagebanner({title}){
    return (
        <>
            <div className="container-fluid bg-blue text-white text-center py-5">
                <p className="lead">Learn Web Development Easily</p>
                <h1>{title}</h1>                
            </div>
        </>
    )
}

export default Pagebanner;