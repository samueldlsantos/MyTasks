'use strict';
const i18n = require('../../config/locale.js');

module.exports = {
	name: {
		len: {
			args: [1,255],
			msg: i18n.__("string_lenght", "rol", "1 a 255")
		},
		notNull:{
			msg: i18n.__("required", "rol")
		},
		isAlphanumeric: {
			args: true,
			msg: i18n.__("alphanumeric", "rol")
		}
	},
	description: {
		len: {
			args: [1,255],
			msg: i18n.__("string_lenght", "descripción", "1 a 255")
		}
	},
	notes: {
		len: {
			args: [1,1024],
			msg: i18n.__("string_lenght", "notas", "1 a 1024")
		}
	}
}