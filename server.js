import express from "express";
import aiBrain from "./brain.js";

const app = express();
app.use(express.json());

app.post("/ask", (req, res) => {
  const question = req.body.question || "";
  const answer = aiBrain(question);
  res.send({ reply: answer });
});

app.listen(3000, () =>
  console.log("🤖 Smart AI Running on http://localhost:3000")
);