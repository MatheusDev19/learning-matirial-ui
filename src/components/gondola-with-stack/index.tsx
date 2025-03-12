import { Divider, Link, Stack } from "@mui/material";
import { AddProducts } from "../add-products";

export interface Product {
  id: number;
  name: string;
  color: string;
  width: number;
  height: number;
}

export const products: Product[] = [
  { id: 1, name: "Produto A", color: "red", width: 80, height: 60 },
  { id: 2, name: "Produto B", color: "blue", width: 100, height: 80 },
  { id: 3, name: "Produto C", color: "green", width: 120, height: 100 },
  { id: 4, name: "Produto D", color: "yellow", width: 140, height: 120 },
];

export const GondolaWithStack = () => {
  return (
    <>
      <AddProducts />

      {/* Modulo de gondola */}
      <Stack
        sx={{
          border: "1px solid red",
          padding: "10px",
          width: 600,
          height: 600,
        }}
      >
        {products.map((product: Product) => (
          // Pratelheira de gondola
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ border: "1px solid blue", padding: "10px", mb: 4 }}
          >
            <Link href="mantine.dev" />
            <Stack
              sx={{ border: "1px solid red", padding: "10px", width: 100 }}
            >
              {product.name}
            </Stack>

            <Stack
              sx={{ border: "1px solid red", padding: "10px", width: 100 }}
            >
              {product.name}
            </Stack>

            <Stack
              sx={{ border: "1px solid red", padding: "10px", width: 100 }}
            >
              {product.name}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
};
