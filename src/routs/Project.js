import { Stack, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import imgs2 from "../assets/images/Screenshot (5).png";
import imgs3 from "../assets/images/jan-antonin-kolar-lRoX0shwjUQ-unsplash.jpg";
import imgs4 from "../assets/images/kelly-sikkema-3-Tc_5LROrM-unsplash.jpg";
import imgs5 from "../assets/images/Set-Associative-Mapping-Implementation.png";
import imgs6 from "../assets/images/Untitled.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Project = () => {
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

      <Stack
        p={!isMobile ? 3 : 2}
        spacing={2}
        sx={{
          paddingTop: !isMobile ? 20 : 10,
          paddingBottom: !isMobile ? 24 : 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant={!isMobile ? "h2" : "h3"}
          style={{ fontWeight: "bold", color: "#90e0ef" }}
        >
          {t("project.project1")}
        </Typography>
        <Typography variant={!isMobile ? "h5" : "h6"}>
          {t("project.project2")}
        </Typography>
      </Stack>
      <Stack p={!isMobile ? 9 : 5} spacing={!isMobile ? 12 : 6}>
        <Stack
          direction={!isMobile ? "row" : "column"}
          spacing={!isMobile ? 6 : 3}
          sx={{
            boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
            borderRadius: 2,
          }}
        >
          <Stack
            sx={{
              boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
              borderRadius: 2,
              padding: 3,
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
                      width: "322px",
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
              {t("project.projectname1")}
            </Typography>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", paddingTop: 1.2 }}
            >
              <Typography>{t("project.projectlink1")}</Typography>
              <Button
                style={{ backgroundColor: "#3a86ff", color: "#023047" }}
                href="https://github.com/mess-ale/chat-app"
                target="_blank"
              >
                {t("home.projectview")}
              </Button>
            </Stack>
          </Stack>

          <Stack p={!isMobile ? 4 : 2} spacing={!isMobile ? 3 : 2}>
            <Typography
              variant={!isMobile ? "h4" : "h5"}
              sx={{
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {t("project.projectdescri1")}
            </Typography>
            <Stack spacing={1}>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribody1")}
              </Typography>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribodys1")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={!isMobile ? "row" : "column"}
          spacing={!isMobile ? 6 : 3}
          sx={{
            boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
            borderRadius: 2,
          }}
        >
          <Stack
            sx={{
              boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
              borderRadius: 2,
              padding: 3,
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
                      width: "322px",
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
              {t("project.projectname2")}
            </Typography>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", paddingTop: 1.2 }}
            >
              <Typography>{t("project.projectlink1")}</Typography>
              <Button
                style={{ backgroundColor: "#3a86ff", color: "#023047" }}
                href="https://github.com/mess-ale/Employee-Managmens-database"
                target="_blank"
              >
                {t("home.projectview")}
              </Button>
            </Stack>
          </Stack>

          <Stack p={!isMobile ? 4 : 2} spacing={!isMobile ? 3 : 2}>
            <Typography
              variant={!isMobile ? "h4" : "h5"}
              sx={{
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {t("project.projectdescri1")}
            </Typography>
            <Stack spacing={1}>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribody2")}
              </Typography>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribody2")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={!isMobile ? "row" : "column"}
          spacing={!isMobile ? 6 : 3}
          sx={{
            boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
            borderRadius: 2,
          }}
        >
          <Stack
            sx={{
              boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
              borderRadius: 2,
              padding: 3,
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
                      width: "322px",
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
              {t("project.projectname3")}
            </Typography>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", paddingTop: 1.2 }}
            >
              <Typography>{t("project.projectlink1")}</Typography>
              <Button
                style={{ backgroundColor: "#3a86ff", color: "#023047" }}
                href="https://github.com/mess-ale/FirstReact/tree/main"
                target="_blank"
              >
                {t("home.projectview")}
              </Button>
            </Stack>
          </Stack>

          <Stack p={!isMobile ? 4 : 2} spacing={!isMobile ? 3 : 2}>
            <Typography
              variant={!isMobile ? "h4" : "h5"}
              sx={{
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {t("project.projectdescri1")}
            </Typography>
            <Stack spacing={1}>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribody3")}
              </Typography>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribodys3")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={!isMobile ? "row" : "column"}
          spacing={!isMobile ? 6 : 3}
          sx={{
            boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
            borderRadius: 2,
          }}
        >
          <Stack
            sx={{
              boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
              borderRadius: 2,
              padding: 3,
            }}
          >
            <img
              src={imgs5}
              alt="project photos"
              style={
                !isMobile
                  ? {
                      boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                      borderRadius: 2,
                      width: "322px",
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
              {t("project.projectname4")}
            </Typography>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", paddingTop: 1.2 }}
            >
              <Typography>{t("project.projectlink1")}</Typography>
              <Button
                style={{ backgroundColor: "#3a86ff", color: "#023047" }}
                href="https://github.com/mess-ale/Mapping_technique"
                target="_blank"
              >
                {t("home.projectview")}
              </Button>
            </Stack>
          </Stack>

          <Stack p={!isMobile ? 4 : 2} spacing={!isMobile ? 3 : 2}>
            <Typography
              variant={!isMobile ? "h4" : "h5"}
              sx={{
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {t("project.projectdescri1")}
            </Typography>
            <Stack spacing={1}>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribody4")}
              </Typography>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribodys4")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={!isMobile ? "row" : "column"}
          spacing={!isMobile ? 6 : 3}
          sx={{
            boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
            borderRadius: 2,
          }}
        >
          <Stack
            sx={{
              boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
              borderRadius: 2,
              padding: 3,
            }}
          >
            <img
              src={imgs6}
              alt="project photos"
              style={
                !isMobile
                  ? {
                      boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
                      borderRadius: 2,
                      width: "322px",
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
              {t("project.projectname5")}
            </Typography>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", paddingTop: 1.2 }}
            >
              <Typography>{t("project.projectname6")}</Typography>
              <Button
                style={{ backgroundColor: "#3a86ff", color: "#023047" }}
                href="https://sites.google.com/view/t27/project-page?authuser=0"
                target="_blank"
              >
                {t("home.projectview")}
              </Button>
            </Stack>
          </Stack>

          <Stack p={!isMobile ? 4 : 2} spacing={!isMobile ? 3 : 2}>
            <Typography
              variant={!isMobile ? "h4" : "h5"}
              sx={{
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {t("project.projectdescri1")}
            </Typography>
            <Stack spacing={1}>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribody5")}
              </Typography>
              <Typography style={{ textAlign: "justify" }}>
                {t("project.projectdescribodys5")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Project;
