var dfdd =  Ext.create('Ext.data.JsonStore', {
                  autoLoad: true,
  autoSync: true,
  storeId: 'altitStore',
  proxy: {
        type: 'ajax',
 
        url: '../../../web/perem.php',
        reader: {
            type: 'json',
            rootProperty: 'satpos'
        }
    },
     listeners: {
        load: function(store, records, successful) {
            //Ext.Msg.alert('Store count A', 'count: ' + userFromStore.getCount());
            //console.log(userFromStore.getAt(0).data.altitude);
            //var permennaia = userFromStore.getAt(0).data.altitude;
        }
    }
            });



Ext.define('ExtTest.view.main.Start', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid-filtering',
    controller: 'spreadsheet',
    requires: [
        'Ext.grid.filters.Filters',
          'Ext.grid.selection.SpreadsheetModel',
          'ExtTest.view.main.StartController'
        //'KitchenSink.store.Products'
    ],

    title: 'Products',
    collapsible: true,
    frame: true,
    width: 700,
    height: 500,
    resizable: true,

    selModel: {
        type: 'spreadsheet', 
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    plugins: [ 'gridfilters', 'selectionreplicator' ],

     listeners: {
        selectionchange: 'onSelectionChange'
    },

    emptyText: 'No Matching Records',
    loadMask: true,
    stateful: true,

    // Set a stateId so that this grid's state is persisted.
    stateId: 'stateful-filter-grid',

    store: 'altitStore',

    // Dispatch named listener and handler methods to this instance
    defaultListenerScope: true,

    tbar: [{
        text: 'Show Filters...',
        tooltip: 'Show filter data for the store',
        handler: 'onShowFilters'
    }, {
        text: 'Clear Filters',
        tooltip: 'Clear all filters',
        handler: 'onClearFilters'
    }],

    columns: [{
        dataIndex: 'id',
        text: 'Id',
        width: 50,

        // Specify that this column has an associated Filter. This is
        // processed by the gridfilters plugin. If this is a string,
        // this is the type of filter to apply.
        filter: 'number'
    }, {
        dataIndex: 'company',
        text: 'Company',
        flex: 1,

        // As an object, the type property indicates the type of filter to
        // apply. All other properties configure that filter instance.
        filter: {
            type: 'string',
            itemDefaults: {
                emptyText: 'Search for...'
            }
        }
    }, {
        dataIndex: 'price',
        text: 'Price',
        width: 90,
        formatter: 'usMoney',

        filter: 'number'
    }, {
        dataIndex: 'size',
        text: 'Size',
        width: 120,

        filter: 'list' // Use the unique field values for the pick list
    }, {
        xtype: 'datecolumn',
        dataIndex: 'date',
        text: 'Date',
        width: 120,

        filter: true  // use dataIndex first then fallback to column type
    }, {
        dataIndex: 'visible',
        text: 'Visible',
        width: 80,

        filter: 'boolean'
    }],

    onClearFilters: function () {
        // The "filters" property is added to the grid (this) by gridfilters
        this.filters.clearFilters();
    },

    onShowFilters: function () {
        var data = [];

        // The actual record filters are placed on the Store.
        this.store.getFilters().each(function (filter) {
            data.push(filter.serialize());
        });

        // Pretty it up for presentation
        data = Ext.JSON.encodeValue(data, '\n').replace(/^[ ]+/gm, function (s) {
            for (var r = '', i = s.length; i--; ) {
                r += '&#160;';
            }
            return r;
        });
        data = data.replace(/\n/g, '<br>');

        Ext.Msg.alert('Filter Data', data);
    }
});