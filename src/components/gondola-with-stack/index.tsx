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

  const handleStackClick = (stackId: number) => {
    if (selectedProduct) {
      const newStackProduct = [...stackProduct];
      newStackProduct[stackId] = selectedProduct;
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
        {products.map((product: Product, shelfIndex) => (
          // Pratelheira de gondola
          <Stack
            key={product.id}
            direction="row"
            spacing={2}
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
                  width: 100,
                  height: 15,
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




// Atualize a primeira gondola com parametros: 
	// Array de prateleira => deve ter uma funcao que adione uma patelheira a gondola
	
  // Dimensao de prateleiras: largura e altura devem ser ajustadas de forma independente 
  // A altura das prateleiras deve ser ajustadas de forma independente
	// Largura de gondola deve ser igual a largura das prateleiras e devem ser ajustadas juntas (se uma almentar a outra tambem aumenta e vise e versa)
   
  // Array de produtos => deve ter uma funcao que adicione um produto a prateleira
	 
  // Gap entre esses produtos devem ser manipulado de forma independente

  