import React from "react";
import "../css/home.css";
import { Marqueee } from "./Marqueee";
import assets from "../assets/assets.json";
import data from "../assets/accordion.json";
import cardData from "../assets/card.json"
import { Typography } from "@mui/material"
import BasicAccordion from "./BasicAccordion";
import BasicCard from "./BasicCard";
const Home = () => {

    return (
        <>
            <div>
                <img className="header-image" src="../images/headimage.jpg" alt="headimage" />
            </div>
            <Typography variant="h5" fontFamily={"revert"} sx={{ textAlign: "center", color: "GrayText" }}>Our Partners</Typography>
            <Marqueee {...assets} />
            <div className="outer-div">
                <h2 style={{ textAlign: "center", color: "whitesmoke", marginTop: "15px", fontSize: "2rem" }}>
                    THE SOFTWARE DEVELOPMENT COMPANY THAT EMPOWERS BUSINESSES</h2>
                <div className="outer-div2">
                    <div className="inner1">
                        <Typography variant="body" sx={{ color: "whitesmoke", fontSize: "20px", justifyContent: "flex-start", lineHeight: "22px" }}>Since 2007, Intellecsoft have been providing full-cycle, end-to-end software development services. We help companies launch their projects, adopt advanced technologies, switch to digital-first strategies, and grow their businesses. With 600+ custom software solutions delivered, Intellectsoft is trusted by startups, SMBs, and Fortune 500 enterprises in North America, Europe, Australia, Singapore, Hong Kong, and beyond. We empower our clients to deliver improved
                            experiences to their customers and employees, gain competitive advantages and enhance internal efficiency.Since 2007, Intellecsoft have been providing full-cycle, end-to-end software development services.chnologies, switch to digital-first strategies, and grow their businesses. With 600+ custom software solutions delivered, Intellectsoft is trusted by startups, SMBs, and Fortune 500 enterprises in North America, Europe, Australia, Singapore, Hong Kong, and beyond.

                        </Typography>
                    </div>
                    <div className="inner1">
                        <Typography variant="body" sx={{ color: "whitesmoke", fontSize: "20px", justifyContent: "flex-start", lineHeight: "22px" }}>Our comprehensive approach includes consulting, engineering, and support services. As a software solutions provider, we deliver custom AI, Blockchain, IoT, mobile, and other solutions. Intellecsoft handles projects of any type and difficulty. From simple mobile apps to cloud-based enterprise-level products. Reinforce your business with the combination of our expertise, resources, intelligence in technology,
                            and passion for delivering innovative software solutions that make a difference.Our comprehensive approach includes consulting, engineering, and support services. As a software solutions provider, we deliver custom AI, Blockchain, IoT, mobile, and other solutions. Intellecsoft handles projects of any type and difficulty. From simple mobile apps to cloud-based enterprise-level products. Reinforce your business with the combination of our expertise, resources, intelligence in technology, and passion for delivering innovative software solutions that make a difference.
                        </Typography>
                    </div>
                </div>
            </div>

            <section className="project-offers">
                <div className="heading2">
                    <h2>EXPLORE OUR OFFERS TO LAUNCH YOUR PROJECT SMOOTHLY</h2>
                </div>
                <BasicAccordion {...data} />
                <div className="heading2">
                    <h2>INTELLIGENT SOFTWARE SOLUTIONS</h2>
                </div>
                <BasicCard {...cardData} />
                <div className="heading2">
                    <h2>OUR SOFTWARE AGENCY'S DEVELOPMENT CYCLE</h2>
                    <p className="lifecycle-para">We are a custom software solution development provider, which means that our development cycle will also be tailored to your project and needs. You can order end-to-end full-cycle software development, or you can pick the services you need.</p>
                    <img   src="../images/solution-lifecycle.svg" alt="lifecycle" height="100%" width="80%"/>
                </div>
                <div className="heading2">
                    <h2>AWARDS & RECOGNITION</h2>
                </div>

            </section>

        </>
    )
}
export default Home