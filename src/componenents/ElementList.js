import React from 'react';
import "../gallery_page_style.css";
import {
     Spinner,
     Grid,
     Box,
     Image,
     Text,
     Anchor,
     Button,
     Card,
     CardBody,
     } from 'grommet';
import  { Expand, Wifi, User, BlockQuote, Bookmark, CircleQuestion } from 'grommet-icons';


export default function ElementList(props){
    
     const editReservation = (element) => {
          props.editReservation(element)
          props.switchOpen()
     }

     return (
          <>
          {props.loading ? (
               <Box width="1250px" height="605px" justify='center' align='center'>
                    <Spinner size='large' />
               </Box> 
               ) : (
                    
               <Grid
                    margin="70px"
                    gap="medium"
                    className='gallery_grid'
               >
                    <Text size='60px' weight="bold" margin={{bottom:"20px"}} className="title">AVAILABLE SERVICES :</Text>
                    {props.data.map((element)=>{
                    if ((props.location.state.n_person === element.n_personne) && (props.location.state.available === true) ) {
                         return(
                              <Card key={element.id} width="xlarge" height="260px">
                                   <CardBody >
                                        <Grid
                                             gap="25px"
                                             columns={['300px','500px','300px']}
                                             rows={['300px']}
                                             areas={[
                                                  {name: "image", start:[0, 0], end:[0, 0]},
                                                  {name: "description", start:[1, 0], end:[1, 0]},
                                                  {name: "button", start:[2, 0], end:[2, 0]},
                                             ]}
                                        >
                                             <Image src='https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-suite-4511-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*'
                                             width="300px" 
                                             height="260px"
                                             gridArea='image'
                                             />
                                             <Box gridArea='description'>
                                                  <Text 
                                                       color="brand" 
                                                       size='40px' 
                                                       margin={{top:'10px'}} 
                                                       weight="bold" 
                                                       className='title'>
                                                            {
                                                                 element.type === "room" ? (
                                                                      `Wonderful ${element.type}`.toUpperCase()
                                                                      ) : (
                                                                      `fantastic ${element.type}`.toUpperCase()
                                                            )}
                                                  </Text>
                                                  <Text size='17px' margin={{top:"4px"}} weight="bold">
                                                       <User color='brand' size='17px' />
                                                       <Text margin={{left:"10px"}}>Max {element.n_personne} person (s)</Text>
                                                  </Text>
                                                  <Text size='17px' margin={{top:"4px"}} weight="bold" >
                                                       <Expand size='17px' color='brand'/>
                                                       <Text margin={{left:"10px"}}>{element.type === "room" ? "25 m²" : "37 m²"}</Text>
                                                  </Text>
                                                  <Text size='18px' margin={{top:"4px"}} weight="bolder">
                                                       <BlockQuote color='brand' size='17px'/>
                                                       <Text margin={{left:"10px"}}>{ element.type === "room" ? "Guest room, 1 King, Sofa bed, Ocean view, Balcony" : "Royal Suite, 1 Bedroom Suite, 1 King, Sea view, Balcony" }</Text>
                                                  </Text>
                                                  <Text size='17px' margin={{top:"4px"}} weight="bold">
                                                       <Wifi color='brand' size='17px'/>
                                                       <Text margin={{left:"10px"}}>Wi-fi, TV</Text>
                                                  </Text>
                                                  
                                                  
                                                  <Text size='17px' margin={{top:"4px", bottom:"25px"}} weight="lighter" color="brand">
                                                       <Anchor
                                                            label="Hotel information"
                                                            icon={<CircleQuestion size='17px'/>}
                                                       />
                                                  </Text>
                                                  <Text size='17px' margin={{top:"4px"}} weight="bold" color="dark-3">
                                                       NB: You can't cancel later, so make your decision now!
                                                  </Text>
                                             </Box>
                                             <Box
                                                  gridArea='button'
                                             >
     
                                                  <Box justify='end' align='end' margin={{right:"18px", top:"10px"}}>
                                                       <Text size='50px' weight="bolder">
                                                       ${element.price}
                                                       </Text>
                                                       <Text size='15px' weight="light" color="dark-3">
                                                            includes taxes and fees
                                                       </Text>
                                                  </Box>
                                                  <Box round justify='end' align='end' height="160px" margin={{ right:"12px"}}>
                                                       <Button 
                                                            primary
                                                            label="BOOK NOW"
                                                            icon={<Bookmark />}
                                                            onClick={()=> editReservation(element)}
                                                       />
                                                  </Box>
                                             </Box>
                                        </Grid>
                                   </CardBody>
                              </Card>
                              )

                    } else {
                         return null
                    }
                    }
                    )}
               </Grid>
               )
          }
          </>

     )
}