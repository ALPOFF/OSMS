Ext.define('ExtTest.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'ExtTest.view.login.LoginController',
        'Ext.form.Panel'
    ],
           init: function() {
    // start the mask on the body and get a reference to the mask
     splashscreen = Ext.getBody().mask('', 'splashscreen');
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

   task.delay(5000);
}, 
    controller: 'login',
    bodyPadding: 10,
    title: 'Авторизация',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Имя пользователя',
            id: 'username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            id: 'password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Оба поля обязательны для заполнения'
        }],
        buttons: [{
        text: 'Очистить',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Войти',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        listeners: {
                click: 'onSubmitClick'
            }




    }],
       
    }
});