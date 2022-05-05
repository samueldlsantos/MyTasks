const apiResource = (path, controller, router) => {
	router.group(path, (router) => {
		router.get('/', controller.index);
		router.get('/:id', controller.show);
		router.post('/', controller.store);
		router.put('/:id', controller.update);
		router.delete('/:id', controller.destroy);
	});
}

export default apiResource;