import { Divider, Stack } from "@mui/material";
import { ListProducts } from "../list-products";
import { useState } from "react";

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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // armazenar o produto selecionado
  const [stackProduct, setStackProduct] = useState<Product[]>([]); // armazenar os produtos empilhados

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleStackClick = (index: number) => {
    if (selectedProduct) {
      const newStackProduct = [...stackProduct];
      newStackProduct[index] = selectedProduct;
      setStackProduct(newStackProduct);
      setSelectedProduct(null);
    }
  };

  return (
    <>
      <ListProducts products={products} onProductClick={handleProductClick} />

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
            key={product.id}
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ border: "1px solid blue", padding: "10px", mb: 4 }}
          >
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

        {/* Empilhamento de produtos */}
        <Stack direction={"row"} spacing={2}>
          {[0, 1, 2, 3].map((index) => (
            <Stack
              key={index}
              sx={{ border: "1px solid green", padding: "10px", width: 100 }}
              onClick={() => handleStackClick(index)}
            >
              {stackProduct[index]?.name || "Empty"}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};
