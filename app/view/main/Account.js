Ext.define('ExtTest.view.main.Account', {
    extend: 'Ext.form.Panel',
    xtype: 'mainaccount',

    title: 'Ваш аккаунт',

    frame: true,

    defaults: {
        xtype: 'textfield',
        labelAlign: 'left',
        padding: 10
    },
    layout: 'hbox',
    items: [
      /*  {   
            xtype: 'label',
            html: 'Имя',
            name: 'firstName'
        },
        {   
            xtype: 'label',
            html: 'Фамилия',
            name: 'lastName'
        },
        {   
            xtype: 'label',
            html: 'Отчество',
            name: 'lastName'
        },*/
       /* {   

        },*/
        /*{   
            xtype: 'textfield',
            fieldLabel: 'Количество',
            value: '1',
            handler: function(){
                value.setValue("sds")
            } */
        /*},*/
    ],

});

 


Ext.define('AccModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'surname', type: 'string'},
        {name: 'patronymic', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'surname', type: 'string'}
    ]
});


var accstore = new Ext.data.JsonStore({
  autoLoad: true,
  autoSync: true,
  storeId: 'AccStore',
  model: 'AccModel',
  proxy: {
        type: 'ajax',
        url: '../../web/Usersdb.php',
        reader: {
            type: 'json',
            rootProperty: 'myInventory'
        }
    },
});

 