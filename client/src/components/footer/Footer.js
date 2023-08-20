import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    margin: "20px 0px 10px 0px",
    padding: 20,
    backgroundColor: "#F2F2F2",
    textAlign: "center",
    color: "#1D1C1C",
  },
  text: {
    fontSize: 16,
  },
  link:{ 
    color: "#000000",
    fontWeight: 'bold', 
    padding: 3, 
    marginRight: 3,
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.text}>
        Created by{" "}
        {/* eslint-disable-next-line */}
        <a
          className={classes.link}
          target="_blank"
          href="https://github.com/Abhay-05"
        >
          Abhay Verma
        </a>
      </Typography>
    </Box>
  );
}

export default Footer;
