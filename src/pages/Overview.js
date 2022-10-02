import React from "react";
import "../style.css"
import Navigation from "../componenents/nav";
import TopPage from "../componenents/PageHeader";
import BodyPage from "../componenents/BodyPage";
import Foooter from "../componenents/Foooter";
import { Grommet } from 'grommet';


const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};




export default function Overview() {
  return (
    <Grommet className="grommet_container" theme={theme}> 
        <Navigation />
        <TopPage/>
        <BodyPage/>
        <Foooter/>
    </Grommet>
  );
}