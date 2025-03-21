import { Box, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { Shelf } from "../shelf";
import { useEffect, useState } from "react";
import { products } from "../gondola";
import { ListProducts } from "../list-products";

export interface Product {
  id: number;
  name: string;
  color: string;
  width: number;
  height: number;
}

export function GondolaTest() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [shelfs, setShelfs] = useState<
    {
      boxes: { bgcolor: string; width: string; height: string }[][];
      align: "flex-start" | "center" | "flex-end";
    }[]
  >([]);

  useEffect(() => {
    setShelfs([
      {
        boxes: [[]],
        align: "flex-start",
      },
      {
        boxes: [[]],
        align: "center",
      },
      {
        boxes: [[]],
        align: "flex-end",
      },
    ]);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleStackClick = (shelfIndex: number, boxIndex: number) => {
    if (selectedProduct) {
      setShelfs((prevShelfs) => {
        const newShelfs = [...prevShelfs];
        newShelfs[shelfIndex] = {
          ...newShelfs[shelfIndex],
          boxes: newShelfs[shelfIndex].boxes.map((box, j) =>
            j !== boxIndex
              ? box
              : [
                  ...box,
                  {
                    bgcolor: selectedProduct.color,
                    width: `${selectedProduct.width}px`,
                    height: `${selectedProduct.height}px`,
                  },
                ]
          ),
        };
        return newShelfs;
      });
      setSelectedProduct(null);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ border: "1px solid blue" }}>
        <Stack spacing={0} sx={{ border: "1px solid red" }}>
          {shelfs.map((shelf, index) => (
            <Shelf
              key={index}
              stack={shelf.boxes}
              height="100px"
              spacing={0.2}
              align={shelf.align}
              onStackClick={(boxIndex) => handleStackClick(index, boxIndex)}
            />
          ))}
        </Stack>
      </Box>
      <Box>
        <ListProducts products={products} onProductClick={handleProductClick} />
      </Box>
    </Container>
  );
}
