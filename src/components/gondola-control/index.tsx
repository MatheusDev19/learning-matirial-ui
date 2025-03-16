import { Box, Paper, TextField } from "@mui/material";
import { useState, ReactNode } from "react";

export interface GondolaControlProps {
  children: (props: {
    shelfWidth: number;
    shelfHeight: number;
    gap: number;
    gondolaHeight: number;
  }) => ReactNode;
}

export const GondolaControl = ({ children }: GondolaControlProps) => {
  const [shelfWidth, setShelfWidth] = useState<number>(100);
  const [shelfHeight, setShelfHeight] = useState<number>(40);
  const [gap, setGap] = useState<number>(0);
  const [gondolaHeight, setGondolaHeight] = useState<number>(520);

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
        <TextField
          label="Altura da Gôndola"
          type="number"
          value={gondolaHeight}
          onChange={(e) => setGondolaHeight(Number(e.target.value))}
        />
      </Paper>

      {children({ shelfWidth, shelfHeight, gap, gondolaHeight })}
    </Box>
  );
};
