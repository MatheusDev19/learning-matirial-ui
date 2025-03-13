import { Divider, Stack, Button } from "@mui/material";
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

export const GondolaWithStack = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // armazenar o produto selecionado
  const [stackProduct, setStackProduct] = useState<Product[]>([]); // armazenar os produtos empilhados
  const [shelves, setShelves] = useState<number[]>([0]); // armazenar as prateleiras
  const [shelfWidth, setShelfWidth] = useState<number>(100);
  const [shelfHeight, setShelfHeight] = useState<number>(15);
  const [gap, setGap] = useState<number>(2);

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
    <>
      <ListProducts products={products} onProductClick={handleProductClick} />

      <Button onClick={addShelf}>Adicionar Prateleira</Button>

      <GondolaControl
        shelfWidth={shelfWidth}
        setShelfWidth={setShelfWidth}
        shelfHeight={shelfHeight}
        setShelfHeight={setShelfHeight}
        gap={gap}
        setGap={setGap}
      />

      <Stack
        sx={{
          border: "1px solid red",
          padding: "10px",
          width: shelfWidth * 4 + gap * 3,
          height: 600,
        }}
      >
        {shelves.map((_, shelfIndex) => (
          // Pratelheira de gondola
          <Stack
            key={shelfIndex}
            direction="row"
            spacing={gap}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ border: "1px solid blue", padding: "10px", mb: 4 }}
          >
            {/* Produto na prateleira */}
            {[0, 1, 2, 3].map((productIndex) => (
              <Stack
                key={productIndex}
                sx={{
                  border: "1px solid black",
                  padding: "10px",
                  width: shelfWidth,
                  height: shelfHeight,
                }}
                onClick={() => handleStackClick(shelfIndex * 4 + productIndex)} // calcula um índice único para cada stack, combinando o índice da prateleira (shelfIndex) e o índice do produto (productIndex).
              >
                {stackProduct[shelfIndex * 4 + productIndex]?.name || ""}
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </>
  );
};
