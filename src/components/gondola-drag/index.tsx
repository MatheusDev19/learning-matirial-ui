import { useState } from "react";
import { Box, Grid } from "@mui/material";

const initialProducts = [
  "🍎", "🍌", "🍇", "🥑",
  "🥕", "🌽", "🥦", "🍞",
  "🥩", "🧀", "🥚", "🥛"
];

export const GondolaDrag = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("text/plain");
    const newProducts = [...products];
    
    // Swap positions
    [newProducts[draggedIndex], newProducts[index]] = [
      newProducts[index],
      newProducts[draggedIndex]
    ];
    setProducts(newProducts);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container spacing={2} sx={{ width: 300, margin: "auto", mt: 5 }}>
      {products.map((product, index) => (
        <Grid item xs={3} key={index}>
          <Box
            sx={{
              width: 70,
              height: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
              cursor: "grab",
              fontSize: 30,
              bgcolor: "lightgray"
            }}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
          >
            {product}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
