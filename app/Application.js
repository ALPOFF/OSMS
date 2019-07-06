/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ExtTest.Application', {
    extend: 'Ext.app.Application',

    name: 'ExtTest',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
       
    ],
init: function() {
    // start the mask on the body and get a reference to the mask
     splashscreen = Ext.getBody().mask('Система мониторинга загружается, пожалуйста подождите ...', 'splashscreen');
},

  
    launch: function () {

            Ext.tip.QuickTipManager.init();
    var task = new Ext.util.DelayedTask(function() {

        // fade out the body mask
        splashscreen.fadeOut({
            duration: 500,
            remove: true
        });

        // fade out the message
        splashscreen.next().fadeOut({
            duration: 500,
            remove: true
        });

   });

   task.delay(14000);

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = sessionStorage.getItem("Username");
        //console.log(loggedIn);

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        //console.log(typeof loggedIn);
        Ext.create({
            xtype: (loggedIn !== null) ? 'app-main' : 'login'
        });

    },
 /*   onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }*/
});
