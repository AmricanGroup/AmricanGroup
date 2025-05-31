import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Typography from '@mui/material/Typography';
export default function GalleryPhoto({ number }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      
      <section className="bg-white py-5 my-5">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          {number === 1 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div onClick={handleClickOpen} className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col ">
                <div
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer"
                  to="cities"
                >
                  Explore
                  <img
                    src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Wines
                  </h3>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <a
                  href
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Gin
                  </h3>
                </a>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a
                    href
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Whiskey
                    </h3>
                  </a>
                  <a
                    href
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Vodka
                    </h3>
                  </a>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                <a
                  href
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Brandy
                  </h3>
                </a>
              </div>
            </div>
          ) : number === 2 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <Link
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                  to="cities"
                >
                  Explore
                  <img
                    src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Wines
                  </h3>
                </Link>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <a
                  href
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Gin
                  </h3>
                </a>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a
                    href
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Whiskey
                    </h3>
                  </a>
                  <a
                    href
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Vodka
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            "not Found"
          )}
        </div>
      </section>
  <Dialog
  onClose={handleClose}
  aria-labelledby="customized-dialog-title"
  open={open}
  maxWidth="md"  // تقدر تحدد حجم أوسع للـ Dialog
  fullWidth
>
  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
    Modal title
    <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  
  <DialogContent dividers>
    <div style={{ display: "flex", gap: "16px" }}>
      {/* قسم المعلومات */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </Typography>
      </div>

      {/* قسم الصورة */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop"
          alt="Example"
          style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "8px" }}
        />
      </div>
    </div>
  </DialogContent>
  
  <DialogActions>
    <Button autoFocus onClick={handleClose}>
      Save changes
    </Button>
  </DialogActions>
</Dialog>

    </>
  );
}
