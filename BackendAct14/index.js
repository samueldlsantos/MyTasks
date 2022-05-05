import app from './app.js';
//import sequelize from './database/config/sequelize.js';

app.set('port', process.env.PORT || 3000);

async function main() {
	//sequelize.sync({ force: true });
	app.listen(app.get('port'), () => {
		console.log('Server running on port: ', app.get('port'));
	});
}

main();