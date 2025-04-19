import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { productsData } from "../data/products";

function CatalogPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <>
      <section className="py-5 mt-5">
        <Container className="py-5">
          <h2 className="section-title mb-5" data-aos="fade-up">
            Nossos Produtos
          </h2>

          <Row className="mb-5">
            <Col lg={8} md={6} className="mb-3 mb-md-0">
              <InputGroup>
                <InputGroup.Text
                  id="search-addon"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <FaSearch color="var(--text-color)" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-color)",
                  }}
                />
              </InputGroup>
            </Col>
            <Col lg={4} md={6}>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-color)",
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all"
                      ? "Todas Categorias"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col
                  key={product.id}
                  lg={4}
                  md={6}
                  className="mb-4"
                  data-aos="fade-up"
                >
                  <Card className="h-100 product-card">
                    <div className="position-relative">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div
                        className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded"
                        style={{
                          backgroundColor: "var(--primary)",
                          color: "var(--darker)",
                          fontWeight: "600",
                          fontSize: "0.8rem",
                        }}
                      >
                        {product.category}
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title
                        className="mb-3"
                        style={{ color: "var(--text-color)" }}
                      >
                        {product.name}
                      </Card.Title>
                      <Card.Text
                        style={{ color: "var(--text-color)" }}
                        className="flex-grow-1"
                      >
                        {product.description}
                      </Card.Text>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span
                          className="fw-bold"
                          style={{ color: "var(--primary)" }}
                        >
                          R$ {product.price.toFixed(2)}
                        </span>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => addToCart(product)}
                          className="d-flex align-items-center"
                        >
                          <FaCartPlus className="me-1" /> Adicionar
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <p style={{ color: "var(--text-color)" }}>
                  Nenhum produto encontrado.
                </p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CatalogPage;
