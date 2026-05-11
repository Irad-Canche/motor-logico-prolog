const express = require('express');
const pl = require('tau-prolog');
const fs = require('fs');

const app = express();
app.use(express.json()); // Esto permite que tu servidor lea datos en formato JSON

// Configuramos el motor de Prolog
const session = pl.create();
// Leemos el archivo base.pl que acabas de crear
const program = fs.readFileSync("./base.pl", "utf8");
session.consult(program); 

// Ruta principal para hacer consultas
app.post('/query', (req, res) => {
    const { query } = req.body; 

    // Consultamos al motor de Prolog
    session.query(query, {
        success: function() {
            session.answer({
                success: function(answer) {
                    // Si Prolog encuentra una respuesta, la enviamos de vuelta
                    res.json({ 
                        resultado: session.format_answer(answer),
                        mensaje: "Inferencia realizada con éxito"
                    });
                },
                fail: function() {
                    res.json({ resultado: "No se encontraron resultados (Falso)" });
                },
                error: function(err) {
                    res.status(500).json({ error: "Error en la consulta lógica" });
                }
            });
        },
        error: function(err) {
            res.status(400).json({ error: "Sintaxis de Prolog incorrecta" });
        }
    });
});

// El servidor escuchará en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor activo en http://localhost:3000");
    console.log("Listo para recibir consultas lógicas.");
});