import { FC } from "react";
import { useNavigate } from 'react-router-dom';
const NavBar:FC = () => {
    const navigate = useNavigate();
    return (
      <>
        <button onClick={() => navigate('/')}>Posts</button>
        <button onClick={() => navigate('/new')}>New Post</button>
      </>
    );
};
export default NavBar;
