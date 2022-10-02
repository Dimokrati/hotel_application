import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

import {Anchor, Main, Box, Grid, Heading, Image, Carousel, Text, Button} from "grommet"

export default function BodyPage(){
     return (
          <Main>
               <Grid
                    className="grid_main_page" 
                    margin={{top:"50px"}}
                    justify="centre"
                    rows={['500px','20px','450px', '450px', '450px','680px','680px' ]}
                    columns={['1366px']}
                    gap={{row:"50px"}}
                    areas={[
                    { name: 'TopOfPage', start: [0, 0], end: [0, 0]},
                    { name: 'underline', start: [0, 1], end: [0, 1]},
                    { name: 'container-1', start: [0, 2], end: [0, 2] },
                    { name: 'container-2', start: [0, 3], end: [0, 3] },
                    { name: 'container-3', start: [0, 4], end: [0, 4] },
                    { name: 'gallery', start: [0, 5], end: [0, 5] },
                    { name: 'moreinfo', start: [0, 6], end: [0, 6] },
                    
                    ]}
               >    
                    <Box gridArea="TopOfPage" id="TopOfPage" className="content content_animation">
                              <h1 className="h1">
                                   <span>find your</span>
                                   <div class="message">
                                        <div class="word1">place</div>
                                        <div class="word2">calm</div>
                                        <div class="word3">home</div>
                                   </div>
                              </h1>
                              <Box  as="div" width="large">  
                                   <Text className="text-topage" weight="lighter">
                                        We are delighted that you have selected our hotel.
                                        On behalf of the entire team at the Hotel Name, I extend you a very warm welcome and trust your stay with us will be both enjoyable and comfortable.
                                        The hotel offers a selection of business services and facilities which are detailed in the website.
                                        Should you require any assistance or have any specific requirements, please do not hesitate to contact us.
                                   </Text>
                                   <Box className="seemore" >
                                        <Anchor 
                                             weight="lighter"
                                             className="5"
                                             label="show more"
                                        />
                                   </Box>
                              </Box>
                    </Box>
                    
                    <Grid
                         className="grid_centre"
                         id="container-1"
                         gridArea="container-1" 
                         background="brand" 
                         rows={['390px']}
                         gap={{column:"30px"}}
                         columns={['580px', '390px']}
                         areas={[
                              {name: 'image-1', start:[0, 0], end:[0, 0]},
                              {name: 'description-1', start:[1, 0], end:[1, 0]}
                         ]}
                    >
                         <Box gridArea="image-1" background="brand">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-double-guestroom-8716-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"/>
                         </Box>
                         <Box gridArea="description-1" className="description-1 description-1-animation ">
                              <Heading className="heading-1" responsive size="small" margin={{bottom:"15px" , top:"0px"}} >WONDERFUL ROOMS</Heading>
                              <Text size="15px" weight="lighter" >Escape to a hotel room with hypnotizing colors, appliances, every element in our hotel's rooms takes us one step closer to defeating moderation. Feel drawn to glass-tile walls with urban-inspired graffiti. Stand under a rainfall shower or soak in the freestanding tub of a spotless and spacious bathroom. All this extra legroom extends to a separate lounge area, catwalk dining table and event terrace, it's easier than ever to play host.</Text>
                              <Box margin={{top:"20px"}} width="115px">
                                   <Button primary size="small" label="Learn more"/>
                              </Box>
                         </Box> 
                    </Grid>
                   
                    <Grid
                         className="grid_centre"
                         id="container-2"
                         gridArea="container-2" 
                         background="brand" 
                         rows={['390px']}
                         gap={{column:"30px"}}
                         columns={['390px', '580px']}
                         areas={[
                              {name: 'image-2', start:[1, 0], end:[1, 0]},
                              {name: 'description-2', start:[0, 0], end:[0, 0]}
                         ]}
                    >
                         <Box gridArea="image-2" background="brand">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-fabulous-suite-4498-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1720px:*"/>
                         </Box>
                         <Box gridArea="description-2" className="description-2 description-2-animation" >
                              <Heading className="heading-1" responsive size="small" margin={{bottom:"15px" , top:"0px"}} >FANTASTIC SUITES</Heading>
                              <Text size="15px" weight="lighter" >Max out on pure relaxation when you stay in and laze amid plush furnishing in the 167sqm Fabulous Suite.Filled with playful diversions for scene-stealing entertaining; turn on the vinyl player and strut atop the catwalk dining table. An expansive terrace is cozily furnished for delighting in views of the Arabian Gulf or Palm..</Text>
                              <Box margin={{top:"20px"}} width="115px">
                                   <Button primary size="small" label="Learn more"/>
                              </Box>
                         </Box> 
                    </Grid>
                    <Grid
                         className="grid_centre"
                         id="container-3"
                         gridArea="container-3" 
                         background="brand" 
                         rows={['390px']}
                         gap={{column:"30px"}}
                         columns={['580px', '390px']}
                         areas={[
                              {name: 'image-3', start:[0, 0], end:[0, 0]},
                              {name: 'description-3', start:[1, 0], end:[1, 0]}
                         ]}
                    >
                         <Box gridArea="image-3" background="brand">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-torno-subito-9826-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"/>
                         </Box>
                         <Box gridArea="description-3" className="description-3 description-3-animation ">
                         <Heading className="heading-1" responsive size="small" margin={{bottom:"15px" , top:"0px"}} >RESTAURANTS</Heading>
                              <Text size="15px" weight="lighter" >We offer a wide array of fresh food - chimichangas, hamburger, barbacoa plate, pizza, salads, bbq with rice and beans and more. We use the freshest ingredients in preparing our food to provide the best quality and taste. Try our delicious food today! </Text>
                              <Box margin={{top:"20px"}} width="115px">
                                   <Button primary size="small" label="Learn more"/>
                              </Box>
                         </Box> 
                    </Grid>
               <Box id="gallery" gridArea="gallery">
                    <Box
                         margin={{top:"45px",bottom:"60px"}}
                         direction="row"
                         gap="medium"
                         className="sideshow_container"
                         align="center"
                         justify="center"
                         fill="horizontal"     
                    >
                         <Box align="center" gap="small" justify="center">
                              <Box width="small" margin={{ bottom:"10px"}} height="xsmall" border={{side:"bottom", size:"2px" , color:"brand"}}>
                                   <Heading className="heading-1"  responsive size="medium" >GALLERY</Heading>
                              </Box>
                              <Carousel wrap play={5000} margin={{bottom:"30px"}} controls="selectors" height="500px" width="xxlarge">
                                   <Box fill  background="light-1">
                                        <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-wow-suite-9006-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" />
                                   </Box>
                                   <Box fill  background="black">
                                        <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-fit-2541-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" />
                                   </Box>
                                   <Box fill background="light-3">
                                        <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-dolorez-sofa-8950-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" />
                                   </Box>
                                   <Box fill  background="brand">
                                        <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-guestroom-8724-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" />
                                   </Box>
                                   <Box fill>
                                        <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-suite-bathroom-1529-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*" />
                                   </Box>
                              </Carousel>
                         </Box>
                    </Box>     
                    <Box className="seemore" width="xxlarge" >
                         <Link to="/Gallery">
                              <Box width="300px">
                                   <Button  primary size="medium" label="See more"/>
                              </Box>
                         </Link>
                    </Box>
               </Box>

              
               <Box id="about" gridArea="moreinfo">
                    <Box  margin={{top:"100px"}} width="xxlarge" className="about_centre" >
                         <Heading className="about_text" size="medium" responsive >ABOUT US</Heading>
                    </Box>
               <Grid
               
                    margin={{top:"40px"}}
                    className="grid_centre"
                    
                    background="brand"
                    gap="small"
                    rows={['3000px']}
                    columns={['333px','333px','333px']}
                    areas={[
                         {name:"column-1", start:[0, 0], end:[0, 0]},
                         {name:"column-2", start:[1, 0], end:[1, 0]},
                         {name:"column-3", start:[2, 0], end:[2, 0]},
                    ]}
               
               >
                    
                    <Grid
                         gridArea="column-1"
                         background="dark-3"
                         gap="small"
                         rows={['350px', '150px']}
                         columns={['333px']}
                         areas={[
                              {name:"image_about-1", start:[0, 0], end:[0, 0]},
                              {name:"description-1", start:[0, 1], end:[0, 1]},
                         ]}
                         
                    >
                         <Box background="brand" gridArea="image_about-1">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-wheels-9000-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                         <Box className="about_description_2 about_decription_2_animation">
                              <Text weight="lighter" size="15px">
                                   <Text color="brand" size="30px" weight="lighter">O</Text>n entering this charming <Text size="15px" color="brand" weight="lighter">hotel</Text>, you will immediately sense its special intimate atmosphere that makes you feel like being in your own home. Each detail has been passionately chosen and each room deserves a visit. Our <Text size="15px" color="brand" weight="lighter">hotel</Text> mixes valuable antiques and original artworks with an unexpected eclectic contemporary twist.
                              </Text>
                         </Box>
                    </Grid>
                    <Grid
                         gridArea="column-2"
                         background="dark-3"
                         gap="small"
                         rows={['200px', '300px']}
                         columns={['333px']}
                         areas={[
                              {name:"image_about-2", start:[0, 1], end:[0, 1]},
                              {name:"description-2", start:[0, 0], end:[0, 0]},
                         ]}
                         
                    >
                         <Box background="brand" gridArea="image_about-2">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-exterior-7684-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"/>
                         </Box>
                         <Box background="black">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-wet-deck-8999-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                    </Grid>
                    <Grid
                         gridArea="column-3"
                         background="dark-3"
                         gap="20px"
                         rows={['340px','150px']}
                         columns={['333px']}
                         areas={[
                              
                              {name:"description-3", start:[0, 0], end:[0, 0]},
                              {name:"image_about_3", start:[0, 1], end:[0, 1]},
                              
                         ]}
                         
                    >
                         <Box className="about_description_3 about_decription_3_animation" gridArea="description-3" >
                              <Text className="about_text_3"  weight="lighter" size="15px">
                                   <Text color="brand" size="30px" weight="lighter">O</Text>ur <Text size="15px" color="brand" weight="lighter">Hotel</Text> is a modern, elegant <Text size="15px" color="brand" weight="lighter">5-star</Text> hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of dubai.
                                   The rooms at our Hotel are new, well-lit and inviting. Our reception staff will be happy to help you during your stay in dubai, suggesting itineraries, guided visits and some good <Text size="15px" color="brand" weight="lighter">restaurants</Text> in the historic centre.
                                   While you enjoy a cocktail by the <Text size="15px" color="brand" weight="lighter">swimming pool</Text> on the rooftop terrace, you will be stunned by the breathtaking view of the bay Here, during your summer stays, our bar serves traditional Sicilian dishes, snacks and salads.
                                   At the end of a stairway across from the hotel, the white pebbles on <Text size="15px" color="brand" weight="lighter">the beach</Text> await you as well as beach facilities with lounge chairs and umbrellas and areas with free access to the pristine clear sea that becomes deep just a few metres from the shore.</Text>
                         </Box>
                         <Box gridArea="image_about_3">
                              <Image fit="cover" src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-wet-deck-pool-7749-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"/>
                         </Box>
                    </Grid>
               </Grid>
               </Box>
               </Grid>
               
               
          </Main>
          )
}

