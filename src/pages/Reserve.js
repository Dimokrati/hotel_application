import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../componenents/nav";
import "../style.css"
import Foooter from "../componenents/Foooter"
import { 
     Grommet,
     Box,
     Heading,
     Text,
     Grid,
     Button,
     Select,
     Form,
     DateInput,
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




export default function Reserve(){

     /* connecting to the api */ 

     
     /* Form data collecting */
     const [numbre_p, setNumbrePer] = React.useState(1);
     const [arriveDate, setArriveDate] = React.useState((new Date()).toISOString());
     const [departDate, setDepartDate] = React.useState(new Date(new Date().setDate(new Date().getDate() + 1)).toISOString());
     const navigate = useNavigate();

     const onarrivedate = (nextArriveDate) => { 
          setArriveDate(nextArriveDate)
          };
     const ondepartdate = (nextDepartDate) => {
          setDepartDate(nextDepartDate)
          };

    
    
     

     const handlesubmit = (id) => {
          navigate("/Available", {
               state: {
                    available : false,
                    n_person: numbre_p,
                    d_Date: departDate,
                    a_Date: arriveDate,
               }
          });
     };
        

     return(
          <Grommet className="grommet_container" theme={theme}>
               <Box>
                    <Navigation/>
                    <Box className="gallery" width="6000px">
                         <Heading className="gallery_text">RESERVE NOW</Heading>
                    </Box>
                    <Form 
                         className="gallery_grid"
                         
                    >
                         <Grid
                              gap="25px"
                              rows={['75px','75px','175px','45px']}
                              columns={['400px']}
                              areas={[
                                   {name:"input-0", start:[0, 0], end:[0, 0]},
                                   {name:"input-1", start:[0, 1], end:[0, 1]},
                                   {name:"input-2", start:[0, 2], end:[0, 2]},
                                   {name:"submit", start:[0, 3], end:[0, 3]}
                              ]}
                         >
                              <Box gridArea="input-0">
                                   <Text color="brand" className="formfiled" size="medium" weight="light" margin={{left:"13px", bottom:"6px"}}>ARRIVE DATE</Text>
                                   <DateInput
                                        format="dd/mm/yyyy"
                                        required
                                        defaultValue={(new Date()).toISOString()}
                                        onChange={onarrivedate}
                                        
                                   />
                              
                              </Box>
                              <Box gridArea="input-1">
                                   <Text color="brand" className="formfiled" size="medium" weight="light" margin={{left:"13px", bottom:"6px"}}>DEPART DATE</Text>
                                   <DateInput
                                        format="dd/mm/yyyy"
                                        required
                                        onChange={ondepartdate}
                                        defaultValue={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()}
                                   />
                              </Box>
                              <Box gridArea="input-2">
                                   <Text color="brand" className="formfiled" size="medium" weight="light" margin={{left:"13px", bottom:"6px"}}>NUMBRE OF PERSONS</Text>
                                   <Select
                                        required
                                        options={[1, 2, 3, 4]}
                                        value={numbre_p}
                                        onChange={({option}) => {setNumbrePer(option)}}

                                   />
                              </Box>
                              <Box gridArea="submit" direction="row" >
                                   <Button fill type="submit" primary label="Submit" onClick={handlesubmit}/>
                              </Box>
                         </Grid>
                    </Form>
                    
                    <Foooter/>
               </Box>
          </Grommet>
     )
}