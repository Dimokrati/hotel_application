import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

import {
Box,
Anchor,
Header,
Text,
Layer,
Heading,
Button,
FormField,
TextArea,
} from 'grommet';
    
import {Star} from "grommet-icons";

export default function Navigation(){
      const [open, setOpen] = React.useState();
    
      const onOpen = () => setOpen(true);
      const onClose = () => setOpen(undefined);


      
      
         
      
      return(
            <Header elevation="medium" background="light-1" pad="medium" height="xxsmall" sticky="scrollup">
                        <Link 
                              to = "/" 
                              href="#"
                              className="links"
                        > 
                              HOTELOGO
                        </Link>
                        <Box justify="end" direction="row" gap="medium">
                              <Link to = "/" href="#"  className="links" > 
                                    Overview
                              </Link>
                              <Link to = "/Gallery" href="#"   className="links"> 
                                    Gallery
                              </Link>

                              <Link to = "/Reserve" href="#"  className="links" > 
                                    Reserve
                              </Link>


                              <Anchor
                                    color="dark-3" 
                                    size="small" 
                                    href="#" 
                                    onClick={onOpen}
                                    reverse
                                    gap="xxsmall"
                                    label="Feedback"
                                    icon={<Star size="20px" color="gold"/>}
                              />
                              {open && (
                                    <Layer
                                    id="hello world"
                                    position="center"
                                    onClickOutside={onClose}
                                    onEsc={onClose}
                                    >
                                    <Box pad="medium" gap="small" width="medium">
                                          <Heading level={3} margin="none">
                                                Feedback
                                          </Heading>
                                          
                                          <FormField label="How was your experience?">
                                                <TextArea size="small" placeholder="Your feedback help us emprove" type="text"/>
                                          </FormField>
                                          <Box
                                                as="footer"
                                                gap="small"
                                                direction="row"
                                                align="center"
                                                justify="end"
                                                pad={{ top: 'medium', bottom: 'small' }}
                                          >
                                          <Button onClick={onClose} label="Close" color="dark-3" />
                                          <Button
                                                label={
                                                      <Text color="white">
                                                            <strong>Send</strong>
                                                      </Text>
                                                }
                                                onClick={onClose}
                                                primary
                                                color="brand"
                                          />
                                          </Box>
                                    </Box>
                                    </Layer>
                                    )}
                        </Box>
            </Header>
      )
}