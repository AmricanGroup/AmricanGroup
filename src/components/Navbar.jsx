import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import ToggleButton from "@mui/material/ToggleButton";

import { useTranslation } from "react-i18next";
import "../i18n";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const pages = [
    { name: "Home", path: "" },
    {
      name: "Cities",
      submenu: [
        { name: "Cairo", path: "/cities/cairo" },
        { name: "Alexandria", path: "/cities/alexandria" },
        { name: "Luxor", path: "/cities/luxor" },
      ],
    },
    { name: "Blog", path: "blog" },
    { name: "ContactUs", path: "contactUs" },
    { name: "AboutUs", path: "aboutUs" },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElSubMenu(null);
  };

  const handleOpenSubMenu = (event) => {
    setAnchorElSubMenu(event.currentTarget);
  };

  const handleCloseSubMenu = () => {
    setAnchorElSubMenu(null);
  };

  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        color: "black",
      }}
    >
      <Container maxWidth="xl" className="border-b-2 border-PyramidStone">
        <Toolbar disableGutters className="flex justify-between items-center">
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* Menu Icon (Mobile) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
             
              margin: "0 20px",
              borderRadius: 1,
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" }, minWidth: 200 }}
            >
              {pages.map((page) =>
                page.submenu ? (
                  <dev key={page.name}>
                    <MenuItem onClick={handleOpenSubMenu} aria-haspopup="true">
                      <Typography textAlign="center"  >
                        {t(page.name)}
                      </Typography>
                    </MenuItem>
                    <Menu
                      id="submenu-mobile"
                      anchorEl={anchorElSubMenu}

                      onClose={handleCloseSubMenu}
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                      sx={{ minWidth: 180 }}
                    >
                      {page.submenu.map((sub) => (
                        <MenuItem
                          key={sub.name}
                          component={Link}
                          to={sub.path}
                          onClick={() => {
                            handleCloseSubMenu();
                            handleCloseNavMenu();
                          }}
                        >
                          {t(sub.name)}
                        </MenuItem>
                      ))}
                    </Menu>
                  </dev>
                ) : (
                  <MenuItem
                    key={page.name}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{t(page.name)}</Typography>
                  </MenuItem>
                )
              )}
                 <MenuItem>
                <ToggleButton
                  value="check"
                  selected={i18n.language === "ar"}
                  onChange={() => {
                    changeLanguage(i18n.language === "ar" ? "en" : "ar");
                    handleCloseNavMenu();
                  }}
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "20px",
                    px: 2,
                    py: 0.5,
                    fontWeight: "bold",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  {i18n.language === "ar" ? "AR" : "EN"}
                </ToggleButton>
              </MenuItem>
            </Menu>
          </Box>

          {/* Small screen logo */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* Menu items on larger screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            
            }}
          >
            {pages.map((page) =>
              page.submenu ? (
                <Box key={page.name}>
                  <Button
                    onClick={handleOpenSubMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    aria-controls={anchorElSubMenu ? "submenu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={anchorElSubMenu ? "true" : undefined}
                  >
                    {t(page.name)}
                  </Button>
                  <Menu
                    id="submenu"
                    anchorEl={anchorElSubMenu}
                    open={Boolean(anchorElSubMenu)}
                    onClose={handleCloseSubMenu}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    sx={{ minWidth: 180 }}
                  >
                    {page.submenu.map((sub) => (
                      <MenuItem
                        key={sub.name}
                        component={Link}
                        to={sub.path}
                        onClick={handleCloseSubMenu}
                         
                      >
                        {t(sub.name)}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {t(page.name)}
                </Button>
              )
            )}
          </Box>

          {/* Language toggle */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <ToggleButton
              value="check"
              selected={i18n.language === "ar"}
              onChange={() =>
                changeLanguage(i18n.language === "ar" ? "en" : "ar")
              }
              sx={{
                border: "1px solid #ccc",
                borderRadius: "20px",
                px: 2,
                py: 0.5,
                fontWeight: "bold",
              }}
            >
              {i18n.language === "ar" ? "AR" : "EN"}
            </ToggleButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
