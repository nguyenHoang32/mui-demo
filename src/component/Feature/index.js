import { Grid, Typography, Button, Card, Paper } from "@mui/material";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    "& .MuiPaper-root": {
    //   background: "#f1f1f1",
      padding: 20,
      marginBottom: 40,
    //   "&:hover": {
    //     background: `${theme.palette.primary.main} !important`,
    //     color: "#fff",
    //     icon: {
    //       background: "#fff",
    //     },
    //     "& .MuiButton-root": {
    //         color: "#fff !important",
    //       },
    //     "& .MuiSvgIcon-root": {
    //         backgroundColor: "#fff !important"
    //     }
    //   },
    //   "&:hover + .MuiSvgIcon-root" :{
    //     backgroundColor: "#fff !important"
    //   } 
    },
  },
  icon: {
    position: "absolute",
    fontSize: "70px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    padding: 16,
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    top: -40,
    color: "#fff",
    background: theme.palette.primary.light,
    borderRadius: "50%",
    
  },
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" align="center" gutterBottom>
        Imagine Features
      </Typography>
      <Typography variant="body1" align="center" marginBottom={8}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
        quaerat sapiente nam, id vero.
      </Typography>
      <Grid container gap={3} justifyContent="center" alignItems="center">
        <Grid item md={3} className={classes.card}>
          <CachedSharpIcon className={classes.icon} />
          <Card>
            <Typography align="center" sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Marketing Consulting
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 200 }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </Typography>
              <Button variant="text" color="info">Learn More</Button>
            </Typography>
          </Card>
        </Grid>
        <Grid item md={3} className={classes.card}>
          <CachedSharpIcon className={classes.icon} />
          <Card>
            <Typography align="center" sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Marketing Consulting
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 200 }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </Typography>
              <Button variant="text" color="info">Learn More</Button>
            </Typography>
          </Card>
        </Grid><Grid item md={3} className={classes.card}>
          <CachedSharpIcon className={classes.icon} />
          <Card>
            <Typography align="center" sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Marketing Consulting
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 200 }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </Typography>
              <Button variant="text" color="info">Learn More</Button>
            </Typography>
          </Card>
        </Grid><Grid item md={3} className={classes.card}>
          <CachedSharpIcon className={classes.icon} />
          <Card>
            <Typography align="center" sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Marketing Consulting
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 200 }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </Typography>
              <Button variant="text" color="info">Learn More</Button>
            </Typography>
          </Card>
        </Grid><Grid item md={3} className={classes.card}>
          <CachedSharpIcon className={classes.icon} />
          <Card>
            <Typography align="center" sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Marketing Consulting
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 200 }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </Typography>
              <Button variant="text" color="info">Learn More</Button>
            </Typography>
          </Card>
        </Grid><Grid item md={3} className={classes.card}>
          <CachedSharpIcon className={classes.icon} />
          <Card>
            <Typography align="center" sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Marketing Consulting
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 200 }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </Typography>
              <Button variant="text" color="info">Learn More</Button>
            </Typography>
          </Card>
        </Grid>      </Grid>
    </>
  );
};
export default Feature;
