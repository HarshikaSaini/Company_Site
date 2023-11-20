import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function BasicAccordion({ data }) {
    return (
        <>
            {data.map((item, i) => {
                return (
                    <div style={{ margin: "1rem 3rem" }} key={i}>
                        <Accordion  sx={{ boxShadow: "none", borderRadius: "20px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={item.id}
                                id={item.id}
                                sx={{ height: "5rem" }}
                            >
                                <Typography sx={{ color: "#1476f2", fontSize: "20px", fontWeight: "600", fontFamily: "revert", letterSpacing: "1px", textAlign: "justify" }}>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ color: "gray", fontSize: "20px", fontWeight: "300", fontFamily: "serif", textAlign: "justify" }}>
                                    {item.details}
                                    <ul style={{ padding: "20px", color: "gray" }}>
                                        <li>{item.listitem}</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                );
            })};
        </>
    )
}