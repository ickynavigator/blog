'use client';

import Pagination from '.';

interface ITagPagination {
  total: number;
  current: number;
  tag: string;
}

const PostPagination = (props: ITagPagination) => {
  return (
    <Pagination
      total={props.total}
      current={props.current}
      builder={p => `/tag/${props.tag}/${p}`}
    />
  );
};

export default PostPagination;
