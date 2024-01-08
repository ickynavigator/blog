'use client';
import {
  ActionIcon,
  ColorSwatch as MantineColorSwatch,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconColorSwatch } from '@tabler/icons-react';
import cx from 'clsx';
import colors, { COLOR_STORAGE_KEY } from '~/lib/colors';
import classes from './themeSwatch.module.css';

interface IColorMenuProps {
  onSelect: (color: string) => void;
  selectedColor: string;
}

const ColorMenu = (props: IColorMenuProps) => {
  const { onSelect, selectedColor } = props;
  const { colorScheme } = useMantineColorScheme();

  return Object.entries(colors).map(([key, value]) => {
    return (
      <MenuItem
        leftSection={<MantineColorSwatch color={value[5]} size={16} />}
        key={key}
        color={colorScheme == 'dark' ? value[2] : value[7]}
        onClick={() => onSelect(key)}
        disabled={selectedColor == key}
      >
        <Text tt="capitalize" fz={13}>
          {key}
        </Text>
      </MenuItem>
    );
  });
};

const ColorSwatch = () => {
  const [value, setValue] = useLocalStorage({ key: COLOR_STORAGE_KEY });
  return (
    <Menu withArrow shadow="md" position="left-start" trigger="click-hover">
      <MenuTarget>
        <ActionIcon variant="default" size="md" aria-label="Change Site color">
          <IconColorSwatch className={cx(classes.icon)} stroke={1.5} />
        </ActionIcon>
      </MenuTarget>

      <MenuDropdown>
        <ColorMenu selectedColor={value} onSelect={setValue} />
      </MenuDropdown>
    </Menu>
  );
};

export default ColorSwatch;
