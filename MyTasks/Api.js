const API = 'http://10.0.2.2:3000/api'

export const getUsers = async () => {
    const res = await fetch( API +'/users')
    return await res.json()
}

export const getTasks = async () => {
    const res = await fetch( API +'/materias')
    return await res.json()
}