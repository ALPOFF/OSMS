Ext.define('ExtTest.model.Company', {
    extend: 'Ext.data.Model',
    requires: [
        //'ExtTest.model.field.PhoneNumber',
        'Ext.data.proxy.Rest'
    ],
    fields: [
        {name: 'name'},
        {name: 'price', type: 'float'},
        { name: 'priceChange', type: 'float' },
        { name: 'priceChangePct', type: 'float' },
        { name: 'priceLastChange', type: 'date', dateReadFormat: 'n/j' },

        // Calculated field. Depends on price value. Adds it to price history.
        // Trend begins with the current price. Changes get pushed onto the end
   
    ],

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json'
        },
        url: 'Company'
    },

    validators: {
        name: 'presence'
    },

    addPriceTick: function () {
        // Set data, but pass "clean" flag.
        this.set('price', this.generateNewPrice(), {
            dirty: false
        });
    },

    generateNewPrice: function () {
        var newPrice = Math.abs(this.data.price + Ext.Number.randomInt(-2345, 2345) / 100);

        return Math.round(newPrice * 100) / 100;
    }
});
