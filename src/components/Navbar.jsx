import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ToggleButton from "@mui/material/ToggleButton";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Navbar() {
  const pages = ["Products", "Pricing", "Blog"];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      
      sx={{ bgcolor: "transparent", boxShadow: "none", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between items-center">
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
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
              bgcolor: "black",
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{t(page)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Small screen logo */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
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
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {t(page)}
              </Button>
            ))}
          </Box>

          {/* Language toggle */}
          <Box sx={{ flexGrow: 0 }}>
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
