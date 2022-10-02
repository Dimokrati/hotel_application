import React from 'react';
import Navigation from '../componenents/nav';

import PopupConfirmation from '../componenents/PopupConfirmation';
import "../gallery_page_style.css";

import ElementList from '../componenents/ElementList';
import {
     Grommet,
     } from 'grommet';

import { useLocation } from 'react-router-dom';


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





export default function Available(){
     /* connecting to the api */ 
     const [data , setData] = React.useState([])
     const [open , setOpen] = React.useState(false)
     const [editedReservation, setEditedReservation] = React.useState([])
     const [loading, setLoading] = React.useState([])

     React.useEffect(()=>{
          setLoading(true)
          fetch("http://127.0.0.1:5000/api", {
               'methods' : 'GET',
               headers : {
                    'Content-Type' : 'application/json'
               }
          })
          .then(resp => resp.json())
          .then(resp => setData(resp))
          .catch(error => console.log(error))
          setLoading(false)
     },[])

     const location = useLocation();
     
     

     const editReservation = (element) => {
          setEditedReservation(element)
     }

     const switchOpen = () =>  {
          setOpen(true)
     }
     
     const switchClose = () => {
          setOpen(false)
     }


     const updatedData = (reservation) => {
          const new_reservation = data.map(my_reservation => {
               if(my_reservation.id === reservation.id){
                    return reservation
               } else {
                    return my_reservation
               }
          })
          setData(new_reservation)
     }


     return(
          <Grommet theme={theme}>
               <Navigation/>
               <ElementList data={data} loading={loading} location={location} editReservation={editReservation} switchOpen={switchOpen}/>
               {editedReservation ? <PopupConfirmation reservation = {editedReservation} updatedData = {updatedData} open = {open} location={location} switchClose={switchClose}/> : null}
               
          </Grommet>
     )
}