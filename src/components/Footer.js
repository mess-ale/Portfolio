import React, { useEffect, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
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
    <>
      <Stack p={!isMobile ? 10: 5} sx={{ backgroundColor: '#20a4f3', height: '60vh' }}>
        <Stack spacing={!isMobile ? 1: 4} direction={!isMobile ? 'row' : 'column'} sx={{ justifyContent: 'space-between', }}>
          <Stack spacing={!isMobile ? 8 : 2 }>
            <Stack direction={'row'} spacing={3}>
              <FaHome size={30} />
              <Typography variant={!isMobile ? 'h6' : 'h7'}>
                {t("footer.footer1")}
              </Typography>
            </Stack>
            <Stack direction={'row'} spacing={3}>
              <FaPhone size={30} />
              <Typography variant={!isMobile ? 'h6' : 'h7'}>
                {t("footer.footer2")}
              </Typography>
            </Stack>
            <Stack direction={'row'} spacing={3}>
              <FaMailBulk size={30} />
              <Typography variant={!isMobile ? 'h6' : 'h7'}>
                {t("footer.footer3")}
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={3}>
            <Typography variant={!isMobile ? 'h4' : 'h5'} sx={{ fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              {t("footer.footer4")}
            </Typography>
            <Stack spacing={1}>
              <Typography variant={!isMobile ? 'h6' : 'h7'}>
                {t("footer.footer5")}
              </Typography>
              <Typography variant={!isMobile ? 'h6' : 'h7'}>
                {t("footer.footer6")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={{ paddingTop: !isMobile ? 12: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
            <Button href='https://www.linkedin.com/in/meseret-alemnew-311174256/' target='_blank' style={{ color: '#051923', }}>
              <FaLinkedin size={33} />
            </Button>
            <Button href='https://github.com/mess-ale' target='_blank' style={{ color: '#051923' }}>
              <FaGithub size={33} />
            </Button>
            <Button target='_blank' style={{ color: '#051923' }}>
              <FaFacebook size={33} />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Footer