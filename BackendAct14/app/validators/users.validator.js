'use strict';
const i18n = require('../../config/locale.js');

module.exports = {
	email: {
		isEmail: {
			args: true,
			msg: i18n.__("is_email", "correo electrónico")
		},
		len: {
			args: [1,255],
			msg: i18n.__("string_lenght", "correo electrónico", "1 a 255")
		},
		notNull:{
			msg: i18n.__("required", "correo electrónico")
		}
	},
	password: {
		len: {
			args: [1,255],
			msg: i18n.__("string_lenght", "contraseña", "1 a 255")
		}
	},
	roleId: {
		isInt: {
			args: true,
			msg: i18n.__("is_int", "Rol")
		},
	},
	notes: {
		len: {
			args: [1,1024],
			msg: i18n.__("string_lenght", "notas", "1 a 1024")
		}
	}
}