import { Anchor, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { SanityValues } from '../../../sanity.config';
import classes from './index.module.css';

interface ICategoryListProps {
  categories: SanityValues['category'][];
}

const CategoryList = (props: ICategoryListProps) => {
  const { categories } = props;

  return (
    <Group>
      {categories.map(category => (
        <Anchor
          key={category._id}
          href={`/tag/${category.slug.current}`}
          component={Link}
          passHref
        >
          <Badge variant="outline" radius="md" className={classes.badge}>
            {category.title}
          </Badge>
        </Anchor>
      ))}
    </Group>
  );
};

export default CategoryList;
