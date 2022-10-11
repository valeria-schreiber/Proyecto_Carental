import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../../styles/header.css";
import logo from "../../assets/img/carLogo.png";
import Avatar from "react-avatar";
import { useJwt } from "react-jwt";
import { DataContext } from "../../context/DataContext";
import "bootstrap/js/src/collapse.js";

const Header = (props) => {
  const { usuario } = useContext(DataContext);
  const navigate = useNavigate();
  const handlerOut = () => {
    props.setIsLogged(false);
    localStorage.removeItem("token");
    navigate("/home");
  };
  const { decodedToken, isExpired } = useJwt(localStorage.getItem("token"));

  console.log(decodedToken);
 return (
    <Navbar collapseOnSelect expand="lg"  className="header-container" style={{ position: "fixed" }}>
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="maneja">
          <img src={logo} alt="" className="header-img" />
          ¡Maneja con nosotros!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {props.isLogged &&
        usuario.length > 0 &&
        usuario[0].authority === "ADMIN" ? (
          <>
            <Navbar.Collapse className="navbar header-nav">
              <Nav className="header-nav">
                <Button
                  as={Link}
                  to="/administrar"
                  style={{
                    backgroundColor: "#e5efe9",
                    border: "#e5efe9",
                  }}
                >
                  Administrar
                </Button>
                <div className="avatar-container">
                  <Avatar
                    color={"#66a181"}
                    name={decodedToken?.name[0]}
                    round={true}
                    size={30}
                  />
                  <Navbar.Text className="avatar-text">
                    ¡Hola! {decodedToken?.name}
                  </Navbar.Text>
                </div>
                <Button
                  className="logout-button"
                  onClick={handlerOut}
                  style={{
                    backgroundColor: "#66a181",
                    borderColor: "#e5efe9",
                  }}
                >
                  Cerrar Sesion
                </Button>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : props.isLogged ? (
          <>
            <Navbar.Collapse className="navbar header-nav">
              <Nav className="header-nav">
                <div className="avatar-container">
                  <Avatar
                    color={"#66a181"}
                    name={decodedToken?.name[0]}
                    round={true}
                    size={30}
                  />
                  <Navbar.Text className="avatar-text">
                    ¡Hola! {decodedToken?.name}
                  </Navbar.Text>
                </div>
                <Button
                  className="logout-button"
                  onClick={handlerOut}
                  style={{
                    backgroundColor: "#66a181",
                    borderColor: "#e5efe9",
                  }}
                >
                  Cerrar Sesion
                </Button>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <>
            {localStorage.clear}
            <Navbar.Collapse className="navbar header-nav">
              <Nav
                style={{
                  columnGap: "20px",
                }}
              >
                <Button
                  as={Link}
                  to="/registro"
                  style={{
                    backgroundColor: "#e5efe9",
                    border: "#e5efe9",
                  }}
                >
                  Registro
                </Button>
                <Button
                  className="header-button-login"
                  as={Link}
                  to="/login"
                  style={{
                    backgroundColor: "#66a181",
                    border: "#e5efe9",
                    color: "white",
                  }}
                >
                  Login
                </Button>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
