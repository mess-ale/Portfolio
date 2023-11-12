import React, { useEffect, useState } from "react";
import { Button, LinearProgress, Stack, Typography } from "@mui/material";
import imgs from "../assets/images/my photo.png";
import imgs2 from "../assets/images/Screenshot (5).png";
import imgs3 from "../assets/images/jan-antonin-kolar-lRoX0shwjUQ-unsplash.jpg";
import imgs4 from "../assets/images/kelly-sikkema-3-Tc_5LROrM-unsplash.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { IoLogoPython, IoLogoNodejs, IoLogoJavascript } from "react-icons/io";
import { MdStorage, MdChat } from "react-icons/md";
import { useTranslation } from "react-i18next";
import EXPERIENCE from "../components/EXPERIENCE";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
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
      <Stack>
        <Header />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <img src={imgs} alt="myphoto" />
            </div>

            <div
              className="col-lg-8"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h2"
                  style={{
                    color: "#2ec4b6",
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  {t("home.about")}
                </Typography>
                <Typography
                  variant={!isMobile ? "h6" : "h7"}
                  style={{ textAlign: "justify" }}
                >
                  {t("home.aboutbody1")}
                </Typography>
                <Typography
                  variant={!isMobile ? "h6" : "h7"}
                  style={{ textAlign: "justify" }}
                >
                  {t("home.aboutbody2")}
                </Typography>
                <Typography
                  variant={!isMobile ? "h6" : "h7"}
                  style={{ textAlign: "justify" }}
                >
                  {t("home.aboutbody3")}
                </Typography>
              </Stack>
            </div>
          </div>
        </div>

        <Stack
          direction={"row"}
          p={!isMobile ? 12 : 6}
          spacing={!isMobile ? 8 : 4}
          sx={{
            boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
            borderRadius: 2,
          }}
        >
          <Stack>
            <Typography
              variant={!isMobile ? "h6" : "h7"}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                rotate: "270deg",
              }}
            >
              {t("home.skillbody1")}
            </Typography>
          </Stack>

          <Stack>
            <Stack direction={"row"} spacing={3}>
              <RiReactjsLine size={!isMobile ? 32 : 20} />
              <Typography variant={!isMobile ? "h5" : "h9"}>React</Typography>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <SiRedux size={!isMobile ? 32 : 20} />
              <Typography variant={!isMobile ? "h5" : "h9"}>Redux</Typography>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <IoLogoPython size={!isMobile ? 32 : 20} />
              <Typography variant={!isMobile ? "h5" : "h9"}>Python</Typography>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <IoLogoNodejs size={!isMobile ? 32 : 20} />
              <Typography variant={!isMobile ? "h5" : "h9"}>Node</Typography>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <IoLogoJavascript size={!isMobile ? 32 : 20} />
              <Typography variant={!isMobile ? "h5" : "h9"}>
                Javascript
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <MdChat size={!isMobile ? 32 : 20} />
              <Typography variant={!isMobile ? "h5" : "h9"}>
                Communication
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <MdStorage size={!isMobile ? 32 : 20} />
              <Typography variant={!isMobile ? "h5" : "h9"}>SQL</Typography>
            </Stack>
          </Stack>

          <Stack sx={{ width: "65%" }}>
            <Stack spacing={2} sx={{ flex: 1, paddingTop: 1.2 }}>
              <LinearProgress
                variant="determinate"
                value={97}
                sx={{ height: "10px" }}
              />
            </Stack>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <LinearProgress
                variant="determinate"
                value={90}
                sx={{ height: "10px" }}
              />
            </Stack>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <LinearProgress
                variant="determinate"
                value={99}
                sx={{ height: "10px" }}
              />
            </Stack>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <LinearProgress
                variant="determinate"
                value={90}
                sx={{ height: "10px" }}
              />
            </Stack>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <LinearProgress
                variant="determinate"
                value={95}
                sx={{ height: "10px" }}
              />
            </Stack>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <LinearProgress
                variant="determinate"
                value={95}
                sx={{ height: "10px" }}
              />
            </Stack>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <LinearProgress
                variant="determinate"
                value={97}
                style={{ height: "10px" }}
              />
            </Stack>
          </Stack>
        </Stack>

        <EXPERIENCE />

        <div className="container" style={{ padding: 20 }}>
          <Typography
            variant={!isMobile ? "h5" : "h6"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {t("home.projectbody2")}
          </Typography>
          <div className="row" style={{ paddingTop: 60, paddingBottom: 150 }}>
            <div
              className="col"
              style={{
                boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                borderRadius: 7,
                padding: 20,
                margin: 21,
                minWidth: "200px",
              }}
            >
              <img
                src={imgs2}
                alt="project photos"
                style={
                  !isMobile
                    ? {
                        boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                        borderRadius: 2,
                        width: "100%",
                        height: "222px",
                      }
                    : {
                        boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                        borderRadius: 2,
                        width: "100%",
                        height: "152px",
                      }
                }
              />
              <Typography
                sx={{
                  paddingTop: 2,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {t("home.projectname1")}
              </Typography>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", paddingTop: 1.2 }}
              >
                <Typography>{t("home.projectlink1")}</Typography>
                <Button
                  style={{ backgroundColor: "#3a86ff", color: "#023047" }}
                  href="https://github.com/mess-ale/chat-app"
                  target="_blank"
                >
                  {t("home.projectview")}
                </Button>
              </Stack>
            </div>
            <div
              className="col"
              style={{
                boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                borderRadius: 7,
                padding: 20,
                margin: 21,
                minWidth: "200px",
              }}
            >
              <img
                src={imgs3}
                alt="project photos"
                style={
                  !isMobile
                    ? {
                        boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                        borderRadius: 2,
                        width: "100%",
                        height: "222px",
                      }
                    : {
                        boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                        borderRadius: 2,
                        width: "100%",
                        height: "152px",
                      }
                }
              />
              <Typography
                sx={{
                  paddingTop: 2,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {t("home.projectname2")}
              </Typography>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", paddingTop: 1.2 }}
              >
                <Typography>{t("home.projectlink1")}</Typography>
                <Button
                  style={{ backgroundColor: "#3a86ff", color: "#023047" }}
                  href="https://github.com/mess-ale/Employee-Managmens-database"
                  target="_blank"
                >
                  {t("home.projectview")}
                </Button>
              </Stack>
            </div>
            <div
              className="col"
              style={{
                boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                borderRadius: 7,
                padding: 20,
                margin: 21,
                minWidth: "200px",
              }}
            >
              <img
                src={imgs4}
                alt="project photos"
                style={
                  !isMobile
                    ? {
                        boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                        borderRadius: 2,
                        width: "100%",
                        height: "222px",
                      }
                    : {
                        boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                        borderRadius: 2,
                        width: "100%",
                        height: "152px",
                      }
                }
              />
              <Typography
                sx={{
                  paddingTop: 2,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {t("home.projectname3")}
              </Typography>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", paddingTop: 1.2 }}
              >
                <Typography>{t("home.projectlink1")}</Typography>
                <Button
                  style={{ backgroundColor: "#3a86ff", color: "#023047" }}
                  href="https://github.com/mess-ale/FirstReact/tree/main"
                  target="_blank"
                >
                  {t("home.projectview")}
                </Button>
              </Stack>
            </div>
          </div>
        </div>
        <Footer />
      </Stack>
    </>
  );
};

export default Home;
