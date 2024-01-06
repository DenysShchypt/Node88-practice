import express from "express";
import cors from "cors";
import logger from "morgan";
import productsRouter from "./routes/api/products.js";
import "dotenv/config";
// Додавання данних з env змінні оточення process.env

//web-server
const app = express();

//   const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
// Middleware для логування
app.use(logger("dev"));
// Middleware for CORS questions
app.use(cors());
// Middleware для обробки тіла запиту(req.body) по заголовку Content-type в форматі json (application/json);
app.use(express.json());
// Обробка запитів на API за допомогою маршрутів
app.use('/api/products', productsRouter);
// Middleware для невірного запиту
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
});
// next(error)=>Обробник помилок error. це middleware з 4ма параметрами
app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

export default app;




