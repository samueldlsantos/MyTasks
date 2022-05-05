'use strict';
import dateFormat from 'dateformat';
import bcrypt from 'bcrypt';
import db from './../models/index.js';
import SequelizeErrorHandler from './../traits/sequelize.error.handler.js';

const index = async (req, res) => {
	var result = null;
	try {
			result = await db.Users.findAll({include:"materias"});
		
	} catch (error) {
		console.log(error);
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

const show = async (req, res) => {
	var result = null;
	try {
		result = await db.Users.findByPk(req.params.id);
	} catch (error) {
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

const store = async (req, res) => {
	var result = null;
	try {
		//Validate request
		await db.Users.build(req.body).validate();
		
		const timestamps = {
			created_at: dateFormat(new Date(), "yyyy-mm-dd h:MM:ss"),
			updated_at: dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")
		};
		var params = { ...req.body, ...timestamps };
		params.password = bcrypt.hashSync(req.body.password, 10);
		result = await db.Users.create(params);
	} catch (error) {
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

const update = async (req, res) => {
	var result = null;
	try {
		//Validate request
		await db.Users.build(req.body).validate();

		const timestamps = {
			updated_at: dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")
		};
		var params = { ...req.body, ...timestamps };
		if(req.body.password !== undefined)
			params.password = bcrypt.hashSync(req.body.password, 10);
		await db.Users.update(params, { where: {id: req.params.id}});
		result = await db.Users.findByPk(req.params.id);
	} catch (error) {
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

const destroy = async (req, res) => {
	var result = null;
	try {
		result = await db.Users.destroy({ where: {id: req.params.id}});
		if(result == 1) {
			result = "Eliminado correctamente";
		} else {
			result = `No se eliminó el registro ${req.params.id}`;
		}
	} catch (error) {
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

export default { index, show, store, update, destroy }