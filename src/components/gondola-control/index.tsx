import { Box, Paper, TextField } from "@mui/material";
import { useState, ReactNode } from "react";

export interface GondolaControlProps {
  children: (props: { shelfWidth: number; gap: number }) => ReactNode;
  onShelfHeightChange: (index: number, height: number) => void;
  selectedShelfIndex: number | null;
}

export const GondolaControl = ({
  children,
  onShelfHeightChange,
  selectedShelfIndex,
}: GondolaControlProps) => {
  const [shelfWidth, setShelfWidth] = useState<number>(100);
  const [gap, setGap] = useState<number>(0);
  const [shelfHeights, setShelfHeights] = useState<number[]>([40]);

  const handleShelfHeightChange = (index: number, height: number) => {
    const newShelfHeights = [...shelfHeights];
    newShelfHeights[index] = height;
    setShelfHeights(newShelfHeights);
    onShelfHeightChange(index, height);
  };

  return (
    <Box>
      <Paper
        sx={{
          padding: 2,
          border: 1,
          borderRadius: 1,
          width: 800,
          gap: 2,
          display: "flex",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <TextField
          label="Largura da Gondola"
          type="number"
          value={shelfWidth}
          onChange={(e) => setShelfWidth(Number(e.target.value))}
        />
        <TextField
          label="Espaçamento"
          type="number"
          value={gap}
          onChange={(e) => setGap(Number(e.target.value))}
        />
        {selectedShelfIndex !== null && (
          <TextField
            label={`Altura da Prateleira ${selectedShelfIndex + 1}`}
            type="number"
            value={shelfHeights[selectedShelfIndex]}
            onChange={(e) =>
              handleShelfHeightChange(
                selectedShelfIndex,
                Number(e.target.value)
              )
            }
          />
        )}
      </Paper>

      {children({ shelfWidth, gap })}
    </Box>
  );
};
