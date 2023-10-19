import { pool } from "./database.js";

class LibroController { 
   async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM Bibliotecarest.libros'); 
        res.json(result);
    }

   async add(req, res) {
    const libro = req.body;
    const [result] = await pool.query(`INSERT INTO Bibliotecarest.libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]); // Cambia la tabla a "Bibliotecarest.libros" y los nombres de las columnas
    res.json({"id insertado": result.insertId});
   } 

   async delete(req, res) {
      const libro = req.body; 
      const [result] = await pool.query(`DELETE FROM Bibliotecarest.libros WHERE id=(?)`, [libro.id]); 
      res.json({"Registros eliminados": result.affectedRows});
     } 
  
     async update(req, res) {
      const libro = req.body; 
      const [result] = await pool.query(`UPDATE Bibliotecarest.libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN, libro.id]); // Cambia la tabla a "Bibliotecarest.libros" y los nombres de las columnas
      res.json({"Registros actualizados": result.changedRows});
     }

   async getOne(req, res) {
      try {
       const libro_id = req.params.id; 
       const [result] = await pool.query('SELECT * FROM Bibliotecarest.libros WHERE id=(?)', [libro_id]); 
     
         if (result.length === 0) {  
            res.status(404).json({ message: 'Libro no encontrado' }); 
            return;
         }
     
         res.json(result[0]);
         } catch(err) { 
             console.error(err);
             res.status(500).json({ message: 'Error interno del servidor' });
         }
     }
}

export const libro = new LibroController(); 