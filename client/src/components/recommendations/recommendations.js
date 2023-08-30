import React, { useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getViewlistItems } from "../../actions/viewlistActions"
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/ProductRow.css";
import { getProductsByCategory } from '../../actions/productActions';

const useStyles = makeStyles({
  row_wrapper: {
    width: "99%",
    minWidth:960,
    margin: "5px 3px",
    padding: 5,
    backgroundColor: "#ffffff",
  },
  row_container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "10px 1%",
  },
  row_title: {
    fontSize: 30,
    fontWeight: 500,
  },
  row_header_subtitle: {
    fontSize: 14,
    opacity: 0.7,
    fontWeight: 400,
  },
  products_wrapper: {
    flex: "85%",
    width: "85%",
    margin: "5px 10px",
    padding: 5,
    backgroundColor: "#ffffff",
  },
  leftContainer: {
    textAlign: "center",
  },
  product_title: {
    fontSize: 14,
    fontWeight: 600,
    marginTop: 10,
    color: "#212F3D",
  },
  product_discount: {
    fontSize: 14,
    color: "#388e3c",
    paddingTop: 5,
  },
  product_tagline: {
    fontSize: 14,
    opacity: 0.7,
    paddingTop: 5,
    color: "#212F3D",
  },
});

const userRecommendedCategories = (viewlistItems) => {
  const data = {};
  viewlistItems.forEach(row => {
    const userFreq = row.freq;
    const category = row.productDetails[0].subCategory;

    data[category] = (data[category] || 0) + userFreq;
  });

  const categories = Object.entries(data)
  .sort((a, b) => b[1] - a[1])
  .reduce((acc, [key, value]) => {
    acc.push(key);
    return acc;
  }, [])

  return categories.slice(0, 5);
};

const RecommendationsRow = ({categoryName, title}) => {
  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector((state) => state.userReducer);
  const viewlistCategories = useRef([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  const getProducts = () => {
    getProductsByCategory(categoryName)
    .then((data) => {
      let products = []
      let flag = false;
      viewlistCategories.current.forEach(category => {
        let temp = [];
        data.forEach(row => {
          if(category === row.subCategory){
            temp.push(row);
          }
        })
        temp = temp.sort((a, b) => (b.freq * b.rating) - (a.freq * a.rating));
        if(!flag){
          products = [...(temp.slice(0, 7))];
          flag = true;
        }else{
          products = [...products, ...(temp.slice(0, 3))];
        }
      })
      if (products.length <= 5) {
        let temp2 = data.sort((a, b) => (b.freq * b.rating) - (a.freq * a.rating)).slice(0, 13);
        temp2.forEach(row => {
          if (!products.some(item => item._id === row._id)) {
            products.push(row);
          }
        });
      }
      setLoadedProducts(() => products);
      setIsLoading(() => false);
    })
  }

  const recommendations = () => {
    if(isAuthenticate) {
      dispatch(getViewlistItems())
      .then((res) => {
        viewlistCategories.current = userRecommendedCategories(res);
      })
      .then(() => getProducts())
      .catch((error) => {
        console.error(error);
        setIsLoading(() => false);
      })
    } else{
        getProductsByCategory(categoryName)
        .then(data => {
          setLoadedProducts(() => data.sort((a, b) => (b.freq * b.rating) - (a.freq * a.rating))
          .slice(0, 15));
          setIsLoading(() => false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(() => false);
        });
      }
  };
  
  useEffect(() => {
    recommendations();
  }, [categoryName]);

  const classes = useStyles();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      className={classes.row_wrapper}
    >
      <Box className={classes.row_container}>
        <Box className={classes.leftContainer}>
          <h2 className={classes.row_title}>{title}</h2>
          <Button
            style={{ backgroundColor: "#000000", marginTop: 20 }}
            variant="contained"
            color="primary"
          >
            View All
          </Button>
        </Box>
        <Box className={classes.products_wrapper} textAlign="center">
          {isLoading ? (
            <CircularProgress style={{ color: "#000000" }} />
          ) : (
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2500}
              keyBoardControl={true}
              customTransition="all 200ms"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              slideToIndex={0}
            >
              {loadedProducts?.map((product, index) => (
                <Box key={index}>
                  <Link to={`product/${product._id}`}>
                    <img
                      className="product_img"
                      src={product.url}
                      alt="banner"
                    />
                    <Typography className={classes.product_title}>
                      {product.title.shortTitle}
                    </Typography>
                    <Typography className={classes.product_discount}>
                      {product.discount}
                    </Typography>
                    <Typography className={classes.product_tagline}>
                      {product.tagline}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Carousel>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export { 
  RecommendationsRow
};