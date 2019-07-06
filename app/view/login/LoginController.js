
     Ext.define('ExtTest.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
 
   // onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.


        // Set the localStorage value to true
        //localStorage.setItem("ExtTestLoggedIn", true);
    onSubmitClick: function(button, e, eOpts) {
        var me = this;

              var formPanel = button.up('form'),
            login = formPanel.down('textfield#username').getValue(),
            password = formPanel.down('textfield#password').getValue();
             Ext.Ajax.request({
            url: '/web/server.php',
            params: {
                username: login,
                password: password
            },

            success: function(conn, response, options, eOpts) {

                var result = Ext.JSON.decode(conn.responseText, true);

                if (!result){  
                    result = {};
                    result.success = false;
                    result.msg = conn.responseText;
                }

                if (result.success) {
                
                  /*  Ext.Msg.show({
                        title:'Уведомление',
                        msg: result.msg,
                        icon: Ext.Msg.INFO,
                       buttons: Ext.Msg.OK,
                                 });*/
                    me.getView().destroy(),
                        Ext.create({
                        xtype: 'app-main'
                                });
                        sessionStorage.setItem("Username", login);
                       // sessionStorage.setItem("loggedIn", 1);
                } else {

                    Ext.Msg.show({
                        title:'Ошибка',
                        msg: result.msg,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            },
            failure: function(conn, response, options, eOpts) {

                Ext.Msg.show({
                    title:'Ошибка - обратитесь к системному администратору!',
                    msg: conn.responseText,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        });
        }
});