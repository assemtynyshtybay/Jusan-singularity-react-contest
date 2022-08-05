import { FC, useEffect, useState } from "react";
import { Post } from "../types";
import axios from 'axios';
import Postt from "../components/Post";

const Posts:FC = () => {
    const [posts, setPost] = useState<Post[]>([]);
    const fetchPosts = () => {
      return axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then((res) => setPost(res.data));
    };
    useEffect(() => {
      fetchPosts();
    }, []);
    return (
      <>
        <div>Posts</div>
        <div>{posts && posts.map((item) => <div><Postt post={item} /></div>)}</div>
      </>
    );
}
export default Posts;