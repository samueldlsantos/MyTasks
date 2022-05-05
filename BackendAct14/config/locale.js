const { I18n } = require('i18n');
const dotenv = require('dotenv');

dotenv.config();
const i18n = new I18n();
i18n.configure({
	defaultLocale: process.env.LOCALE,
	locales: ['en', 'es'],
	directory: './lang'
});

module.exports = i18n;