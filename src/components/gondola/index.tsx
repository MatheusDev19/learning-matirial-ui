import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

// Define o tipo do produto
type Product = {
  id: number;
  name: string;
  color: string;
  width: number; // Adiciona a propriedade width
};

// Define a matriz da gôndola (null significa espaço vazio)
const initialGrid = Array(3)
  .fill(null)
  .map(() => Array(4).fill(null));

export function Gondola() {
  const [grid, setGrid] = useState<(Product | null)[][]>(initialGrid);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Lista de produtos disponíveis
  const products: Product[] = [
    { id: 1, name: "Produto A", color: "red", width: 80 },
    { id: 2, name: "Produto B", color: "blue", width: 100 },
    { id: 3, name: "Produto C", color: "green", width: 120 },
  ];

  // Função para adicionar um produto a um espaço da gôndola
  const handlePlaceProduct = (row: number, col: number) => {
    if (!selectedProduct) return;   // verifica se o produto esta selecionado

    const newGrid = [...grid];             // cria uma copia da matriz
    if (!newGrid[row][col]) {              // verifica se a celula esta vazia
      newGrid[row][col] = selectedProduct; // coloca o produto selecionado na celula
      setGrid(newGrid);                    // atualiza a grid com o produto selecionado
      setSelectedProduct(null);            // Desseleciona após adicionar
    }
  };

  // Função para limpar um produto de um espaço da gôndola
  const handleClearProduct = (row: number, col: number) => {
    const newGrid = [...grid]; // cria uma copia da matriz
    newGrid[row][col] = null; // remove o produto da celula
    setGrid(newGrid); // atualiza a grid
  };

  return (
    <Box display="flex" gap={4} p={3}>
      {/* Seção de Produtos Disponíveis */}
      <Box
        sx={{
          height: "auto",
          border: "1px solid black",
          bgcolor: "wheat",
        }}
      >
        <Typography
          variant="h5"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={5}
        >
          Produtos disponiveis
        </Typography>
        {products.map((produto) => (
          <Button
            key={produto.id}
            onClick={() => setSelectedProduct(produto)}
            sx={{ background: produto.color, color: "#fff", margin: 1 }}
          >
            {produto.name}
          </Button>
        ))}
      </Box>
      <Box>
        <Typography
          variant="h5"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={5}
        >
          Gondola
        </Typography>
        <Grid
          sx={{
            width: "auto",
            height: "auto",
            bgcolor: "sandybrown",
          }}
          container
          spacing={3}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <Grid item key={`${rowIndex}-${colIndex}`} xs={6}>
                <Box
                  sx={{
                    width: cell ? cell.width : 80, // Usa a largura do produto ou um valor padrão
                    height: cell ? cell.width :80,
                    border: "2px solid #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: cell ? cell.color : "transparent",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => handlePlaceProduct(rowIndex, colIndex)}
                >
                  {cell ? cell.name : ""}
                  {cell && (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation(); // Impede que o clique no botão dispare o clique na célula
                        handleClearProduct(rowIndex, colIndex);
                      }}
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        minWidth: "auto",
                        padding: "2px 6px",
                        fontSize: "10px",
                      }}
                    >
                      X
                    </Button>
                  )}
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
}
