import { TreeViewBaseItem, } from "@mui/x-tree-view/models";
import { RichTreeViewPro } from "@mui/x-tree-view-pro/RichTreeViewPro";
import { Box } from "@mui/material";

const Items: TreeViewBaseItem[] = [
  { id: "1", label: "Item 1" },
  { id: "2", label: "Item 2" },
  { id: "3", label: "Item 3" },
  { id: "4", label: "Item 4" },
  { id: "5", label: "Item 5" },
  { id: "6", label: "Item 6" },
  { id: "7", label: "Item 7" },
  { id: "8", label: "Item 8" },
  { id: "9", label: "Item 9" },
  { id: "10", label: "Item 10" },
  { id: "11", label: "Item 11" },
  { id: "12", label: "Item 12" },
];

export function Gondola() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <RichTreeViewPro
        sx={{
          bgcolor: "wheat",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(4, auto)",
          height: 350,
          width: 400,
          borderRadius: 3,
          p: 10,
        }}
        items={Items}
        itemsReordering
        experimentalFeatures={{
          indentationAtItemLevel: true,
          itemsReordering: true,
        }}
        canMoveItemToNewPosition={(params) =>
          params.oldPosition.parentId === params.newPosition.parentId
        }
      />
    </Box>
  );
}
