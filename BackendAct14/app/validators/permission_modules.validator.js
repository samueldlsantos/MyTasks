'use strict';
const i18n = require('./../../config/locale.js');

module.exports = {
	description: {
		len: {
			args: [1,255],
			msg: i18n.__("string_lenght", "descripción", "1 a 255")
		}
	},
	moduleId: {
		isInt: {
			args: true,
			msg: i18n.__("is_int", "módulo")
		},
	},
	moduleTypeId: {
		isInt: {
			args: true,
			msg: i18n.__("is_int", "Tipo de módulo")
		},
	},
	notes: {
		len: {
			args: [1,1024],
			msg: i18n.__("string_lenght", "notas", "1 a 1024")
		}
	}
}