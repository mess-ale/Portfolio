import { Divider, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowRight } from 'react-icons/md';

const EXPERIENCE = () => {
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
      <Stack m={16} p={!isMobile ? 12 : 6} spacing={!isMobile ? 8 : 4} sx={{ boxShadow: '0px 2px 10px 1px rgba(71, 71, 71, 0.51)', borderRadius: 2, }} >
        <Typography variant={!isMobile ? 'h4' : 'h5'} style={{ width: '100%' }}>
          <Divider width={22}>
            {t("EXPERIENCE.EXPERIENCE1")}
          </Divider>
        </Typography>
        <List>
          <ListItem>
              <ListItemIcon>
                <MdKeyboardArrowRight />
              </ListItemIcon>
              <Typography variant={!isMobile ? 'h6' : 'h7'}>
                {t("EXPERIENCE.EXPERIENCE2")}
              </Typography>
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <MdKeyboardArrowRight />
              </ListItemIcon>
              <Typography variant={!isMobile ? 'h6' : 'h7'}>
                {t("EXPERIENCE.EXPERIENCE3")}
              </Typography>
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <MdKeyboardArrowRight />
              </ListItemIcon>
              <Typography variant={!isMobile ? 'h6' : 'h7'}>
                {t("EXPERIENCE.EXPERIENCE4")}
              </Typography>
          </ListItem>
          <ListItem>
              <ListItemIcon>
                <MdKeyboardArrowRight />
              </ListItemIcon>
              <Typography variant={!isMobile ? 'h6' : 'h7'}>
                {t("EXPERIENCE.EXPERIENCE5")}
              </Typography>
          </ListItem>
        </List>
      </Stack>
    </>
  )
}

export default EXPERIENCE