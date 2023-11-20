import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BasicCard = ({ cardData }) => {
  return (
    <>
      {
        cardData.map((items, i) => {
          return (
            <Card key={i} sx={{ maxWidth: 275, height: 300, display: "inline-flex", margin: " 10px 10px" }}>
              <CardContent >

                <div style={{ textAlign: "start" }}>
                  <img src={items.src} alt='discover_image' />
                </div>
                <Typography variant="body2" component="div"
                  sx={{ textAlign: "start", fontSize: "18px", my: "15px", color: "black" }}
                  gutterBottom>
                  <b>{items.heading}</b>
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "start", fontSize: "15px", my: "15px", fontFamily:"sans-serif", color: "#474646" }}>
                  {items.content}
                </Typography>
              </CardContent>

            </Card>
          )
        })
      }
    </>
  );
}

export default BasicCard