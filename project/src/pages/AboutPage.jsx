import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLaptopCode, FaShieldAlt, FaUsers } from "react-icons/fa";

import sobre from "../assets/sobre.png";

function AboutPage() {
  return (
    <>
      <section className="py-5 mt-5">
        <Container className="py-5">
          <Row className="mb-5">
            <Col className="text-center" data-aos="fade-up">
              <h2 className="section-title">Sobre a MyBuds</h2>
              <p className="lead" style={{ color: "#e1e1e6" }}>
                Uma história fictícia inspirada na série "How to Sell Drugs
                Online (Fast)"
              </p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
              <h3 className="mb-4">Nossa História</h3>
              <p style={{ color: "#e1e1e6" }}>
                A MyBuds nasceu de uma ideia simples: revolucionar a forma como
                as pessoas acessam cannabis de qualidade. Fundada por um grupo
                de jovens visionários, nossa plataforma cresceu rapidamente para
                se tornar a referência no mercado de cannabis fictícia.
              </p>
              <p style={{ color: "#e1e1e6" }}>
                Começamos em um pequeno quarto, desenvolvendo um sistema de
                entrega seguro e anônimo. Hoje, operamos em escala global,
                mantendo os mesmos princípios de inovação, segurança e
                experiência excepcional para o cliente.
              </p>
              <p style={{ color: "#e1e1e6" }}>
                <strong>IMPORTANTE:</strong> Este é um site fictício inspirado
                pela série de TV. Não vendemos cannabis ou produtos
                relacionados. Todo o conteúdo é fictício e para fins de
                entretenimento apenas.
              </p>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="position-relative text-center">
                <img
                  src={sobre}
                  alt="MyBuds Team"
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className="text-center" data-aos="fade-up">
              <h3 className="mb-5">Nossos Valores</h3>
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
              <Card className="p-4 h-100 bg-dark-card">
                <div className="text-center mb-4">
                  <FaLaptopCode size={40} style={{ color: "#4ade80" }} />
                </div>
                <Card.Body
                  className="text-center p-0"
                  style={{ color: "#4ade80" }}
                >
                  <h4 className="mb-3">Inovação</h4>
                  <p style={{ color: "#e1e1e6" }}>
                    Constantemente buscamos novas tecnologias e métodos para
                    melhorar nossa plataforma e a experiência do usuário.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={4}
              md={6}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Card className="p-4 h-100 bg-dark-card">
                <div className="text-center mb-4">
                  <FaShieldAlt size={40} style={{ color: "#4ade80" }} />
                </div>
                <Card.Body
                  className="text-center p-0"
                  style={{ color: "#4ade80" }}
                >
                  <h4 className="mb-3">Segurança</h4>
                  <p style={{ color: "#e1e1e6" }}>
                    A segurança e o anonimato dos nossos usuários são nossa
                    prioridade máxima. Utilizamos as mais avançadas técnicas de
                    criptografia.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={4}
              md={6}
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Card className="p-4 h-100 bg-dark-card">
                <div className="text-center mb-4">
                  <FaUsers size={40} style={{ color: "#4ade80" }} />
                </div>
                <Card.Body
                  className="text-center p-0"
                  style={{ color: "#4ade80" }}
                >
                  <h4 className="mb-3">Comunidade</h4>
                  <p style={{ color: "#e1e1e6" }}>
                    Acreditamos no poder da comunidade e da colaboração para
                    criar produtos melhores e mais seguros.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;
