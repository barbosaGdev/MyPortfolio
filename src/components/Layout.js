import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Menu = styled.nav`
  display: flex;
  background: tranparent;
  justify-content: center;
`;

const ListMenu = styled.li`
  padding: 30px;
`;

const Layout = () => {
  return (
    <Menu>
      <ListMenu>
        <Link className="linkMenu" to="/">
          Home
        </Link>
      </ListMenu>
      <ListMenu>
        <Link className="linkMenu" to="/about">
          About
        </Link>
      </ListMenu>
    </Menu>
  );
};

export default Layout;
