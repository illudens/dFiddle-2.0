define(['durandal/system', 'durandal/app'],
    function (system, app) {

        /////////////////////
        // Private Members
        /////////////////////
		
		
        /////////////////////
        // Lifecyle Methods
        /////////////////////

        /**
        * Event on viewmodel initialization
        * @param {object} route parameters object
        * @return true is initialization was successful
        */
        function activate(routeData) {
            return true;
        }

        /**
        * Event after DOM is created
        * @param {selector} jquery selector of view
        */
        function attached(view) {
        }

        /**
        * Event before viewmodel is switched out
        * @param {bool} true if permanently releasing, false if switching to another viewmodel
        */
        function deactivate(isClose) {
			app.trigger("test:deactivate", "page C deactivated with isClose equal to " + isClose);
        }


        /////////////////////
        // Internal Methods
        /////////////////////

 
        /////////////////////
        // Public Members and Methods
        /////////////////////
        var vm = {
            // Public Properties

            // Public Methods
            activate: activate,
            attached: attached,
            deactivate: deactivate
        };

        return vm;
    });