/*/*//*
 * This example shows how reapidly updating data can be displayed in a grid without overloading the DOM or
 * the processor.
 *
 * Updates are buffered for a configurable time, defaulting to 200 milliseconds.
 *
 * This example also ilustrates the use of calculated, dependent fields as only the *price* field is actually
 * changed, and all the other changes are applied automatically by the Company model class using the
 * calculate method of the fields.
 */
var trtrtr = Ext.define('ExtTest.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'rtgrid',
    layout: 'fit',
    requires: [
        //'Ext.grid.plugin.CellEditing',
        'ExtTest.view.main.GridController',
    
        
    ],
    controller: 'realtimeGRID',

    title: 'База спутников',

    frame: true,
    
    //store: 'Companies',
    store: 'TestStore',

    height: window.innerHeight - (36+36),
            
    viewModel: {
        data: {
            tickDelay: Ext.view.AbstractView.updateDelay,
            flashBackground: false
        }
    },

    // Rapid updates are coalesced and flushed on a timer.
    viewConfig: {
        throttledUpdate: true
    },

/*    plugins: {
        cellediting: true
    },*/

    //width: window.innerWidth - (36+36),
   // height: window.innerHeight,
    columns: [{
        text: 'ID',
        width: 100,
        //flex: 1,
        sortable: true,
        dataIndex: 'id',
        editor: {
            xtype: 'textfield'
        }
    }, {
        text: 'Широта',
        flex: 1,
        //formatter: 'usMoney',
        dataIndex: 'latitude0',
        align: 'right',
        producesHTML: false,
        sortable: false
    },{
        text: 'Долгота',
        flex: 1,
        //formatter: 'usMoney',
        dataIndex: 'longitude0',
        align: 'right',
        producesHTML: false,
        sortable: false
    }, {
        text: 'Высота',
        flex: 1,
        //formatter: 'usMoney',
        dataIndex: 'altitude0',
        align: 'right',
        producesHTML: false,
        sortable: false
    }, {
        text: 'Скорость',
        flex: 1,
        //formatter: 'usMoney',
        dataIndex: 'speed0',
        align: 'right',
        producesHTML: false,
        sortable: false
    }, /*{
        text: 'Переменная',
        flex: 1,
        //formatter: 'usMoney',
        dataIndex: 'perem',
        align: 'right',
        producesHTML: false,
        sortable: false
    }*/],

     tools: [{
        type: 'refresh',
        handler: 'onRefresh',
        tooltip: 'Reload Data'
    }],



  /*  bbar: {
        docked: 'bottom',
        xtype: 'toolbar',
        defaults: {
            margin: '0 10 0 0'
        },
        items: [{
            fieldLabel: 'Update\u00a0delay',
            xtype: 'sliderfield',
            minValue: 500,
            maxValue: 2000,
            increment: 10,
            labelWidth: 100,
            bind: '{tickDelay}',
            liveUpdate: true,
            listeners: {
                change: 'onTickDelayChange'
            },
            flex: 1
        }, {
            xtype: 'textfield',
            editable: false,
            bind: '{tickDelay}',
            width: 80,
            clearable: false,
            readOnly: true
        }, {
            xtype: 'checkboxfield',
            bind: '{flashBackground}',
            listeners: {
                render: function(c) {
                    c.inputEl.dom.setAttribute('data-qtip', 'Flash background color on change');
                },
                single: true
            }
        }]
    }*/
}); 




var ddfdfd =  Ext.create('Ext.data.JsonStore', {
                  autoLoad: true,
 autoSync: true,
  storeId: 'TestStore',
  proxy: {
        type: 'ajax',
 
        url: '../../../web/try.php',
        reader: {
            type: 'json',
            rootProperty: 'staticg'
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


 