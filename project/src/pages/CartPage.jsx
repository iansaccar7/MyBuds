import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaCreditCard,
} from "react-icons/fa";

import carrinho from "../assets/carrinho.png";

function CartPage({ cart, removeFromCart, updateQuantity }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calcular o preço total sempre que o carrinho mudar
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cart]);

  // Se o carrinho estiver vazio
  if (cart.length === 0) {
    return (
      <section className="py-5 mt-5">
        <Container className="py-5 text-center">
          <div className="mb-4" data-aos="fade-up">
            <img
              src={carrinho}
              alt="Carrinho Vazio"
              style={{ maxWidth: "200px", opacity: "0.5" }}
              className="img-fluid"
            />
          </div>
          <h2 className="mb-4" data-aos="fade-up" data-aos-delay="100">
            Seu carrinho está vazio
          </h2>
          <p
            className="text-muted mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Parece que você ainda não adicionou nenhum produto ao seu carrinho.
          </p>
          <Button
            as={Link}
            to="/catalog"
            variant="primary"
            className="px-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaArrowLeft className="me-2" /> Explorar Produtos
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-5 mt-5">
      <Container className="py-5">
        <h2 className="section-title mb-5" data-aos="fade-up">
          Seu Carrinho
        </h2>

        <Row>
          <Col lg={8} className="mb-4 mb-lg-0" data-aos="fade-up">
            <div className="bg-dark-card rounded p-4">
              <Table responsive borderless className="mb-0">
                <thead>
                  <tr>
                    <th style={{ width: "50%" }}>Produto</th>
                    <th className="text-center">Preço</th>
                    <th className="text-center">Quantidade</th>
                    <th className="text-center">Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                            className="rounded me-3"
                          />
                          <div>
                            <h6 className="mb-0">{item.name}</h6>
                            <small className="text-muted">
                              {item.category}
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="text-center align-middle">
                        R$ {item.price.toFixed(2)}
                      </td>
                      <td className="text-center align-middle">
                        <div className="d-flex align-items-center justify-content-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <FaMinus size={12} />
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            style={{ borderColor: "var(--border-color)" }}
                          >
                            <FaPlus size={12} />
                          </Button>
                        </div>
                      </td>
                      <td className="text-center align-middle">
                        <strong style={{ color: "var(--primary)" }}>
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </strong>
                      </td>
                      <td className="text-center align-middle">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          style={{ borderColor: "var(--border-color)" }}
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="mt-4">
              <Button as={Link} to="/catalog" variant="outline-primary">
                <FaArrowLeft className="me-2" /> Continuar Comprando
              </Button>
            </div>
          </Col>

          <Col lg={4} data-aos="fade-left">
            <Card className="bg-dark-card">
              <Card.Header>
                <h5 className="mb-0" style={{ color: "#4ade80" }}>
                  Resumo do Pedido
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-3">
                  <span style={{ color: "#e1e1e6" }}>Subtotal</span>
                  <span style={{ color: "#e1e1e6" }}>
                    R$ {totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span style={{ color: "#e1e1e6" }}>Frete</span>
                  <span style={{ color: "#e1e1e6" }}>Grátis</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong style={{ color: "#e1e1e6" }}>Total</strong>
                  <strong style={{ color: "var(--primary)" }}>
                    R$ {totalPrice.toFixed(2)}
                  </strong>
                </div>

                <Form className="mb-4">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Cupom de desconto"
                      style={{
                        backgroundColor: "var(--darker)",
                        borderColor: "var(--border-color)",
                        color: "var(--text-color)",
                      }}
                    />
                  </Form.Group>
                  <Button variant="outline-primary" className="w-100">
                    Aplicar Cupom
                  </Button>
                </Form>

                <Button variant="primary" className="w-100 py-3">
                  <FaCreditCard className="me-2" /> Finalizar Compra
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CartPage;
