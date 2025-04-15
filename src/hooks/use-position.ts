import { useEffect, useState } from "react";

export type ShelfAligment = "flex-start" | "center" | "flex-end";
export type Product = { bgcolor: string; width: string; height: string };

export interface ShelfProps {
  align: ShelfAligment;
  boxes: Product[][];
}

export function usePosition() {
  const [shelfs, setShelfs] = useState<ShelfProps[]>([]);


  useEffect(() => {
    setShelfs([
      { boxes: [[{ bgcolor: "#000", height: "50px", width: "100px" }],[], [], [], [], []], align: "flex-start" },
      { boxes: [[], [], []], align: "center" },
      { boxes: [[], [], [], [], []], align: "flex-end" },
    ]);
  }, []);


  function handleCreateShelf (align: ShelfAligment) {
    setShelfs(_shelfs => [
        ..._shelfs, 
        {
            boxes: [],
            align
        }
    ])
  }

  function handleAddProductToShelf (shelf_position: number,stack_position: number , product: Product) {
    const newShelfs = [...shelfs];
    newShelfs[shelf_position]['boxes'][stack_position].push(product)
    setShelfs(newShelfs)
  }

  function moveStackSameShelf (shelf_position: number, stack_position: number, new_stack_position: number) {
    
  }

  return { shelfs, handleCreateShelf, handleAddProductToShelf}
}



// import {useEffect, useState} from "react";
//
// type ShelfAligment = 'flex-start' | 'center' | 'flex-end'
// type Box = { bgcolor: string; width: string; height: string }
//
// interface ShelfProps {
// align: ShelfAligment
// boxes: Box[][]
// }
//
// export function usePosition() {
// const [shelfs, setShelfs] = useState<ShelfProps[]>([]);
//
// function handleCreateBox(align: ShelfAligment) {
// setShelfs(_shelfs => [
// ..._shelfs,
// {
// boxes: [],
// align,
// }
// ])
// }
//
// function handleAddProductToBox(shelf_position: number, box: Box) {
// const newShelfs = [...shelfs]
// newShelfs[shelf_position]['boxes'].push([box])
// setShelfs(newShelfs)
// }
//
// function handleAddProductToStack(shelf_position: number, stack_position: number, box: Box) {
// const newShelfs = [...shelfs]
// newShelfs[shelf_position]['boxes'][stack_position].push(box)
// setShelfs(newShelfs)
// }
//
// function moveStackSameBox(shelf_position: number, stack_position: number, new_stack_position: number) {
//  const newShelfs = [...shelfs];
//  const boxes = newShelfs[shelf_position]['boxes'];
//  [boxes[stack_position], boxes[new_stack_position]] = [boxes[new_stack_position], boxes[stack_position]];
//  newShelfs[shelf_position]['boxes'] = boxes;
//  setShelfs(newShelfs)
// }
//
//
// function moveStackAnotherShelf(old_shelf_position: number, old_stack_position: number, new_shelf_position: number, new_stack_position: number) {
// const newShelfs = [...shelfs];
//
// setShelfs(newShelfs)
// }

// [4,6] => { 0: 4, 1: 6 }

// useEffect(() => {
//     setShelfs([
//         {
//             boxes: [
//                0 => [{ bgcolor: '#00f', height: '20px', width: '50px' }],
//                1 => [{ bgcolor: '#000', height: '50px', width: '100px' }],
//                 [{ bgcolor: '#f0f', height: '60px', width: '50px' }],
//                 [
//                     { bgcolor: '#00f', height: '20px', width: '50px' }
//                     { bgcolor: '#00f', height: '20px', width: '50px' },
//                 ],
//             ], align: 'flex-start'
//         },
//         {
//             boxes: [
//                 [{ bgcolor: '#f0f', height: '60px', width: '50px' }],
//                 [{ bgcolor: '#f0f', height: '60px', width: '50px' }],
//                 [{ bgcolor: '#0ff', height: '45px', width: '50px' }],
//
//             ], align: 'center'
//         },
//         {
//             boxes: [
//                 [
//                     { bgcolor: '#218131', height: '20px', width: '50px' },
//                     { bgcolor: '#00f', height: '20px', width: '50px' }
//                 ],
//                 [
//                     { bgcolor: '#218131', height: '20px', width: '50px' },
//                     { bgcolor: '#00f', height: '20px', width: '50px' }
//                 ],
//                 [{ bgcolor: '#00f', height: '20px', width: '50px' }, { bgcolor: '#00f', height: '20px', width: '50px' }],
//                 [{ bgcolor: '#f0f', height: '60px', width: '50px' }],
//                 [{ bgcolor: '#f0f', height: '60px', width: '50px' }],
//             ], align: 'flex-end'
//         },
//     ])
// }, []);

// return {shelfs, handleCreateBox, handleAddProductToBox, handleAddProductToStack, moveStackSameBox, moveStackAnotherShelf}
// }
