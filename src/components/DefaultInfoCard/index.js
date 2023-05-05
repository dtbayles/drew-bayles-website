import React from 'react';

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import {Box, Typography} from "@mui/material";

function DefaultInfoCard({ color, icon, title, description, direction, small, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Box
        lineHeight={1}
        p={direction === "center" ? 2 : 0}
        textAlign={direction}
      >
        <Typography
          display="block"
          variant="h2"
          color={color}
          textGradient
        >
          {icon}
        </Typography>
        <Typography
          display="block"
          variant="body1"
          color={color}
          pr={direction === "left" ? 6 : 0}
          pl={direction === "right" ? 6 : 0}
        >
          {description}
        </Typography>
      </Box>
    </a>
  );
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "white.main",
  direction: "left",
  small: false,
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
};

export default DefaultInfoCard;
