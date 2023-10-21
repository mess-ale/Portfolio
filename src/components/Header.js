import React, { useEffect, useState } from 'react';
import { Button, Stack, } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { about, contact, home, project, english, amharic } from '../redux/Counter';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';


const Header = () => {
    const { value } = useSelector((state) => state.task)
    const { value1 } = useSelector((state) => state.task)
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("translation");
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [isMobile, setIsMobile] = useState(false);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }
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
        {isMobile && <Stack onClick={handleClick} sx={{ position: 'fixed' , backgroundColor: 'rgba(94, 80, 63, 1)', zIndex: 99999}}>
                    {click ?
                        (<FaTimes size={20} style={{ color: "#000", margin: 5, padding: 5 }} />)
                        :
                        (<FaBars size={20} style={{ color: "#000",margin: 5, padding: 5  }} />)
                    }
                </Stack>}
        {(!isMobile || click) && 
            <Stack p={2} sx={!isMobile ? { justifyContent: 'space-between', backgroundColor: 'rgba(94, 80, 63, 1)', position: 'fixed', width: '98%', zIndex: 9999, fontWeight: 'bold' } : { backgroundColor: 'rgba(94, 80, 63, 1)', width: '100%', height: '100vh', display: 'flex', position: 'fixed', zIndex: 9999 }}>
                <Stack spacing={4} direction={!isMobile ? 'row' : 'column'} sx={isMobile ? { width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' } : { display: 'flex', justifyContent: 'space-between' }}>
                    <Stack sx={!isMobile && { paddingRight: 15, }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Animated-Flag-Ethiopia.gif" alt='ethiopian' width="42" />
                    </Stack>
                    <Stack spacing={4} direction={!isMobile ? 'row' : 'column'} >
                        <Link style={{ color: value === 0 ? '#06d6a0' : 'black', textDecoration: 'none', }} onClick={() => { dispatch(home()); setClick(false)}} to={'/'} >{t("header.home")}</Link>
                        <Link style={{ color: value === 4 ? '#06d6a0' : 'black', textDecoration: 'none', }} onClick={() => { dispatch(project()); setClick(false) }} to={'/project'}>{t("header.project")}</Link>
                        <Link style={{ color: value === 1 ? '#06d6a0' : 'black', textDecoration: 'none', }} onClick={() => { dispatch(about()); setClick(false) }} to={'/about'}>{t("header.about")}</Link>
                        <Link style={{ color: value === 3 ? '#06d6a0' : 'black', textDecoration: 'none', }} onClick={() => { dispatch(contact()); setClick(false) }} to={'/contact'}>{t("header.contact")}</Link>
                    </Stack>
                    <Stack direction={!isMobile ? 'row' : 'column'} >
                        <Button style={{ color: value1 === 0 ? '#06d6a0' : 'black', }} onClick={() => { dispatch(english()); handleChangeLanguage('eng') }}>{t("header.eng")}</Button>
                        <Button style={{ color: value1 === 1 ? '#06d6a0' : 'black', }} onClick={() => { dispatch(amharic()); handleChangeLanguage('amh') }}>{t("header.amh")}</Button>
                    </Stack>
                </Stack>
            </Stack>}
        </>
    )
}

export default Header