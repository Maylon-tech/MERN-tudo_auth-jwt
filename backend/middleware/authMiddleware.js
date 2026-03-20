import jwt from 'jsonwegtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../model/userModel.js'


const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startWith('Bearer')) {
        try {

            token = req.headers.authorization.split(' ')
        } catch (error) {
            
        }
    }



})


export default protect