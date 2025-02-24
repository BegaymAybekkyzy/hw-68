import { Navbar, Container } from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="mb-5">
        <Navbar className="bg-body-tertiary">
          <Container>
            <NavLink to="/" className="navbar-brand">Список задач</NavLink>
          </Container>
        </Navbar>
      </header>

      <Container>{children}</Container>
    </>
  );
};

export default Layout;