'use strict';
import dateFormat from 'dateformat';
import db from '../models/index.js';
import SequelizeErrorHandler from '../traits/sequelize.error.handler.js';


const index = async (req, res) => {
	var result = [];
	try {
		result = await db.Materias.findAll({attributes:{exclude: ['createdBy','updatedAt','createdAt']}, include:"users"});
	} catch (error) {
		console.log(error)
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

const show = async (req, res) => {
	var result = null;
	try {
		result = await  db.Materias.findByPk(req.params.id,);
	} catch (error) {
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

const store = async (req, res) => {
	var result = null;
	try {
		const timestamps = {
			created_at: dateFormat(new Date(), "yyyy-mm-dd h:MM:ss"),
			updated_at: dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")
		};
		var params = { ...req.body, ...timestamps };
		result = await db.Materias.create(params);
		result = await db.Materias.findByPk(result.id);
	} catch (error) {
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

const update = async (req, res) => {
	var result = null;
	try {
		const timestamps = {
			updated_at: dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")
		};
		var params = { ...req.body, ...timestamps };
		await  db.Materias.update(params, { where: {id: req.params.id}});
		result = await db.Materias.findByPk(req.params.id);
	} catch (error) {
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

const destroy = async (req, res) => {
	var result = null;
	try {
		result = await  db.Materias.destroy({ where: {id: req.params.id}});
		if(result == 1) {
			result = i18n.__("succesfully_deleted");
		} else {
			result = i18n.__("error_delete", req.params.id);
		}
	} catch (error) {
		result = SequelizeErrorHandler(error);
	}
	res.json(result);
}

export default { index, show, store, update, destroy }