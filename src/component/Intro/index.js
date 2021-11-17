import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    root: {
      paddingTop: 80,
      width: "90% !important",
      margin: "0 auto",
      marginBottom: 60,
      
      [theme.breakpoints.down("md")]: {
          flexDirection: 'column-reverse',
          paddingTop: 60,
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: 20,
        
    },
    },
  };
});
const Intro = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item md={6}>
        <Typography sx={{ fontWeight: "bold" }} variant="h2" gutterBottom>
          Make Your Business More Profitable
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </Typography>
        <Button
          sx={{ mt: 6, ml: 3, borderRadius: 30, padding: "12px 20px" }}
          variant="contained"
        >
          Get Started
        </Button>
      </Grid>
      <Grid item md={6}>
        <img width="100%" alt="" src={require("../../assets/bg.svg").default} />
      </Grid>
    </Grid>
  );
};
export default Intro;
