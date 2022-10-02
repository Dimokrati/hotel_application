import React from "react";




import {
     FacebookOption,
     Instagram,
     Twitter,
   } from 'grommet-icons';
   
   import { Anchor, Box, Footer, Text } from 'grommet';
   
const Media = () => (
          <Box direction="row" gap="xxsmall" justify="center">
          <Anchor
               a11yTitle="Share feedback on Github"
               href="https://www.instagram.com/"
               icon={<Instagram color="brand" />}
          />
          <Anchor
               a11yTitle="Chat with us on Slack"
               href="https://www.facebook.com/"
               icon={<FacebookOption color="brand" />}
          />
          <Anchor
               a11yTitle="Follow us on Twitter"
               href="https://twitter.com/"
               icon={<Twitter color="brand" />}
          />
     </Box>
   );
   
export default function Foooter(){
     return(
          <Box className="footer" margin={{top:"130px"}}>
               <Footer  background="light-1" pad="small">
               <Box align="center" direction="row" gap="xsmall">
                    
                    <Text alignSelf="center" color="brand" size="16px">
                         HoteLogo
                    </Text>
               </Box>
               <Media />
               <Text textAlign="center" size="xsmall">
                    ©Copyright 2021-2022
               </Text>
               </Footer>
          </Box>
     )
   }
     
     
     
     