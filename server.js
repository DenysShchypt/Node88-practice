import mongoose from "mongoose";
import app from "./app.js";
const { DB_HOST, PORT = 3000 } = process.env;
console.log(DB_HOST);
mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Server is open");
    }),
  )
  .catch((error) => {
    console.log(error.message);
    // Команда яка закриває запущені процеси
    process.exit(1);
  });
