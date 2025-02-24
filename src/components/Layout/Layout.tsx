import { Navbar, Container } from "react-bootstrap";
import React from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="mb-5">
        <Navbar className="bg-success-subtle">
          <Container>
            <Navbar.Brand className="text-success-emphasis">
              Список задач
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>

      <Container>{children}</Container>
    </>
  );
};

export default Layout;
