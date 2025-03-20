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

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleStackClick = (shelfIndex: number, boxIndex: number) => {
    if (!selectedProduct) return;

    setShelfs((prevShelfs) =>
      prevShelfs.map((shelf, i) =>
        i !== shelfIndex
          ? shelf
          : {
              ...shelf,
              boxes: shelf.boxes.map((box, j) =>
                j !== boxIndex
                  ? box
                  : [...box, { bgcolor: selectedProduct.color, width: `${selectedProduct.width}px`, height: `${selectedProduct.height}px` }]
              ),
            }
      )
    );
    setSelectedProduct(null);
  };

  const [shelfs, setShelfs] = useState<
    {
      boxes: { bgcolor: string; width: string; height: string }[][];
      align: "flex-start" | "center" | "flex-end";
    }[]
  >([]);

  useEffect(() => {
    setShelfs([
      {
        boxes: [
          [{ bgcolor: "#000", height: "50px", width: "100px" }],
          [
            { bgcolor: "#00f", height: "20px", width: "50px" },
            { bgcolor: "#00f", height: "20px", width: "50px" },
          ],
          [{ bgcolor: "#00f", height: "20px", width: "50px" }],
          [{ bgcolor: "#f0f", height: "60px", width: "50px" }],
        ],
        align: "flex-start",
      },
      {
        boxes: [
          [{ bgcolor: "#f0f", height: "60px", width: "50px" }],
          [{ bgcolor: "#f0f", height: "60px", width: "50px" }],
          [{ bgcolor: "#0ff", height: "45px", width: "50px" }],
        ],
        align: "center",
      },
      {
        boxes: [
          [
            { bgcolor: "#218131", height: "20px", width: "50px" },
            { bgcolor: "#00f", height: "20px", width: "50px" },
          ],
          [
            { bgcolor: "#218131", height: "20px", width: "50px" },
            { bgcolor: "#00f", height: "20px", width: "50px" },
          ],
          [
            { bgcolor: "#00f", height: "20px", width: "50px" },
            { bgcolor: "#00f", height: "20px", width: "50px" },
          ],
          [{ bgcolor: "#f0f", height: "60px", width: "50px" }],
          [{ bgcolor: "#f0f", height: "60px", width: "50px" }],
        ],
        align: "flex-end",
      },
    ]);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ border: "1px solid blue" }}>
        <Stack spacing={2} sx={{ border: "1px solid red" }}>
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