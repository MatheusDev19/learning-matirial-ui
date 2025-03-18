import { Divider, Stack, Button, Box, Paper } from "@mui/material";
import { ListProducts } from "../list-products";
import { useState } from "react";
import { GondolaControl } from "../gondola-control";

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
    width: 80,
    height: 60,
  },
  {
    id: 2,
    name: "Produto B",
    color: "blue",
    width: 100,
    height: 80,
  },
  {
    id: 3,
    name: "Produto C",
    color: "green",
    width: 120,
    height: 100,
  },
  {
    id: 4,
    name: "Produto D",
    color: "yellow",
    width: 140,
    height: 120,
  },
];

export const Gondola = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // armazenar o produto selecionado
  const [stackProduct, setStackProduct] = useState<Product[]>([]); // armazenar os produtos empilhados
  const [shelves, setShelves] = useState<number[]>([0]); // armazenar as prateleiras
  const [swapProductIndex, setSwapProductIndex] = useState<number | null>(null); // armazenar o índice do produto a ser trocado

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleStackClick = (stackId: number) => {
    if (selectedProduct) {
      const newStackProduct = [...stackProduct];
      newStackProduct[stackId] = selectedProduct;
      setStackProduct(newStackProduct);
      setSelectedProduct(null);
      return;
    }

    if (swapProductIndex === null) {
      setSwapProductIndex(stackId);
    } else {
      const newStackProduct = [...stackProduct];
      const temp = newStackProduct[stackId];
      newStackProduct[stackId] = newStackProduct[swapProductIndex];
      newStackProduct[swapProductIndex] = temp;
      setStackProduct(newStackProduct);
      setSwapProductIndex(null);
    }
  };

  const addShelf = () => {
    setShelves([...shelves, shelves.length]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <ListProducts products={products} onProductClick={handleProductClick} />

      <Button
        sx={{ width: 200, height: 50 }}
        variant="contained"
        onClick={addShelf}
      >
        Add shelves
      </Button>

      <GondolaControl>
        {({ shelfWidth, shelfHeight, gap }) => {
          const totalHeight =
            shelves.length * shelfHeight + (shelves.length - 1) * gap;
          return (
            <Paper
              sx={{
                bgcolor: "#e0e0e0",
                display: "flex",
                flexDirection: "column",
                width: shelfWidth * 4 + gap * 3,
                height: totalHeight,
              }}
            >
              {shelves.map((_, shelfIndex) => (
                // Pratelheira de gondola

                <Box
                  key={shelfIndex}
                  sx={{
                    backgroundColor: "#f0f0f0",
                    flexDirection: "column",
                    mx: 1,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={gap}
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{
                      height: shelfHeight,
                    }}
                  >
                    {[0, 1, 2, 3].map((productIndex) => (
                      <Paper
                        key={productIndex}
                        sx={{
                          width: shelfWidth,
                          height: shelfHeight,
                        }}
                        onClick={() =>
                          handleStackClick(shelfIndex * 4 + productIndex)
                        }
                      >
                        {stackProduct[shelfIndex * 4 + productIndex] && (
                          <Box
                            sx={{
                              width: "100%",
                              height: "100%",
                              backgroundColor:
                                stackProduct[shelfIndex * 4 + productIndex]
                                  .color,
                            }}
                          />
                        )}
                      </Paper>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Paper>
          );
        }}
      </GondolaControl>
    </Box>
  );
};
