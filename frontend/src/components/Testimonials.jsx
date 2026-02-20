import React from "react";

function Testimonials(){
    return (
        <>
            <section className="testimonial-section p-5">
                <h4 className="mb-5">Student Testimonials</h4>
                <div className="testimonial-container">
                    <div className="testimonial-card">
                        <div class="profile">
                            <img src="https://i.pravatar.cc/100?img=1" />
                            <div>
                                <h3>Ravi Kumar</h3>
                                <span>BTech Student</span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            This course helped me understand MERN stack clearly. The practical sessions were very useful.
                        </p>
                    </div>

                    <div className="testimonial-card">
                        <div className="profile">
                            <img src="https://i.pravatar.cc/100?img=2" />
                            <div>
                                <h3>Sneha Reddy</h3>
                                <span>MCA Student</span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            Excellent teaching methodology and real-time examples made learning easy and interesting.
                        </p>
                    </div>

                    <div className="testimonial-card">
                        <div class="profile">
                            <img src="https://i.pravatar.cc/100?img=3" />
                            <div>
                                <h3>Arjun Singh</h3>
                                <span>Full Stack Trainee</span>
                            </div>
                        </div>
                        <p className="testimonial-text">
                            I improved my coding skills and confidence. Highly recommended for beginners.
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Testimonials;