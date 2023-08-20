import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import { navData } from "../constants/data";

const useStyle = makeStyles({
  navbar: {
    minWidth:960,
    display: "flex",
    justifyContent: "space-between",
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '4.5%',
    padding: "10px 10%",
    backgroundColor: "#ffffff",
  },
  nav_item: {
    fontSize: 14,
    color: "#212121",
    fontWeight: 500,
    textAlign: "center",
  },
  nav_img: {
    width: 64,
    objectFit: "contain",
  },
});
function Navbar() {
  const classes = useStyle();
  return (
    <Box className={classes.navbar} boxShadow={2}>
      {navData.map((data, i) => (
        <Link to={``} id={i} key={i}>
          <Box className={classes.nav_item}>
            <img src={data.url} className={classes.nav_img} alt={data.text} />
            <p>{data.text}</p>
          </Box>
        </Link>
      ))}
    </Box>
  );
}

export default Navbar;
