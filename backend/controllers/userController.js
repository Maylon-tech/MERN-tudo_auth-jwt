import asyncHandler from 'express-async-handler'


// GET the profile data Info
export const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "The User testing.. "})
})

// POST new data API request "register"
export const createUser = asyncHandler(async (req, res) => {
    console.log(req.body)

    res.status(200).json({message: "Creating User.. "})
})

// PUT Update from DB a new Data overWritting 
export const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update User ${req.params.id}`})
})

// DELETE Remove Data throw API on DB
export const deleteUser = asyncHandler(async  (req, res) => {
    res.status(200).json({message: `Delete User ${req.params.id}`})
})