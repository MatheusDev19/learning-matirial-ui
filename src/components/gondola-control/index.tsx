import { Box, TextField } from "@mui/material";
import { useState } from "react";

interface GondolaControlProps {
  setShelfWidth: (width: number) => void;
  setShelfHeight: (height: number) => void;
  setGap: (gap: number) => void;
  gap: number;
  shelfWidth: number;
  shelfHeight: number;
}

export const GondolaControl = ({
  setShelfWidth,
  shelfWidth,
  setShelfHeight,
  shelfHeight,
  setGap,
  gap,
}: GondolaControlProps) => {
  return (
    <Box
      sx={{
        padding: 2,
        border: 1,
        borderColor: "primary.main",
        borderRadius: 1,
      }}
    >
      <TextField
        label="Largura da Prateleira"
        type="number"
        value={shelfWidth}
        onChange={(e) => setShelfWidth(Number(e.target.value))}
      />
      <TextField
        label="Altura da Prateleira"
        type="number"
        value={shelfHeight}
        onChange={(e) => setShelfHeight(Number(e.target.value))}
      />
      <TextField
        label="Espaçamento"
        type="number"
        value={gap}
        onChange={(e) => setGap(Number(e.target.value))}
      />
    </Box>
  );
};
