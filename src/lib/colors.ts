import type { MantineColorsTuple } from '@mantine/core';

export const COLOR_STORAGE_KEY = 'COLOR_STORAGE_KEY';

const colors: Record<string, MantineColorsTuple> = {
  tomato: [
    '#fff0e4',
    '#ffe0cf',
    '#fac0a1',
    '#f69e6e',
    '#f28043',
    '#f06d27',
    '#f06418',
    '#d6530c',
    '#bf4906',
    '#a73c00',
  ],
  red: [
    '#ffe9e9',
    '#ffd1d1',
    '#fba0a1',
    '#f76d6d',
    '#f34141',
    '#f22625',
    '#f21616',
    '#d8070b',
    '#c10008',
    '#a90003',
  ],
  blue: [
    '#e5f4ff',
    '#cde2ff',
    '#9bc2ff',
    '#64a0ff',
    '#3984fe',
    '#1d72fe',
    '#0969ff',
    '#0058e4',
    '#004ecc',
    '#0043b5',
  ],
};

export default colors;
