import { Box, Stack } from "@mui/material";

export interface ShelfProps {
  stack: { bgcolor: string; width: string; height: string }[][];
  spacing: number;
  height: string;
  align: "flex-start" | "center" | "flex-end";
  onStackClick: (shelfIndex: number) => void;
}

export const Shelf = ({
  stack,
  spacing,
  height,
  align,
  onStackClick,
}: ShelfProps) => {
  return (
    <Box
      border={1}
      borderColor={"text.primary"}
      display={"flex"}
      justifyContent={align}
    >
      {stack.map((box, shelfIndex) => (
        <Stack
          key={shelfIndex}
          spacing={spacing}
          direction={"row"}
          height={height}
          alignItems={"flex-end"}
          sx={{ 
            // border: "1px solid pink",
             width: "100%" }}
          onClick={() => onStackClick(shelfIndex)}
        >
          {box.map((b, boxIndex) => (
            <Box
              key={boxIndex}
              bgcolor={b.bgcolor}
              width={b.width}
              height={b.height}
            />
          ))}
        </Stack>
      ))}
    </Box>
  );
};
