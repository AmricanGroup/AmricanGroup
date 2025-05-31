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
      <section className="   py-5 my-5">
        <div className="title text-center  text-white py-3 ">
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
        </div>
        <div className="tabs    mx-auto">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  centered
                  textColor="secondary"
                  indicatorColor="secondary"
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
                <GalleryPhoto number={2}/>
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
