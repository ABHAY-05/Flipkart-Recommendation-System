import React from "react";

import { Box, makeStyles } from "@material-ui/core";

import Navbar from "../components/Navbar";
import HomeBanner from "../components/header/HomeBanner";
import PosterRow from "../components/PosterRow";
import FeaturedBrandsRow from "../components/FeaturedBrandsRow";
import ProductRow from "../components/product/ProductRow";
import Footer from "../components/footer/Footer";

import { featuredBrandLinks, posterLinks } from "../constants/data";
import { RecommendationsRow } from '../components/recommendations/recommendations'

import "../styles/HomePage.css";
import "react-toastify/dist/ReactToastify.min.css";

const useStyles = makeStyles({
  homePage: {
  marginTop: 60,
  },
});

function HomePage() {
  const classes = useStyles();

  return (
    <Box className={classes.homePage}>
      <Navbar />
      <HomeBanner />
      <div className="first_productRow">
        <RecommendationsRow
          title="Items You May Like"
          categoryName="recommended"
          subTitle="Recommended Items for you"
        />
        <div style={{ padding: 1, backgroundColor: "#ffffff", cursor:"pointer" }}>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/8270b79992f45f9d.jpg?q=20"
          alt="Ads"
          className="ads_banner"
        />
        </div>
      </div>
      <PosterRow
        imgUrls={posterLinks.links2}
      />
      <div className="first_productRow">
        <ProductRow
          isFirstRow={true}
          categoryName="top offers"
          title="Top Offers"
          subTitle="Deals Refresh Every 24 Hours"
        />
        <div style={{ padding: 1, backgroundColor: "#ffffff", cursor:"pointer" }}>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/0b1acd4aba0c5c82.jpg?q=20"
            alt="Ads"
            className="ads_banner"
          />
        </div>
      </div>
      <PosterRow
        imgUrls={posterLinks.links3}
      />
      <ProductRow title="Mobiles" categoryName="mobile" />
      <PosterRow
        imgUrls={posterLinks.links4}
      />
      <FeaturedBrandsRow
        brandsUrls={featuredBrandLinks.links1}
      />
      <ProductRow title="Electronics" categoryName="electronic" />
      <PosterRow
        imgUrls={posterLinks.links5}
      />
      <ProductRow title="Appliances" categoryName="appliances" />
      <PosterRow
        imgUrls={posterLinks.links6}
      />
      <FeaturedBrandsRow
        brandsUrls={featuredBrandLinks.links2}
      />
      <ProductRow title="Furniture" categoryName="furniture" />
      <Footer/>
    </Box>
  );
}

export default HomePage;
