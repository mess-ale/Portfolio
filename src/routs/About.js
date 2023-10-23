import React, { useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation("translation");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 850); // Adjust the breakpoint as per your needs
      };

      window.addEventListener("resize", handleResize);
      handleResize(); // Initial check on component mount

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  return (
    <Stack>
      <Header />
      <Stack sx={{ paddingBottom: !isMobile ? 18 : 9,}}>
        <Stack p={!isMobile ? 3 : 2} spacing={2} sx={{ paddingTop: !isMobile ? 20 : 10, paddingBottom: !isMobile ? 24 : 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant={!isMobile ? 'h2' : 'h3'} style={{ fontWeight: 'bold', color: '#90e0ef' }}>
            {t("about.abouthead")}
          </Typography>
          <Typography variant={!isMobile ? 'h6' : 'h7'}>
            {t("about.aboutbody1")}
          </Typography>
        </Stack>

        <Stack p={!isMobile ? 10 : 6} spacing={3} m={4} sx={{ boxShadow: '0px 2px 10px 1px rgba(187, 222, 251, 0.81)', borderRadius: 2, }}>
          <Typography variant={!isMobile ? 'h6' : 'h7'} style={{ fontWeight: 'bold', color: '#90e0ef' }}>
            {t("about.aboutsummary1")}
          </Typography>
          <Typography variant={!isMobile ? 'h6' : 'h7'} style={{ textAlign: 'justify'}}>
          {t("about.aboutsummary2")}
          </Typography>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  )
}

export default About