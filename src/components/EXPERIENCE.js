import { Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.css";

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
      <div
        className="container"
        style={{
          boxShadow: "0px 2px 10px 1px rgba(71, 71, 71, 0.51)",
          borderRadius: 12,
          margin: 24,
        }}
      >
        <div className="row">
          <div className="col" style={{ padding: 42 }}>
            <Typography
              variant={!isMobile ? "h4" : "h5"}
              style={{ width: "100%" }}
            >
              <Divider width={22}>{t("EXPERIENCE.EXPERIENCE1")}</Divider>
            </Typography>
          </div>
        </div>

        <div className="row" style={{ padding: 42, paddingBottom: 100 }}>
          <div className="col">
            <Stack>
              <Stack>
                <Typography variant='h6'>
                  {t("EXPERIENCE.EXPERIENCE5")}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant='h6'>
                  {t("EXPERIENCE.EXPERIENCE6")}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant='h6'>
                  {t("EXPERIENCE.EXPERIENCE7")}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant='h6'>
                  {t("EXPERIENCE.EXPERIENCE2")}
                </Typography>
              </Stack>
            </Stack>
          </div>

          <div className="col">
            <Stack>
              <Stack>
                <Typography variant='h5'>
                  {t("EXPERIENCE.EXPERIENCE2")}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant='h6'>
                  {t("EXPERIENCE.EXPERIENCE3")}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant='subtitle2'>
                  {t("EXPERIENCE.EXPERIENCE4")}
                </Typography>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default EXPERIENCE;
