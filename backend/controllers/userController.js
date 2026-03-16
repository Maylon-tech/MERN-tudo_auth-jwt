



export const getUser = async (req, res) => {
    res.status(200).json({message: "The USer testing.. "})
}


export const createUser = async (req, res) => {
    res.status(200).json({message: "Creating User.. "})
}

export const updateUser = async (req, res) => {
    res.status(200).json({message: `Update User ${req.params.id}`})
}


export const deleteUser = async  (req, res) => {
    res.status(200).json({message: `Delete User ${req.params.id}`})
}