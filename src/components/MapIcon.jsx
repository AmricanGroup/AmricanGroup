import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // You can use any icon you prefer
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { DialogContent } from "@mui/material";
export default function MapIcon() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div onClick={handleClickOpen} className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center justify-center w-16 h-16 bg-amber-400 text-white rounded-full shadow-lg hover:bg-amber-500 transition-all duration-300 cursor-pointer">
          <FaMapMarkerAlt size={24} />
        </div>
      </div>

      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            ></IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Egypt Maps
            </Typography>

            <CloseIcon onClick={handleClose} className="cursor-pointer" />
          </Toolbar>
        </AppBar>
        <DialogContent
          sx={{ padding: 0 }}
          className="!p-0 h-[calc(100vh-64px)]"
        >
        
          <div className="relative w-full h-full">
            <iframe
              src="https://maps.google.com/maps?q=Pyramids+of+Giza&output=embed"
              loading="lazy"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
