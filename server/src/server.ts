import dotenv from "dotenv";
dotenv.config();

import app from "./api/api";
import connectDb from "./database/configDb";

connectDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
