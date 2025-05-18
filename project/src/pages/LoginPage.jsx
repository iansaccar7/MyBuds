import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await register(email, password);
      alert("Conta criada com sucesso! Faça login para continuar.");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 mt-5">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="bg-dark-card p-4 rounded">
              <h2 className="text-center mb-4">Login</h2>

              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      backgroundColor: "var(--darker)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-color)",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      backgroundColor: "var(--darker)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-color)",
                    }}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? "Carregando..." : "Entrar"}
                  </Button>

                  <Button
                    variant="outline-primary"
                    onClick={handleSignUp}
                    disabled={loading}
                  >
                    Criar Conta
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LoginPage;
