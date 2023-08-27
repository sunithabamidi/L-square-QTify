import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../BasicTabs/BasicTabs";

const Section = ({
  title,
  data,
  type,
  value,
  // filteredData = null,
  filteredDataValues = [],
  // toggle = false,
  // handleToggle = null,
  handleChange = null,
}) => {
  const [toggle, setCarouselToggle] = useState(false);

  const handleToggle = () => {
    setCarouselToggle(!toggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!toggle ? "Show all" : "Collapse"}
        </h4>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((ele) => {
                return <CardComponent data={ele} type={type} key={ele.id} />;
              })}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              renderCardComponent={(data) => (
                <CardComponent data={data} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
