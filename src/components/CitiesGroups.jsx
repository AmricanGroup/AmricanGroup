import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Typography from "@mui/material/Typography";
import { useState } from "react";
import GalleryPhoto from "./GalleryPhoto";
export default function CitiesGroups() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className=" py-5 my-10">
        <div className="title text-center text-black py-3 px-4">
            <h3 className=" font-Dancing text-7xl text-orange-400  ">Visit Egypt</h3>
          <Typography
            variant="h4"
            gutterBottom
            fontSize={{ xs: "1.5rem", md: "2.125rem" }}
            fontFamily={"var(--font-Rubik)"}
          >
            Discover Egypt's Tourist Wonders
          </Typography>
         
        </div>

        <div className="tabs mx-auto px-4">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box>
                <TabList
                  slotProps={{
                    indicator: {
                      sx: {
                        backgroundColor: "var(--color-PyramidStone)",
                        height: "2px",
                        borderRadius: "2px",
                      },
                    },
                  }}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  centered
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  sx={{
                    "& .MuiTab-root": {
                      fontFamily: "var(--font-Changa)",
                      color: "var(--color-PyramidStone)",
                      textTransform: "capitalize",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      minWidth: 80,
                    },
                    "& .Mui-selected": {
                      color: "var(--color-PharaohGoldx)",
                    },
                  }}
                >
                  <Tab label="All" value="1" />
                  <Tab label="Cairo" value="2" />
                  <Tab label="Giza" value="3" />
                  <Tab label="Luxor" value="4" />
                </TabList>
              </Box>

              <TabPanel className="text-center" value="1">
                <GalleryPhoto number={1} />
              </TabPanel>
              <TabPanel className="text-center" value="2">
                <GalleryPhoto number={2} />
              </TabPanel>
              <TabPanel className="text-center" value="3">
                <GalleryPhoto number={3} />
              </TabPanel>
              <TabPanel className="text-center" value="4">
                <GalleryPhoto number={4} />
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </section>
    </>
  );
}
