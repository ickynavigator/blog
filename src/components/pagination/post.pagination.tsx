'use client';

import Pagination from '.';

interface ITagPagination {
  total: number;
  current: number;
}

const PostPagination = (props: ITagPagination) => {
  return (
    <Pagination
      total={props.total}
      current={props.current}
      builder={p => {
        return `/?p=${p}`;
      }}
    />
  );
};

export default PostPagination;
