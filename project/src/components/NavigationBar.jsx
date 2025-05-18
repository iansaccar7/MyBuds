import { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Badge,
  Image,
  Dropdown,
} from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaInfo,
  FaHome,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

function NavigationBar({ cartItemCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className={`py-3 ${isScrolled ? "shadow" : ""}`}
      style={{
        backgroundColor: isScrolled ? "rgba(10, 10, 20, 0.95)" : "transparent",
        transition: "all 0.3s",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span
            className="me-2"
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#4ade80",
            }}
          >
            MyBuds
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={`mx-2 d-flex align-items-center ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <FaHome className="me-1" /> Início
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/catalog"
              className={`mx-2 d-flex align-items-center ${
                location.pathname === "/catalog" ? "active" : ""
              }`}
            >
              <FaStore className="me-1" /> Produtos
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className={`mx-2 d-flex align-items-center ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <FaInfo className="me-1" /> Sobre
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/cart"
              className={`mx-2 d-flex align-items-center position-relative ${
                location.pathname === "/cart" ? "active" : ""
              }`}
            >
              <FaShoppingCart className="me-1" /> Carrinho
              {cartItemCount > 0 && (
                <Badge
                  bg=""
                  className="position-absolute"
                  style={{
                    top: "-5px",
                    right: "-10px",
                    backgroundColor: "#4ade80",
                    color: "#0a0a14",
                    fontWeight: "700",
                  }}
                >
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>

            {user ? (
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-basic"
                  className="nav-link d-flex align-items-center"
                  style={{ color: "var(--text-color)" }}
                >
                  <Image
                    src={user.avatar_url}
                    alt="Profile"
                    roundedCircle
                    width="32"
                    height="32"
                    className="me-2"
                  />
                  {user.email}
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <Dropdown.Item
                    onClick={handleLogout}
                    style={{ color: "var(--text-color)" }}
                  >
                    Sair
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link
                as={NavLink}
                to="/login"
                className="mx-2 d-flex align-items-center"
              >
                <FaUser className="me-1" /> Entrar
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
