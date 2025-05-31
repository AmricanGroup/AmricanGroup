import { Box, Grid, Divider, Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";
import img from "./../assets/images/8.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const cards = [
  {
    title: "Mountain Sunset",
    description: "Beautiful sunset over mountains.",
    img,
  },
  {
    title: "Ocean View",
    description: "Relaxing ocean view during sunrise.",
    img,
  },
  {
    title: "Forest Path",
    description: "Peaceful forest path surrounded by trees.",
    img,
  },
  {
    title: "City Lights",
    description: "City lights at night from above.",
    img,
  },
  {
    title: "City Lights",
    description: "City lights at night from above.",
    img,
  },
  {
    title: "City Lights",
    description: "City lights at night from above.",
    img,
  },
  {
    title: "City Lights",
    description: "City lights at night from above.",
    img,
  },
];

export default function PackageCard() {
  return (
    <>
      <div className="title text-center py-5 my-5  relative">
         <h3 className=" font-Dancing text-7xl text-orange-400  ">plan Trip</h3>
        <Typography className="  py-2" variant="h3"  gutterBottom>
          Exclusive Packages welcome
        </Typography>
       
      </div>

      <Box component="section" className="  p-10 w-5/6 mx-auto">
        <Grid container className="   flex justify-center"   spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white relative group  ">
                <img className="w-full" src={card.img} alt={card.title} />
                <div
                  className="info absolute bottom-0 left-0 right-0 
                           rounded-t-2xl px-6 py-4 
                           translate-y-full group-hover:translate-y-0 
                           transition-transform duration-300 ease-in-out text-white"
                >
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-base">{card.description}</p>
                  <div className="rounded-b-2xl w-full my-4">
                    <Divider className="bg-amber-200 my-5" variant="middle" />
                    <div className="link text-end p-2">
                      <Link to="package">
                        Explore <ArrowForwardIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
