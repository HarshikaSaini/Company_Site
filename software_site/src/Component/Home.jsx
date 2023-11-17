import React from "react";
import "../css/home.css"
import { Marqueee } from "./Marqueee";
import assets from "../assets/assets.json";
import { Typography } from "@mui/material"
import BasicAccordion from "./BasicAccordion";
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
                        <Typography variant="body" sx={{ color: "whitesmoke", fontSize: "20px", justifyContent: "flex-start", lineHeight:"22px"}}>Since 2007, Intellecsoft have been providing full-cycle, end-to-end software development services. We help companies launch their projects, adopt advanced technologies, switch to digital-first strategies, and grow their businesses. With 600+ custom software solutions delivered, Intellectsoft is trusted by startups, SMBs, and Fortune 500 enterprises in North America, Europe, Australia, Singapore, Hong Kong, and beyond. We empower our clients to deliver improved
                            experiences to their customers and employees, gain competitive advantages and enhance internal efficiency.Since 2007, Intellecsoft have been providing full-cycle, end-to-end software development services.chnologies, switch to digital-first strategies, and grow their businesses. With 600+ custom software solutions delivered, Intellectsoft is trusted by startups, SMBs, and Fortune 500 enterprises in North America, Europe, Australia, Singapore, Hong Kong, and beyond.
                            
                        </Typography>
                    </div>
                    <div className="inner1">
                        <Typography variant="body" sx={{ color: "whitesmoke", fontSize: "20px", justifyContent: "flex-start" , lineHeight:"22px"}}>Our comprehensive approach includes consulting, engineering, and support services. As a software solutions provider, we deliver custom AI, Blockchain, IoT, mobile, and other solutions. Intellecsoft handles projects of any type and difficulty. From simple mobile apps to cloud-based enterprise-level products. Reinforce your business with the combination of our expertise, resources, intelligence in technology,
                            and passion for delivering innovative software solutions that make a difference.Our comprehensive approach includes consulting, engineering, and support services. As a software solutions provider, we deliver custom AI, Blockchain, IoT, mobile, and other solutions. Intellecsoft handles projects of any type and difficulty. From simple mobile apps to cloud-based enterprise-level products. Reinforce your business with the combination of our expertise, resources, intelligence in technology, and passion for delivering innovative software solutions that make a difference.
                        </Typography>
                    </div>
                </div>
            </div>

            <section className="project-offers">
                <div className="heading2">
                   <h2>EXPLORE OUR OFFERS TO LAUNCH YOUR PROJECT SMOOTHLY</h2> 
                </div>
               <BasicAccordion  />
            </section>

        </>
    )
}
export default Home