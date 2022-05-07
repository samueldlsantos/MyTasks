import dateFormat from 'dateformat';
import jwt from 'jsonwebtoken';
import db from '../models/index.js';
import i18n from '../../config/locale.js';
import bcrypt from 'bcrypt';

var token;

const login = async (req, res) => {
	var result = { 'status': true };
	var user = await db.Users.findOne({ where: { email: req.body.email } });

	if (user) {
		if (bcrypt.compareSync(req.body.password, user.password)) {
			token = jwt.sign({ user: user }, "secret", { expiresIn: "7d" });

			result.user = user;
			result.token = token;
		} else {
			result.status = false;
			result.error = i18n.__("password_incorrect");
		}
	} else {
		result.status = false;
		result.error = i18n.__("user_not_found");
	}

	res.json(result);
}

const logout = async (req, res) => {
     token = undefined;
	console.log(token);
    res.send("logout");
}



const register = async (req, res) => {
	var result = { 'status': true };

	try {
		const timestamps = {
			createdAt: dateFormat(new Date(), "yyyy-mm-dd h:MM:ss"),
			updatedAt: dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")
		};
		var params = { ...req.body, ...timestamps };
		params.password = bcrypt.hashSync(req.body.password, 10);
		var user = await db.Users.create(params);

		 token = jwt.sign({ user: user }, "secret", { expiresIn: "7d" });
		result.user = user;
		result.token = token;
	} catch (error) {
		res.status(500);
		result.status = false;
		result.error = error;
	}

	res.json(result);
}

const recoverPassword = async (req, res) => {
	var result = { 'status': true };
	var user = await db.Users.findOne({ where: { email: req.body.email } });

	if (user) {
		result.data = user;
	} else {
		result.status = false;
		result.error = i18n.__("user_not_found");
	}

	res.json(result);
}

const changePassword = async (req, res) => {
	var result = { 'status': true };
	var user = await db.Users.findByPk(req.params.id);

	if (user) {
		var params = { password: bcrypt.hashSync(req.body.password, 10) }
		await db.Users.update(params, { where: { id: req.params.id } });

		result.message = i18n.__("succesfully_updated");
	} else {
		result.status = false;
		result.error = i18n.__("user_not_found");
	}

	res.json(result);
}

export default { login, logout, register, recoverPassword, changePassword };