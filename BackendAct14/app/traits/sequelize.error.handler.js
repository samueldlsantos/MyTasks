'use strict';

import i18n from './../../config/locale.js';

const SequelizeErrorHandler = (error) => {
	var result = {};
	result.status = false;
	var validatorMessages = [];
	if(error.name === "SequelizeValidationError") {
		error.errors.forEach((value) => {
			validatorMessages.push(value.message);
		});
		result.error = validatorMessages;
	}
	else if(error.name === "SequelizeUniqueConstraintError") {
		result.error = i18n.__("constraint_error", error.parent.code, error.parent.detail);
	}
	else if(error.name === "SequelizeForeignKeyConstraintError") {
		result.error = i18n.__("constraint_error", error.parent.code, error.parent.detail);
	}
	else {
		result.error = error;
	}
	
	return result;
}

export default SequelizeErrorHandler;