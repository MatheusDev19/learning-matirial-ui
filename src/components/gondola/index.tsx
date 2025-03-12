import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

// Define o tipo do produto
type Product = {
  id: number;
  name: string;
  color: string;
  width: number;
  height: number;
};

const GONDOLA_WIDTH = 320;
const GRID_ROWS = 4;
const GRID_COLS = 3;

// Define a matriz da gôndola (null significa espaço vazio)
const initialGrid = Array(GRID_ROWS)
  .fill(null)
  .map(() => Array(GRID_COLS).fill(null));

export function Gondola() {
  const [grid, setGrid] = useState<(Product | null)[][]>(initialGrid);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Lista de produtos disponíveis
  const products: Product[] = [
    { id: 1, name: "Produto A", color: "red", width: 80, height: 60 },
    { id: 2, name: "Produto B", color: "blue", width: 100, height: 80 },
    { id: 3, name: "Produto C", color: "green", width: 120, height: 100 },
  ];

  // Função para verificar se a célula pode acomodar o produto sem ultrapassar a largura da gôndola
  const canPlaceProduct = (row: number, col: number, product: Product) => {
    const totalWidth = grid[row].reduce(
      (sum, cell) => sum + (cell ? cell.width : 0),
      product.width
    );
    return totalWidth <= GONDOLA_WIDTH;
  };

  // Função para adicionar um produto a um espaço da gôndola
  const handlePlaceProduct = (row: number, col: number) => {
    if (!selectedProduct || grid[row][col]) return;

    if (!canPlaceProduct(row, col, selectedProduct)) {
      alert("A largura total não pode ultrapassar a largura da gôndola!");
      setSelectedProduct(null);
      return;
    }

    const newGrid = [...grid];
    newGrid[row][col] = selectedProduct;
    setGrid(newGrid);
    setSelectedProduct(null);
  };

  // Função para limpar um produto de um espaço da gôndola
  const handleClearProduct = (row: number, col: number) => {
    const newGrid = [...grid];
    newGrid[row][col] = null;
    setGrid(newGrid);
  };

  return (
    <Box display="flex" gap={4} p={3}>
      
      {/* Seção de Produtos Disponíveis */}
      <Box sx={{ height: "auto", border: "1px solid black", bgcolor: "wheat" }}>
        <Typography
          variant="h5"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={2}
        >
          Produtos disponíveis
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

      {/* Seção da Gôndola */}
      <Box
        sx={{
          height: "auto",
          width: "auto",
          border: "1px solid black",
          bgcolor: "wheat",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            width: GONDOLA_WIDTH,
            bgcolor: "sandybrown",
            position: "relative",
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <Grid
                item
                key={`${rowIndex}-${colIndex}`}
                xs={4}
                // sx={{ border: "1px solid black" }}
              >
                <Box
                  sx={{
                    width: cell ? cell.width : 80,
                    height: cell ? cell.height : 80,
                    border: "2px solid #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: cell ? cell.color : "transparent",
                    cursor: "pointer",
                    position: "relative",
                    mb: 1,
                  }}
                  onClick={() => handlePlaceProduct(rowIndex, colIndex)}
                >
                  {cell ? cell.name : ""}
                  {cell && (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
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


