import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import "./App.css"; // Keep for falling star animation styles

const Home = () => {
  useEffect(() => {
    const starContainer = document.querySelector(".falling-stars");
    const totalStars = 100;

    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <Box
      className="full-screen"
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0b0c10",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box className="falling-stars" sx={{ position: "absolute", inset: 0, zIndex: 0 }} />

      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          zIndex: 1,
          mt: { xs: 4, md: 6 },
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        All About Geology
      </Typography>

      <Box
        sx={{
          zIndex: 1,
          maxWidth: "600px",
          mt: 4,
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#ccc", fontSize: { xs: "1rem", md: "1.2rem" }, mb: 3 }}
        >
          Dive into the fascinating world of Geology! Learn about Earth's structure, rocks,
          and how they shape the environment we live in.
        </Typography>

        <Button
          component={Link}
          to="/explore"
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#115293" },
            fontWeight: "bold",
            px: 3,
            py: 1,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Let's Explore More
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
