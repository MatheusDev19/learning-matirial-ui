import { Box, Button, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { Shelf } from "./Shelf";
import { usePosition } from "../../hooks/use-position";
import { Product } from "../../hooks/use-position";

export function GondolaMt() {
  const { shelfs, handleCreateShelf, handleAddProductToShelf } = usePosition();

  return (
    <>
      <Button onClick={() => handleCreateShelf("flex-start")}>Add shelf</Button>
      <Button
        onClick={() =>
          handleAddProductToShelf(0, 2, {
            bgcolor: "red",
            width: '50px',
            height: '50px',
          })
        }
      >
        Add product shelf
      </Button>
      <Container maxWidth="lg">
        <Box>
          <Stack spacing={0.1}>
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
    </>
  );
}
