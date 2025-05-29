import React from "react";
import { Box, Grid } from "@mui/material";

export default function GalleriesMUI() {
  return (
    <>
      <section className="w-5/6 mx-auto ">
        <Box className="bg-amber-400 mx-auto " sx={{ px: 2, py: 4 }}>
          <Grid
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            container
            spacing={2}
          >
            {/* Column 1 */}
            <Grid item xs={6} md={4}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Box
                    component="img"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                    alt=""
                    sx={{ width: "100%", borderRadius: 2 }}
                  />
                </Grid>
                <Grid item>
                  <Box
                    component="img"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                    alt=""
                    sx={{ width: "100%", borderRadius: 2 }}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={6} md={4}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Box
                    component="img"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                    alt=""
                    sx={{ width: "100%", borderRadius: 2 }}
                  />
                </Grid>
                <Grid item>
                  <Box
                    component="img"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                    alt=""
                    sx={{ width: "100%", borderRadius: 2 }}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Column 3 (previously column 3, now housing the last two images) */}
            <Grid item xs={6} md={4}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Box
                    component="img"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                    alt=""
                    sx={{ width: "100%", borderRadius: 2 }}
                  />
                </Grid>
                <Grid item>
                  <Box
                    component="img"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                    alt=""
                    sx={{ width: "100%", borderRadius: 2 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </section>
    </>
  );
}