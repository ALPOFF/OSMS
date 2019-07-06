Ext.define('ExtTest.view.main.Start', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.selection.SpreadsheetModel',
        'Ext.grid.plugin.Clipboard',
        'ExtTest.view.main.StartController'
        //'KitchenSink.store.grid.MonthlySales'
    ],

    xtype: 'spreadsheet-checked',
    layout: 'fit',
    controller: 'spreadsheet',

    store: 'MonitStore',
    columnLines: true,
    height: window.innerHeight - (36+36),
    //width: 750,
    title: 'Выберите спутники (макс. кол-во 5)',
    frame: true,

    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    // Enable CTRL+C/X/V hot-keys to copy/cut/paste to the system clipboard.
    plugins: [
        'clipboard',
        'selectionreplicator'
    ],

    listeners: {
        selectionchange: 'onSelectionChange'
    },

    tools: [{
        type: 'refresh',
        handler: 'onRefresh',
        tooltip: 'Reload Data'
    }],

    tbar: [/*{
        xtype: 'component',
        html: 'Selectable: '
    },*/ /*{
        text: 'Rows',
        enableToggle: true,
        toggleHandler: 'toggleRowSelect',
        pressed: true
    }, {
        text: 'Cells',
        enableToggle: true,
        toggleHandler: 'toggleCellSelect',
        pressed: true
    }, {
        text: 'Columns',
        enableToggle: true,
        toggleHandler: 'toggleColumnSelect',
        pressed: true
    },*/
    {
        text: 'Подтвердить выбор',
        enableToggle: true,
        toggleHandler: 'SelectConfirm',
        pressed: true
    }, '->', {
        xtype: 'component',
        reference: 'status'
    },
	{
        xtype: 'component',
        html: 'Поиск: '
    },
	{		 
            xtype: 'textfield',
            fieldStyle: "",
            reference: 'nameFilterField',
            //flex : 1,
            margin: 2,
            enableKeyEvents: true,
            listeners: {
                keyup: 'onNameFilterKeyup',
                buffer: 500
            }
        }],

    columns:[
        { text: 'Номенклатура', 
        dataIndex: 'name', 
        flex: 1,
        minWidth: 70 
        },
       /* { text: 'Период',  
        dataIndex: 'period', 
        flex: 1
        },*/
        { text: 'Статус',  
        dataIndex: 'status', 
        flex: 1
        },
        { text: 'Обозначение',  
        dataIndex: 'int_designator', 
        flex: 1
        }
    ],
    forceFit: true,

    viewConfig: {
        columnLines: true,
        trackOver: false
    }
});