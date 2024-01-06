import { isValidObjectId } from "mongoose";
import { createError } from "../../helpers/index.js";


const isValidId = (req,res,next)=>{
    const {id}= req.params
    if (!isValidObjectId(id)) {
        return next(createError(404,`${id} is not found`))
    }
    next()
}

export default isValidId;