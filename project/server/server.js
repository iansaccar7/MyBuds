import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database('database.db');
const app = express();
const PORT = 3000;

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Criar tabelas
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar_url TEXT DEFAULT 'https://i.imgur.com/6VBx3io.png',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Rotas de autenticação
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.prepare('INSERT INTO users (email, password) VALUES (?, ?)')
            .run(email, hashedPassword);

        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: 'Email já cadastrado' });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            'your-secret-key',
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                avatar_url: user.avatar_url
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

// Middleware de autenticação
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token inválido' });
        }
        req.user = user;
        next();
    });
};

// Rota para atualizar avatar
app.post('/api/update-avatar', authenticateToken, upload.single('avatar'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Nenhum arquivo enviado' });
    }

    const avatarUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;

    db.prepare('UPDATE users SET avatar_url = ? WHERE id = ?')
        .run(avatarUrl, req.user.id);

    res.json({ avatar_url: avatarUrl });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});