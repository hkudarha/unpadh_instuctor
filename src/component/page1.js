import React from "react";
import "./page1.css";
function Page1(){
    return(
            <>
            <div className="main">
                <div className="top">
                        <div className="Howhelp">
                                <h1>How May we Help You?</h1>
                                <div className="searchbox">
                                        <i class="ri-search-line"></i>
                                        <input type="text" placeholder="Search for solutions"></input>
                                </div>
                        </div>
                </div>
                <div className="btn">
                        <button>Learner</button>
                </div>
                <div className="qustions">
                        <h2>
                                Frequently Asked Questions
                        </h2>
                        <div className="boxes">
                                <div className="box">
                                        <h5>Refund Status: common Questions</h5>
                                </div>
                                <div className="box">
                                        <h5>Payment Methods on Udemy</h5>
                                </div>
                                <div className="box">
                                        <h5>Lifetime Access</h5>
                                </div>
                        </div>
                        <div className="boxes">
                                <div className="box">
                                        <h5>How to Find Your Missing Course </h5>
                                </div>
                                <div className="box">
                                        <h5>How to Download Your Certificate of Completion (on a Browser)</h5>
                                </div>
                                <div className="box">
                                        <h5>How to Refund a Course</h5>
                                </div>
                        </div>
                        <div className="boxes">
                                <div className="box">
                                        <h5>Downloading Course Resources </h5>
                                </div>
                                <div className="box">
                                        <h5>Learning With Udemy: Frequently Asked Qustions</h5>
                                </div>
                                <div className="box">
                                        <h5>Troubleshooting Payment Failures</h5>
                                </div>
                        </div>
                </div>
                <div className="Container">
                        <h2>
                                Select a Topic to Search for Help
                        </h2>
                        <div className="parts">
                                <div className="part">
                                        <h5>Getting Started</h5>
                                        <p>Learn how Udemy works and how to start learning.</p>
                                </div>
                                <div className="part">
                                         <i class="ri-account-circle-fill"></i>
                                         <h5>Account/Profile</h5>
                                         <p>Manage your account settings.</p>
                                </div>
                                <div className="part">
                                         <i class="ri-error-warning-line"></i>
                                         <h5>Troubleshooting</h5>
                                         <p>Experiencing a technical issue? Check here.</p>
                                </div>
                        </div>
                        <div className="parts">
                                <div className="part">
                                        <i class="ri-computer-line"></i>  
                                        <h5>Learning Experience</h5>
                                        <p>Everything about the Udemy learning Experience.</p>
                                </div>
                                <div className="part">
                                        <i class="ri-shopping-cart-2-line"></i>
                                        <h5>Purchase/Refunds</h5>
                                        <p>Learn about purchasing Courses,how to send gifts, and refunds.</p>
                                </div>
                                <div className="part">
                                         <i class="ri-smartphone-line"></i>
                                         <h5>Mobile</h5>
                                         <p>On the go? Learn about our Mobile app.</p>
                                </div>
                        </div>
                        <div className="parts">
                                <div className="part">
                                        <i class="ri-lock-line"></i>      
                                        <h5>Trust & Safety</h5>
                                        <p>Trust & Safety information and reporting.</p>
                                </div>
                               
                        </div>
                </div>
            </div>
            </>
            )
    }
    export default Page1;