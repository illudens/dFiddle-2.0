define(['plugins/router', 'knockout'], function (router, ko) {

	/////////////////////
	// Private Members
	/////////////////////
	var deactivateMessage = ko.observable();
	
	/////////////////////
	// Internal Methods
	/////////////////////
	
    // Redirecting from / to first route
    router.guardRoute = function(routeInfo, params, instance){
        if (params.fragment === ''){
            return routeInfo.router.routes[0].hash;
        }
        return true;
    };

	/////////////////////
	// Lifecyle Methods
	/////////////////////

	/**
	* Event on viewmodel initialization
	* @param {object} route parameters object
	* @return true is initialization was successful
	*/
    function activate() {
		app.on('test:deactivate', function(message) {
			deactivateMessage(message);
		});

		// Load route from our config module
		return router.map([
                { route: '', moduleId: 'viewmodels/pageA', title: 'Page A', nav: false },
                { route: 'pageA', moduleId: 'viewmodels/pageA', title: 'Page A', nav: true },
                { route: 'pageB', moduleId: 'viewmodels/pageB', title: 'Page B', nav: true },
                { route: 'pageC', moduleId: 'viewmodels/pageC', title: 'Page C', nav: true }
            ])
			.buildNavigationModel()
			.mapUnknownRoutes('viewmodels/pageA', 'not-found')
			.activate();
	}

    return {
        // Public Properties
		deactivateMessage: deactivateMessage,
		
		// Public Methods
        router: router,
        activate: activate
    };
});