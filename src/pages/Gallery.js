import React from "react";
import Navigation from "../componenents/nav";
import Foooter from "../componenents/Foooter";
import "../gallery_page_style.css";
import { 
     Grommet,
     Grid,
     Box,
     Heading,
     Image,

     } from 'grommet';


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


export default function Gallery(){
     return(
          <Grommet className="grommet_container" theme={theme}>
               <Navigation/>
               <Box className="gallery" width="6000px">
                    <Heading className="gallery_text">GALLERY</Heading>
               </Box>
               <Box className="gallery_grid">
                    <Grid
                         gap="small"
                         rows={['200px','200px','200px','200px','200px','200px','200px','200px','200px','200px','200px','200px','200px']}
                         columns={['350px','350px','350px']}
                         areas={[
                              {name:"image-0", start:[0, 0], end:[0, 0]},
                              {name:"image-1", start:[1, 0], end:[1, 0]},
                              {name:"image-2", start:[2, 0], end:[2, 0]},
                              {name:"image-3", start:[0, 1], end:[1, 2]},
                              {name:"image-4", start:[2, 1], end:[2, 1]},
                              {name:"image-5", start:[2, 2], end:[2, 2]},
                              {name:"image-6", start:[0, 3], end:[0, 3]},
                              {name:"image-7", start:[1, 3], end:[1, 3]},
                              {name:"image-8", start:[2, 3], end:[2, 3]},
                              {name:"image-9", start:[0, 4], end:[0, 4]},
                              {name:"image-10", start:[0, 5], end:[0, 5]},
                              {name:"image-11", start:[1, 4], end:[2, 5]},
                              {name:"image-12", start:[0, 6], end:[0, 6]},
                              {name:"image-13", start:[1, 6], end:[1, 6]},
                              {name:"image-14", start:[2, 6], end:[2, 6]},
                              {name:"image-15", start:[2, 7], end:[2, 7]},
                              {name:"image-16", start:[2, 8], end:[2, 8]},
                              {name:"image-17", start:[0, 7], end:[1, 8]},
                              {name:"image-18", start:[2, 9], end:[2, 9]},
                              {name:"image-19", start:[1, 9], end:[1, 9]},
                              {name:"image-20", start:[0, 9], end:[0, 9]},
                              {name:"image-21", start:[1, 10], end:[2, 11]},
                              {name:"image-22", start:[0, 10], end:[0, 10]},
                              {name:"image-23", start:[0, 11], end:[0, 11]},
                              {name:"image-24", start:[0, 12], end:[0, 12]},
                              {name:"image-25", start:[1, 12], end:[1, 12]},
                              {name:"image-26", start:[2, 12], end:[2, 12]},
                         ]}
                    >
                         <Box background="brand" className="pop-on-hover" gridArea="image-0">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-suite-skylineview-1532-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-1">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-marvelous-suite-8730-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-2">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-suite-partial-oceanview-1527-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-3">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-king-suite-9003-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-4">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-marvelous-suite-1520-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-5">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-marvelous-suite-1116-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-6">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-wow-suite-9006-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-7">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-suite-4514-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-8">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-corner-suite-4495-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-9">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-corner-suite-4497-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-10">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-fabulous-suite-4502-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-11">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-suite-4511-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-12">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-marvelous-suite-bathroom-1522-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-13">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-suite-bathroom-1530-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-14">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-suite-bathroom-1529-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" gridArea="image-15">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-sobe-9813-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-16">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-bathroom-4510-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-17">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-sobe-9815-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-18">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-north-wing-corridor-8949-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-19">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-atrium-8942-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-20">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-marvelous-suite-view-8729-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-21">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-dolorez-sofa-8950-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-22">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-r-spa-8947-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-23">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-r-spa-8946-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-24">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-r-spa-8944-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-25">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-spa-4503-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box background="brand" className="pop-on-hover" gridArea="image-26">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-away-spa-6735-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                    </Grid>
               </Box>
               <Foooter/>       
          </Grommet>
     )
}


