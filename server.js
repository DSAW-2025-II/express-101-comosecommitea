// Importar express
const express = require("express");
const app = express();
const PORT = 3000;

// Información del único estudiante
const student = {
  name: "Samuel",
  lastName: "Escobar",
  email: "samuelespo@unisabana.edu.co",
  id: "0000354769"
};

// Endpoint
app.get("/user-info/1", (req, res) => {
  res.json(student);
});

// Si alguien pide otro ID devuelve error
app.get("/user-info/:id", (req, res) => {
  if (req.params.id !== "1") {
    return res.status(404).json({ error: "Solo existe información del estudiante 1" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
