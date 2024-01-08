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
  green: [
    '#e5feee',
    '#d2f9e0',
    '#a8f1c0',
    '#7aea9f',
    '#53e383',
    '#3bdf70',
    '#2bdd66',
    '#1ac455',
    '#0caf49',
    '#00963c',
  ],
  'blue-gray': [
    '#f3f3fe',
    '#e4e6ed',
    '#c8cad3',
    '#a9adb9',
    '#9093a4',
    '#808496',
    '#767c91',
    '#656a7e',
    '#585e72',
    '#4a5167',
  ],
  pink: [
    '#ffe9ff',
    '#fed1fd',
    '#faa1f7',
    '#f66ef1',
    '#f243eb',
    '#f028e8',
    '#f018e8',
    '#d609cf',
    '#bf00b9',
    '#a700a1',
  ],
  violet: [
    '#f6ecff',
    '#e7d6fb',
    '#caabf1',
    '#ac7ce8',
    '#9354e0',
    '#833cdb',
    '#7b2eda',
    '#6921c2',
    '#5d1cae',
    '#501599',
  ],
};

export default colors;