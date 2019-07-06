/**
 * This view is an example list of people.
 */
Ext.define('ExtTest.view.main.Profile', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainusers',

 title: 'Пользователи',

 frame: true,

    store: 'UsersStore',
       columns: [
        { text: 'ID',  dataIndex: 'id', flex: 1 },
        { text: 'Имя', dataIndex: 'name', flex: 1 },
        { text: 'Фамилия', dataIndex: 'surname', flex: 1 },
        { text: 'Отчество', dataIndex: 'patronymic', flex: 1 },
        { text: 'email', dataIndex: 'email', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

Ext.define('UsersModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'surname', type: 'string'},
        {name: 'patronymic', type: 'string'},
        {name: 'email', type: 'string'},
    ]
});


var store = new Ext.data.JsonStore({
  autoLoad: true,
  autoSync: true,
  storeId: 'UsersStore',
  model: 'UsersModel',
  proxy: {
        type: 'ajax',
        url: '../../web/Usersdb.php',
        reader: {
            type: 'json',
            rootProperty: 'myInventory'
        }
    },
});




