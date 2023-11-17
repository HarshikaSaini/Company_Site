import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../css/BasicAccordion.css"
export default function BasicAccordion() {
    return (
        <div className='main-div'>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none", borderRadius: "20px" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ height: "5rem" }}
                    >
                        <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify" }}>Web Development</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                            We build functional and engaging web products for businesses in diverse industries. Our broad scope of technologies allows us to select the best-fit approach for your specific project.
                            Our engineers create progressive web apps, AR-powered e-commerce stores, and more.
                            <ul style={{padding:"20px", color:"gray"}}>
                            <li>Web Development Services</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{ height: "5rem" }}
                    >
                    <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify" }}>Mobile App Development</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                        Intellectsoft provides custom mobile development application services. Increase your sales and clients’ 
                        loyalty with a stable, interactive, and high-performance mobile app. Our services are mainly in :
                        <ul style={{padding:"20px", color:"gray"}}>
                            <li>Mobile App Development Services</li>
                            <li>iOS App Development Services</li>
                            <li>Android App Development Services</li>
                            <li>Hybrid App Development Services</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={{ height: "5rem" }}
                    >
                    <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify" }}>MVP for Startups and Enterprises</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                        Our experienced managers, business analytics, developers, and designers help companies to validate their business ideas. Test your project with an MVP, 
                        collect feedback from your target audience, and launch a product-market fit solution.
                        <ul style={{padding:"20px", color:"gray"}}>
                            <li>Software Development for StartUps</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                        sx={{ height: "5rem" }}
                    >
                        <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify" }}>Dedicated Development Teams</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                        Increase your time-to-market speed and save significant costs in the hiring process. Our pool of talents delivers fast and high-quality development services on demand. 
                        You can outsource entire projects or augment your existing team with our engineers.
                        <ul style={{padding:"20px", color:"gray"}}>
                            <li>Dedicated Software Development Teams</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                        sx={{ height: "5rem" }}
                    >
                        <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify"}}>Enterprise Software Development</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                        We provide API integration, enterprise software development, mobility, digital transformation services, and more. 
                        Optimize your data management and operational efficiency with our intelligent solutions.
                        <ul style={{padding:"20px", color:"gray"}}>
                            <li>Enterprise Software Development Services</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                        sx={{ height: "5rem" }}
                    >
                        <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify" }}>IT Consulting</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                        Automate your operations and achieve business goals faster with a digital transformation approach Intellecsoft elaborates on strategic
                         IT consulting to improve your software architecture and design performance-oriented tech innovations.
                         <ul style={{padding:"20px", color:"gray"}}>
                            <li>IT Consulting Services</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7a-content"
                        id="panel7a-header"
                        sx={{ height: "5rem" }}
                    >
                        <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify" }}>UI/UX Design</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                        Engage and retain your users with intuitive, captivating, and responsive design.
                         We create user-centric interfaces to ensure improved customer experience.
                         <ul style={{padding:"20px", color:"gray"}}>
                            <li>UI/UX Design Services</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel8a-content"
                        id="panel8a-header"
                        sx={{ height: "5rem" }}
                    >
                        <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify" }}>QA & Testing</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                        Our company executes both manual and automated quality assurance to deliver flawless solutions. Adjusting the best practices and the latest technologies,
                        our company provides efficient performance and high-quality project implementation.
                        <ul style={{padding:"20px", color:"gray"}}>
                            <li>QA & Testing Services</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel9a-content"
                        id="panel9a-header"
                        sx={{ height: "5rem" }}
                    >
                        <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify"}}>Software Architecture Solution</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                        Our tech leads design software architecture to 
                        enable the maintainability, interoperability, security, and stable performance of your product.
                        <ul style={{padding:"20px", color:"gray"}}>
                            <li>Software Architecture Solution Services</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='inner-div'>
                <Accordion sx={{ boxShadow: "none" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel10a-content"
                        id="panel10a-header"
                        sx={{ height: "5rem" }}
                    >
                        <Typography sx={{color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px",textAlign:"justify" }}>DevOps Solutions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif",  textAlign:"justify"}}>
                        Automate and optimize your IT processes with our DevOps services. Secure your business with CI/CD implementation,
                         high-load-ready systems, disaster recovery services, and other technical remedies.
                         <ul style={{padding:"20px", color:"gray"}}>
                            <li>DevOps Solutions Services</li>
                        </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </div>
    );
}