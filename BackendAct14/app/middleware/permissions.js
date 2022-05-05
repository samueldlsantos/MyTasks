const permissions = (req, res, next) => {
	console.log(req);
	//"roles" "GET" = roles.index == module.function => next() : res.json("402 No autorizado");
	next();
}

export default permissions;