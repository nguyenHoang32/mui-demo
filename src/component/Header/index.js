import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Divider,
  Drawer,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const drawerWidth = 160;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));
const useStyles = makeStyles((theme, props) => {
  return {
    appbar: {
      // background: `${theme.palette.secondary.main} !important`,
      // ...(props.open && {
      //   width: `calc(100% - ${drawerWidth}px) !important`,
      //   marginRight: drawerWidth
      // })
    },
    toolbar: {
      width: "90%",
      margin: "0 auto",
      padding: "0 !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& a": {
        color: "#fff",
      },
    },
    drawer: {
      flexShrink: 0,
      [theme.breakpoints.down("md")]: {
        "& .MuiPaper-root": {
          ...theme.mixins.toolbar,
          width: drawerWidth,
        },
      },
    },
  };
});
const headerData = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const MyDrawer = ({ open, setOpen, setToggleDark, toggleDark }) => {
  const theme = useTheme();
  const { drawer } = useStyles();
  return (
    <>
      <MenuIcon sx={{ ml: "auto" }} onClick={() => setOpen(!open)} />
      <Drawer
        className={drawer}
        // variant="persistent"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DrawerHeader>
          <ArrowBackIcon sx={{ mx: "auto" }} onClick={() => setOpen(false)} />
        </DrawerHeader>
        <Divider variant="middle" />
        {headerData.map((i) => (
          <Button
            key={`header-mobile-${i.label}`}
            onClick={() => setOpen(false)}
            variant="text"
            component={Link}
            to={i.to}
            sx={{
              fontSize: 16,
              textTransform: "none",
              color: theme.palette.text.primary,
            }}
          >
            {i.label}
          </Button>
        ))}
        <Switch
          color="warning"
          sx={{ mx: "auto" }}
          onChange={() => setToggleDark(!toggleDark)}
        />
      </Drawer>
    </>
  );
};
const Header = ({ setToggleDark, toggleDark }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(isMobile);
  const classes = useStyles(open);

  return (
    <AppBar className={classes.appbar} position="sticky" >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4">imagine.</Typography>
        {isMobile ? (
          <MyDrawer
            open={open}
            setOpen={setOpen}
            setToggleDark={setToggleDark}
            toggleDark={toggleDark}
          />
        ) : (
          <div>
            {headerData.map((i) => (
              <Button
                key={`header-${i.label}`}
                variant="text"
                component={Link}
                to={i.to}
                sx={{ marginLeft: 3, fontSize: 16, textTransform: "none" }}
              >
                {i.label}
              </Button>
            ))}
            <Switch
              sx={{ ml: 6 }}
              color="warning"
              onChange={() => setToggleDark(!toggleDark)}
            />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
