Ext.define('ExtTest.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',

    fields: [
        'name', 'surname', 'patronymic', 'email'
    ],

    data: { items: [
        { name: 'Алексей',  surname: "Пантелеев", patronymic: "Сергеевич", email: "leha.mms82@gmail.com" },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
