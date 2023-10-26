import { Router } from "express";
import { libro } from "./controller.js"; 
export const router = Router();

router.get('/libros', libro.getAll); 
router.get('/libros/:id', libro.getOne);

router.post('/libros', libro.add); 
//tipo de solicitud POST, permite cargar con datos el cuerpo de la solicitud http




//actualizada el controlador en controller.js
router.delete('/libros/:ISBN', libro.delete);
//tipo de solicitud DELETE, solicitud especifica para eliminar


//Anterior funcion para eliminar por id
//router.delete('/libros/:id', libro.delete);


router.put('/libros/:id', libro.update);
//tipo de solicitud PUT, solicitud para modificar