import { Box, Stack } from '@mui/material';


export interface ShelfProps {
    stack: { bgcolor: string; width: string; height: string }[][];
    spacing: number;
    height: string;
    align: 'flex-start' | 'center' | 'flex-end';
}

export const Shelf = ({ stack, spacing, height, align }: ShelfProps) => {
    return (
        <Box border={1} borderColor={'text.primary'} display={'flex'} justifyContent={align} >  {/**/}
            <Stack spacing={spacing} direction={'row'} height={height} alignItems={'flex-end'}>
                {stack.map((box, index) => (
                    <Stack key={index} spacing={0.1}>
                        {box.map((b, i) => (
                            <Box key={i} bgcolor={b.bgcolor} width={b.width} height={b.height}></Box>
                        ))}
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
};