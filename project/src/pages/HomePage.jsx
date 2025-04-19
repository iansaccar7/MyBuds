import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import logo from "../assets/logo.png";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">
                Bem-vindo à{" "}
                <span
                  style={{
                    background: "linear-gradient(145deg, #00ff9d, #006B3C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  MyBuds
                </span>
              </h1>
              <p className="lead mb-4 text-muted">
                A loja de cannabis fictícia mais inovadora inspirada na série
                "How to Sell Drugs Online (Fast)". Explore nosso catálogo
                exclusivo de produtos fictícios.
              </p>
              <div className="d-flex gap-3">
                <Button
                  as={Link}
                  to="/catalog"
                  size="lg"
                  className="btn-primary"
                >
                  Explorar Produtos
                </Button>
                <Button
                  as={Link}
                  to="/about"
                  variant="outline-primary"
                  size="lg"
                >
                  Saiba Mais
                </Button>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="position-relative text-center">
                <img
                  src={logo}
                  alt="MyBuds App"
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "80%",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container className="py-5">
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title" data-aos="fade-up">
                Por que escolher a MyBuds?
              </h2>
            </Col>
          </Row>
          <Row>
            <Col
              lg={4}
              md={6}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="p-4 h-100 bg-dark-card rounded">
                <div className="mb-4">
                  <span
                    style={{
                      fontSize: "3rem",
                      background: "linear-gradient(145deg, #00ff9d, #006B3C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    🔒
                  </span>
                </div>
                <h4>100% Seguro</h4>
                <p className="text-muted">
                  Todas as transações são criptografadas e completamente
                  anônimas. Seus dados nunca serão compartilhados.
                </p>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="p-4 h-100 bg-dark-card rounded">
                <div className="mb-4">
                  <span
                    style={{
                      fontSize: "3rem",
                      background: "linear-gradient(145deg, #00ff9d, #006B3C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    🚚
                  </span>
                </div>
                <h4>Entrega Discreta</h4>
                <p className="text-muted">
                  Entregamos para qualquer lugar em embalagens discretas.
                  Pedidos processados com máxima discrição.
                </p>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="p-4 h-100 bg-dark-card rounded">
                <div className="mb-4">
                  <span
                    style={{
                      fontSize: "3rem",
                      background: "linear-gradient(145deg, #00ff9d, #006B3C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ⭐
                  </span>
                </div>
                <h4>Qualidade Premium</h4>
                <p className="text-muted">
                  Todas as nossas flores fictícias são da mais alta qualidade
                  imaginária. Satisfação garantida.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: "var(--gradient-dark)" }}>
        <Container className="py-5">
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h2 className="mb-4">Pronto para experimentar?</h2>
              <p className="lead mb-5 text-muted">
                Explore nosso catálogo de produtos fictícios e descubra por que
                somos a referência em cannabis de qualidade fictícia.
              </p>
              <Button
                as={Link}
                to="/catalog"
                size="lg"
                className="btn-primary px-5 py-3"
              >
                Ver Produtos <FaArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
