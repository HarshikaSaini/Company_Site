import React from 'react';
import Marquee from "react-fast-marquee";
export const Marqueee = ({assets}) => {
  return <Marquee speed={200} pauseOnHover  > {assets.map((item,idx)=>{
   return <img src={item.src} alt={item.alt}  key={idx} height={item.heigth} width={item.width}/>
  })}</Marquee>;
  
};
