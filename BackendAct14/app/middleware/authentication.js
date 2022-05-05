import jwt from 'jsonwebtoken';

const authentication = (req, res, next) => {
	if(req.headers.authorization) {
		var token = req.headers.authorization.split(' ')[1];
		
		//comprobamos la validez del token
		jwt.verify(token, "secret", (err, decoded) => {
			if (!err) {
				next();
			} else {
				res.status(500).json({message: "Ha ocurrido un problema con el token", err})
			}
		});
	} else {
		res.status(401).json({message: "Acceso no autorizado"});
	}
}

export default authentication;