import { Box, Button, Typography } from "@mui/material";

export interface ListProductsProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export interface Product {
  id: number;
  name: string;
  color: string;
  width: number;
  height: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Produto A",
    color: "red",
    width: 50,
    height: 100,
  },
  {
    id: 2,
    name: "Produto B",
    color: "blue",
    width: 20,
    height: 50,
  },
  {
    id: 3,
    name: "Produto C",
    color: "green",
    width: 100,
    height: 100,
  },
  {
    id: 4,
    name: "Produto D",
    color: "yellow",
    width: 80,
    height: 120,
  },
];

export const ListProducts = ({
  products,
  onProductClick,
}: ListProductsProps) => {
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
          sx={{
            cursor: "pointer",
            bgcolor: product.color,
            color: "black",
            m: 1,
          }}
          onClick={() => onProductClick(product)}
        >
          {product.name}
        </Button>
      ))}
    </Box>
  );
};