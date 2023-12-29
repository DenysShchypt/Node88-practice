
import  {createError}  from "../../helpers/index.js";

const validateProducts = schema => {
   // Створюємо функцію обгортку
const fun = async (req,res,next)=>{
  // Достаємо error з req.body
    const { error } = schema.validate(req.body);
     // Перевіряємо на помилку
    if (error) {
      // Шукати далі  Middleware обробник помилок 
      return next(createError(400, error.message));
    }
    next();
  }
  return fun
};

export default validateProducts;
