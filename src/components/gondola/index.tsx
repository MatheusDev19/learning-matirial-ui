import { Divider, Stack, Button, Box } from "@mui/material";
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
  { id: 1, name: "Produto A", color: "red", width: 80, height: 60 },
  { id: 2, name: "Produto B", color: "blue", width: 100, height: 80 },
  { id: 3, name: "Produto C", color: "green", width: 120, height: 100 },
  { id: 4, name: "Produto D", color: "yellow", width: 140, height: 120 },
];

export const Gondola = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // armazenar o produto selecionado
  const [stackProduct, setStackProduct] = useState<Product[]>([]); // armazenar os produtos empilhados
  const [shelves, setShelves] = useState<number[]>([0]); // armazenar as prateleiras

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleStackClick = (stackId: number) => {
    if (selectedProduct) {
      const newStackProduct = [...stackProduct];
      newStackProduct[stackId] = selectedProduct;
      setStackProduct(newStackProduct);
      setSelectedProduct(null);
    }
  };

  const addShelf = () => {
    setShelves([...shelves, shelves.length]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
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
        {({ shelfWidth, shelfHeight, gap, gondolaHeight }) => (
          <Stack
            sx={{
              border: "1px solid red",
              width: shelfWidth * 4 + gap * 3,
              height: gondolaHeight,
            }}
          >
            {shelves.map((_, shelfIndex) => (
              // Pratelheira de gondola
              <Stack
                key={shelfIndex}
                direction="row"
                spacing={gap}
                divider={<Divider orientation="vertical" flexItem />}
                sx={{
                  border: "1px solid blue",
                  p: 1,
                  height: shelfHeight,
                }}
              >
                {/* Produto na prateleira */}
                {[0, 1, 2, 3].map((productIndex) => (
                  <Stack
                    key={productIndex}
                    sx={{
                      border: "1px solid black",
                      width: shelfWidth,
                      height: shelfHeight,
                    }}
                    onClick={() =>
                      handleStackClick(shelfIndex * 4 + productIndex)
                    }
                  >
                    {stackProduct[shelfIndex * 4 + productIndex] ? (
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundColor:
                            stackProduct[shelfIndex * 4 + productIndex].color,
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        )}
      </GondolaControl>
    </Box>
  );
};
