import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Contact = () => {
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
      <Stack>
        <Stack
          p={!isMobile ? 3 : 2}
          spacing={2}
          sx={{
            paddingTop: !isMobile ? 20 : 10,
            paddingBottom: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant={!isMobile ? "h2" : "h3"}
            style={{ fontWeight: "bold", color: "#90e0ef" }}
          >
            {t("contact.contacthead")}
          </Typography>
          <Typography variant={!isMobile ? "h4" : "h5"}>
            {t("contact.contactbody")}
          </Typography>
        </Stack>

        <Stack
          p={10}
          spacing={3}
          m={4}
          sx={{
            boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
            borderRadius: 2,
          }}
        >
          <Typography
            variant={!isMobile ? "h6" : "h7"}
            style={{ textAlign: "justify" }}
          >
            {t("contact.contactbodydet")}
          </Typography>
        </Stack>
        <Stack
          m={4}
          p={3}
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography style={{ width: !isMobile ? "38%" : "70%" }}>
            {t("contact.connectname")}
          </Typography>
          <Input
            type="text"
            placeholder={t("contact.connectplaceholder1")}
            style={{
              boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
              width: !isMobile ? "38%" : "70%",
              padding: 2,
            }}
          />
          <Typography style={{ width: !isMobile ? "38%" : "70%" }}>
            {t("contact.connectemail")}
          </Typography>
          <Input
            type="email"
            placeholder={t("contact.connectplaceholder2")}
            style={{
              boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
              width: !isMobile ? "38%" : "70%",
              padding: 2,
            }}
          />
          <Typography style={{ width: !isMobile ? "38%" : "70%" }}>
            {t("contact.connectmessage")}
          </Typography>
          <TextareaAutosize
            minRows={13}
            placeholder={t("contact.connectplaceholder3")}
            style={{
              boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
              width: !isMobile ? "38%" : "70%",
              padding: 2,
            }}
          />
          <Button
            style={{
              boxShadow: "0px 2px 10px 1px rgba(187, 222, 251, 0.81)",
              backgroundColor: "#3a86ff",
              color: "#023047",
            }}
            href=""
            target="_blank"
          >
            {t("contact.connectsubmit")}
          </Button>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Contact;
