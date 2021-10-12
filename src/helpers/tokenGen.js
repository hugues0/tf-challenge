import jwt from 'jsonwebtoken'

const generateToken = ( payload) => {
    const token = jwt.sign({payload},process.env.JWT)
    return token
}

export default generateToken