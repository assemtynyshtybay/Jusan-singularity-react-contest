import { FC } from 'react';
import { Post } from '../types';
type Props = {
  post: Post;
};
const Postt: FC<Props> = ({ post }) => {
  return (
    <>
      <span>post.title</span>
      <span>post.body</span>
    </>
  );
};
export default Postt;
