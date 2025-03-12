import { Box, Button, Typography } from "@mui/material";
import { products } from "../gondola-with-stack";

export const AddProducts = () => {
  return (
    <Box
      sx={{
        width: 500,
        height: 100,
        border: "1px solid black",
        bgcolor: "wheat",
        m: 5,
      }}
    >
      <Typography
        variant="h5"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={2}
      >
        Produtos disponíveis
      </Typography>

      {products.map((product) => (
        <Button
          key={product.id}
          sx={{cursor: 'pointer', bgcolor: product.color, color: "black", m: 1 }}
        >
          {product.name}
        </Button>
      ))}
    </Box>
  );
};