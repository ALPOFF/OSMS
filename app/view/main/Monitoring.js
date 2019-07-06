Ext.define('MonitModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'period', type: 'int'},
        {name: 'status', type: 'string'},
        {name: 'int_designator', type: 'string'},
        {name: 'perem', type: 'float'}
    ],
    
 
    addPriceTick: function () {

        // Set data, but pass "clean" flag.
        this.set('perem', this.generateNewPrice(), {
            dirty: false
        });



    },

    generateNewPrice: function () {


   /*     var newPrice = Math.abs(this.data.perem + Ext.Number.randomInt(-2345, 2345) / 100);
    return Math.round(newPrice * 100) / 100;*/



 /*  var satperem = new Ext.data.JsonStore({
  autoLoad: true,
  autoSync: true,
  storeId: 'satperem',
  proxy: {
        type: 'ajax',
 
        url: '../../web/perem.php',
        reader: {
            type: 'json',
            rootProperty: 'satper',
                }
        },
 fields: [{name: 'perem'}]
    

});     
   */

/*   sat_store.load(function(records, operation, success) {
    console.log('loaded records');
});*/
          


//for (var i = 0; i < 12; i++) {
  console.log(sat_store.getAt(1).data.perem);
    

     return sat_store.getAt(1).data.perem;
//}
    



      //return sat_store.getAt(0);
    },

     

});

 



/*
var stp = new Ext.data.JsonStore({
  autoLoad: true,
  autoSync: true,
  storeId: 'MonitStore',
  model: 'MonitModel',
  proxy: {
    delay: 400,
        type: 'ajax',
 
        url: '../../web/Monitoringdb.php',
        reader: {
            type: 'json',
            rootProperty: 'satinfo'
        }
    },
});*/




var sat_store = new Ext.data.JsonStore({
  autoLoad: true,
  autoSync: true,
  storeId: 'MonitStore',
  model: 'MonitModel',
  proxy: {
        type: 'ajax',
 
        url: '../../web/Monitoringdb.php',
        reader: {
            type: 'json',
            rootProperty: 'satinfo'
        }
    },
});






Ext.define('ExtTest.view.main.Monitoring', {
    extend: 'Ext.grid.Panel',



    xtype: 'mainmonit',
 title: 'Мониторинг',
    id: 'mygrid',
    store: 'MonitStore',
       columns: [
        { text: 'ID', dataIndex: 'id', align: 'left', flex: 1 },
        { text: 'Номенклатура',  dataIndex: 'name', align: 'left',flex: 1 },
         { text: 'Период',  dataIndex: 'period', align: 'left',flex: 1 },
        { text: 'Статус', dataIndex: 'status', align: 'left',flex: 1 },
        { text: 'Обозначение', dataIndex: 'int_designator', align: 'left',flex: 1 },
        { text: 'Меняется', dataIndex: 'perem', align: 'left',flex: 1 }
    ],

 
    listeners: {
        //select: 'onItemSelected'
   },

 });
 //Ext.getCmp('MonitStore').getStore().load();
/*console.log(grid.getStore('MonitStore'));
Ext.getStore('MonitStore').load();*/

//Ext.grid.Panel.getView().refresh();
//Ext.getCmp('mygrid').getView().refresh();
