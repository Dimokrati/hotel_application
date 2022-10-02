import React from "react";
import { Box, Button, Heading, Layer, Text } from 'grommet';
import APIService from "./APIService";


export default function PopupConfirmation(props){
    
     const departDate = props.location.state.d_Date.value
     const arriveDate = props.location.state.a_Date
     const available = props.location.state.available
     
     

     const updateReservation = () => {
          APIService.UpdateReservation(props.reservation.id, {available, departDate, arriveDate})
          .then(resp => props.updatedData(resp))
          .then(() => props.switchClose() )
          .catch(error =>  console.log(error))
        

     }



     return(
          <>
          {(props.reservation && props.open) && (
               <Layer
                 id="hello world"
                 position="center"
                 onClickOutside={props.switchClose}
                 onEsc={props.switchClose}
               >
                 <Box pad="medium" gap="small" width="medium">
                   <Heading level={3} margin="none">
                     Confirm
                   </Heading>
                   <Text>Are you sure you want to reserve {props.reservation.type} (id={props.reservation.id})?</Text>
                   <Box
                     as="footer"
                     gap="small"
                     direction="row"
                     align="center"
                     justify="end"
                     pad={{ top: 'medium', bottom: 'small' }}
                   >
                     <Button 
                         label="Confirm"
                         primary
                         color="brand"
                         onClick={updateReservation}     
                    />
                     <Button
                       label={
                         <Text color="white">
                           <strong>Close</strong>
                         </Text>
                       }
                       onClick={props.switchClose}
                       primary
                       color="status-critical"
                     />
                   </Box>
                 </Box>
               </Layer>
             )}
             </>
     )

}