import { pool } from "./database.js";

class LibroController {
  // Método para obtener todos los libros
  async getAll(req, res) {
    try {
      const [result] = await pool.query('SELECT * FROM Bibliotecarest.libros'); // Intentar obtener todos los libros
      res.json(result); // Responder con la lista de libros
    } catch (error) {
      console.error(error); // En caso de error, imprimirlo en la consola
      res.status(500).json({ message: 'Error interno del servidor' }); // Responder con un mensaje de error en el servidor
    }
  }

  // Método para agregar un libro
  async add(req, res) {
    try {
      const libro = req.body; // Obtener los datos del libro del cuerpo de la solicitud
      const [result] = await pool.query(
        `
        INSERT INTO Bibliotecarest.libros(nombre, autor, categoria, año_publicacion, ISBN)
        VALUES (?, ?, ?, ?, ?)
        `,
        [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN]
      ); // Intentar agregar el libro
      res.json({ "id insertado": result.insertId }); // Responder con el ID del libro insertado
    } catch (error) {
      console.error(error); // En caso de error, imprimirlo en la consola
      res.status(500).json({ message: 'Error interno del servidor' }); // Responder con un mensaje de error en el servidor
    }
  }

  // Método para eliminar un libro por ISBN
  async delete(req, res) {
    try {
      const libro = req.body; // Obtener el libro a eliminar del cuerpo de la solicitud
      const [result] = await pool.query(`DELETE FROM Bibliotecarest.libros WHERE ISBN=(?)`, [libro.ISBN]); // Intentar eliminar el libro por ISBN
      res.json({ "Registros eliminados": result.affectedRows }); // Responder con la cantidad de registros eliminados
    } catch (error) {
      console.error(error); // En caso de error, imprimirlo en la consola
      res.status(500).json({ message: 'Error interno del servidor' }); // Responder con un mensaje de error en el servidor
    }
  }

  // Método para actualizar un libro
  async update(req, res) {
    try {
      const libro = req.body; // Obtener los datos del libro del cuerpo de la solicitud
      const [result] = await pool.query(
        `
        UPDATE Bibliotecarest.libros
        SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?)
        WHERE id=(?)`,
        [libro.nombre, libro.autor, libro.categoria, libro.año_publicacion, libro.ISBN, libro.id]
      ); // Intentar actualizar el libro
      res.json({ "Registros actualizados": result.changedRows }); // Responder con la cantidad de registros actualizados
    } catch (error) {
      console.error(error); // En caso de error, imprimirlo en la consola
      res.status(500).json({ message: 'Error interno del servidor' }); // Responder con un mensaje de error en el servidor
    }
  }

  // Método para obtener un libro por su ID
  async getOne(req, res) {
    try {
      const libro_id = req.params.id; // Obtener el ID del libro de los parámetros de la URL
      const [result] = await pool.query('SELECT * FROM Bibliotecarest.libros WHERE id=(?)', [libro_id]); // Intentar obtener el libro por ID

      if (result.length === 0) {
        res.status(404).json({ message: 'Libro no encontrado' }); // Si no se encuentra el libro, responder con un mensaje de "no encontrado"
        return;
      }

      res.json(result[0]); // Responder con el libro encontrado
    } catch (error) {
      console.error(error); // En caso de error, imprimirlo en la consola
      res.status(500).json({ message: 'Error interno del servidor' }); // Responder con un mensaje de error en el servidor
    }
  }
}

export const libro = new LibroController();
