import { Box, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { Shelf } from "./Shelf";
import { useEffect, useState } from "react";

export function GondolaMt() {
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
      <Box>
        <Stack spacing={2}>
          {shelfs.map((shelf, index) => (
            <Shelf
              key={index}
              stack={shelf.boxes}
              height="100px"
              spacing={0.2}
              align={shelf.align}
            ></Shelf>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
