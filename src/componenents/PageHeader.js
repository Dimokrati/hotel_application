import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Heading,
  Anchor,
  Image,
  Layer,
  FormField,
  TextArea,
  TextInput,
  PageHeader,
  Text,
  } from 'grommet';

import {Close ,FormNext ,LinkBottom ,MapLocation ,Schedule ,Deploy ,MailOption} from "grommet-icons";




export default function TopPage(){
     const [open, setOpen] = React.useState(false);  
     const onOpen = () => setOpen(true);
     const onClose = () => setOpen(undefined);
     

     return(
          
          
              <Box className="img_container" height={{min:"610px", max:"610px"}}>
                <Box fill className="find_container" flex="shrink" width="xxlarge" gap="medium" background={{color:"#1e1e1e", opacity:"strong" }} height="450px" align="centre" justify="centre">
                  <Box>
                    <PageHeader
                      title= {<Heading margin="0px" size='6rem'>WELCOME</Heading>}
                      subtitle={<Box  margin={{left:"7px"}}><Text size="30px" className="subtitle" weight="lighter" color="brand">MAKE YOUR SELF HOME</Text></Box>}
                    />
                  </Box>
                  <Box fill="horizontal" justify="centre" pad="10px" className="explore_btn_container" margin={{top:"280px"}} height="small" width="medium">
                      <Text className="explore_text">EXPLORE<Deploy className="explore_icon" size="medium"/></Text>
                  </Box>
                  <Box margin={{top:"10px"}} direction="row" fill justify="between" width="xxlarge" color="white">
                    
                    <Anchor 
                      href="#gallery"
                      className="explore_links"
                      reverse
                      icon={<FormNext/>}
                      label="Gallery"
                      color="light-1"
                    />
                    <Anchor
                      href="#container-3"
                      className="explore_links"
                      reverse
                      icon={<FormNext/>}
                      label="Restaurant"
                      color="light-1"
                    />
                    <Anchor
                      href="#container-1"
                      className="explore_links"
                      reverse
                      icon={<FormNext/>}
                      label="Rooms"
                      color="light-1"
                    />
                    <Anchor
                      href="#container-2"
                      className="explore_links"
                      reverse
                      icon={<FormNext />}
                      label="Suites"
                      color="light-1"
                    />
                    <Anchor
                    href="#about"
                      className="explore_links"
                      reverse
                      gap="xxsmall"
                      icon={<FormNext/>}
                      label="About us"
                      color="light-1"
                    />
                  </Box>
               <Box as="footer" className="arrow_down" >

                    <Anchor 
                        href="#TopOfPage"
                         icon={<LinkBottom size="large" color="light-1"/>}
                    />
               </Box>
                </Box>
              <Link to="/Reserve">
                <Box round="medium" className="reserve_btn" width="small">
                  <Button primary icon={<Schedule size="medium"  className="reserve_icon"/>} label="Reserve now"/>
                </Box>
              </Link>
              <Box round="medium" className="contact_btn" width="small">
                <Button primary icon={<MailOption size="medium"  className="mail_icon"/>} label="Contact us" onClick={onOpen} />
                {open && (
                    <Layer
                      position="right"
                      full="vertical"
                      modal
                      onClickOutside={onClose}
                      onEsc={onClose}
                    >
                      <Box
                        as="form"
                        fill="vertical"
                        overflow="auto"
                        width="medium"
                        pad="medium"
                        onSubmit={onClose}
                      >
                        <Box flex={false} direction="row" justify="between">
                          <Heading level={2} margin="none">
                            Contact us
                          </Heading>
                          <Button icon={<Close />} onClick={onClose} />
                        </Box>
                        <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
                          <FormField label="Full Name">
                            <TextInput size="small" placeholder="What's your full name?" type="text"/>
                          </FormField>
                          <FormField label="Email address">
                            <TextInput size="small" placeholder="you@gmail.com" type="email" />
                          </FormField>
                          <FormField label="Message">
                            <TextArea size="small" resize="false" placeholder="Write your message here" />
                          </FormField>
                        </Box>
                        <Box flex={false} as="footer" align="centre" width="medium">
                          <Button type="submit" label="Submit" onClick={onClose} primary />
                        </Box>
                      </Box>
                    </Layer>
                )}
              </Box>
              <Box round="medium" className="map_btn" width="small">
                <Button primary target="_blank" href="https://www.google.com/maps/place/Higher+School+of+Technology+Essaouira/@31.4494385,-9.7338135,17z/data=!3m1!4b1!4m5!3m4!1s0xdad9aaf09fd97d3:0x46dca5f5d7fd7be8!8m2!3d31.4494339!4d-9.7316248" icon={<MapLocation size="medium"  className="map_icon"/>} label="View map"/>
              </Box>
              
              <Image 
                className="bgr_img"
                src="https://cache.marriott.com/content/dam/marriott-renditions/DXBTP/dxbtp-torno-subito-3532-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=2880px:*"
                fit="cover"
                fill="true"
              />
              </Box>
              
      )
              
          
       
     
}