document.addEventListener("DOMContentLoaded", () => {  
    
     const BoxDescription_1 = document.querySelector('.description-1');
     const BoxDescription_2 = document.querySelector('.description-2');
     const BoxDescription_3 = document.querySelector('.description-3');
     const BoxDescription_0 = document.querySelector('.content');
     const BoxDescription_about_2 = document.querySelector('.about_description_2');
     const BoxDescription_about_3 = document.querySelector('.about_description_3');

     BoxDescription_1.classList.remove('description-1-animation');
     BoxDescription_2.classList.remove('description-2-animation');
     BoxDescription_3.classList.remove('description-3-animation');
     BoxDescription_0.classList.remove('content_animation');
     BoxDescription_about_2.classList.remove('about_description_2_animation');
     BoxDescription_about_3.classList.remove('about_description_3_animation');
     
     const observer_1 = new IntersectionObserver(entries => {
       entries.forEach(entry => {
       if (entry.isIntersecting) {
          BoxDescription_1.classList.add('description-1-animation');
           return;
       }
     
       BoxDescription_1.classList.remove('description-1-animation');
       });
          });

     const observer_2 = new IntersectionObserver(entries => {
          entries.forEach(entry => {
          if (entry.isIntersecting) {
             BoxDescription_2.classList.add('description-2-animation');
              return;
          }
        
          BoxDescription_2.classList.remove('description-2-animation');
          });
          });

     const observer_3 = new IntersectionObserver(entries => {
               entries.forEach(entry => {
               if (entry.isIntersecting) {
                  BoxDescription_3.classList.add('description-3-animation');
                   return;
               }
             
               BoxDescription_3.classList.remove('description-3-animation');
               });
          });
          
     const observer_0 = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                    if (entry.isIntersecting) {
                       BoxDescription_0.classList.add('content_animation');
                        return;
                    }
                  
                    BoxDescription_0.classList.remove('content_animation');
                    });
          });  

          const observer_about_2 = new IntersectionObserver(entries => {
               entries.forEach(entry => {
               if (entry.isIntersecting) {
                   BoxDescription_about_2.classList.add('about_description_2_animation');
                   return;
               }
             
               BoxDescription_about_2.classList.remove('about_description_2_animation');
               });
     });  
          
     const observer_about_3 = new IntersectionObserver(entries => {
          entries.forEach(entry => {
          if (entry.isIntersecting) {
              BoxDescription_about_3.classList.add('about_description_3_animation');
              return;
          }
        
          BoxDescription_about_3.classList.remove('about_description_3_animation');
          });
});  

       observer_1.observe(document.querySelector('.description-1'));
       observer_2.observe(document.querySelector('.description-2'));
       observer_3.observe(document.querySelector('.description-3'));
       observer_0.observe(document.querySelector('.content'));
       observer_about_2.observe(document.querySelector('.about_description_2'));
       observer_about_3.observe(document.querySelector('.about_description_3'));
       
   });   