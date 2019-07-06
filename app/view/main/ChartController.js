var userFromStore =  Ext.create('Ext.data.JsonStore', {
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


 
 


Ext.define('ExtTest.view.main.ChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.realtimechartcontroller',

    onTimeChartRendered: function (chart) {
        chart.getStore().removeAll();
        this.addNewTimeData();
        this.timeChartTask = Ext.TaskManager.start({
            run: this.addNewTimeData,
            interval: 1000,
            repeat: 480,
            scope: this
        });
    },


    onNumberChartRendered: function (chart) {
        chart.getStore().removeAll();
        this.addNewNumberData();
        this.numberChartTask = Ext.TaskManager.start({
            run: this.addNewNumberData,
            interval: 1000,
            repeat: 480,
            scope: this
        });
    },

 

    onDownloadH: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookupReference('number-chart');

        if (Ext.os.is.Desktop) {
            chart.download({
                filename: 'SatPosH'
            });
        } else {
            chart.preview();
        }
    },

    onDownloadS: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookupReference('time-chart');

        if (Ext.os.is.Desktop) {
            chart.download({
                filename: 'SatPosS'
            });
        } else {
            chart.preview();
        }
    },


    onPreviewH: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookupReference('number-chart');
        chart.preview();
    },

       onPreviewS: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookupReference('time-chart');
        chart.preview();
    },


    onZoomUndoH: function() {
        var chart = this.lookupReference('number-chart'),
            interaction = chart && Ext.ComponentQuery.query('interaction', chart)[0],
            undoButton = interaction && interaction.getUndoButton(),
            handler = undoButton && undoButton.handler;
        if (handler) {
            handler();
        }
    },

    onZoomUndoS: function() {
        var chart = this.lookupReference('time-chart'),
            interaction = chart && Ext.ComponentQuery.query('interaction', chart)[0],
            undoButton = interaction && interaction.getUndoButton(),
            handler = undoButton && undoButton.handler;
        if (handler) {
            handler();
        }
    },


    onAxisLabelRender: function (axis, label, layoutContext) { // only render interger values
        return Math.abs(layoutContext.renderer(label) % 1) < 1e-5 ? Math.round(label) : '';
    },

  /*  onTimeChartDestroy: function () {
        if (this.timeChartTask) {
            Ext.TaskManager.stop(this.timeChartTask);
        }
    },*/



















    onNumberChartDestroy: function () {
        if (this.numberChartTask) {
            Ext.TaskManager.stop(this.numberChartTask);
        }
    },


    addNewNumberData: function() {
        var me = this,
        chart = this.lookupReference('number-chart'),
            store = chart.getStore(),
            count = store.getCount(),

            xAxis = chart.getAxes()[1],
            visibleRange = 10000,
            second = 1000,
            minY = 0,
            maxY = 3500,
            deltaY = 5,
            xValue, lastRecord;
        console.log(count);

        let tarr = [];
        tarr = this.getNextValueAltitude3((minY + maxY) / 2, minY, maxY);
        console.log(tarr);



         
        if (count > 0) {
            lastRecord = store.getAt(count - 1);
            xValue = lastRecord.get('xValue') + second;

            if (xValue - me.startTime > visibleRange) {
               me.startTime = xValue - visibleRange;
                xAxis.setMinimum(this.startTime);
                xAxis.setMaximum(xValue);
            }
            store.add({
                xValue: xValue,
                metric0: tarr[0],
                metric1: tarr[1],
                metric2: tarr[2],
                metric3: tarr[3],
                metric4: tarr[4]
            });
         } else {
            chart.animationSuspended = true;
             me.startTime = Math.floor(Ext.Date.now() / second) * second;

 


            xAxis.setMinimum(me.startTime);
            xAxis.setMaximum(me.startTime + visibleRange);



            store.add({
                xValue: this.startTime,
                metric0: tarr[0],
                metric1: tarr[1],
                metric2: tarr[2],
                metric3: tarr[3],
                metric4: tarr[4]
            });
            chart.animationSuspended = false;
         }
    },

    getNextValueAltitude3: function (previousValue, min, max, delta) {
 
 

    userFromStore.load();
    var zcounter = userFromStore.getCount();
    console.log(Ext.getStore('altitStore').data.items.length);

    var choosenlnght = Ext.getStore('altitStore').data.items[12].data.lngth;

 

    choosen0 = Ext.getStore('altitStore').data.items[12].data.key0;
    choosen1 = Ext.getStore('altitStore').data.items[12].data.key1;
    choosen2 = Ext.getStore('altitStore').data.items[12].data.key2;
    choosen3 = Ext.getStore('altitStore').data.items[12].data.key3;
    choosen4 = Ext.getStore('altitStore').data.items[12].data.key4;
     




var role0 = Ext.getStore('altitStore').data.items[choosen0-1].data.altitude0;
var role1 = Ext.getStore('altitStore').data.items[choosen1-1].data.altitude0;
var role2 = Ext.getStore('altitStore').data.items[choosen2-1].data.altitude0;
var role3 = Ext.getStore('altitStore').data.items[choosen3-1].data.altitude0;
var role4 = Ext.getStore('altitStore').data.items[choosen4-1].data.altitude0;


     var roleexit = [];
     
     



if (role0 != 0) {
        roleexit.push(role0);
}

if (role1 != 0) {
        roleexit.push(role1);
}

if (role2 != 0) {
        roleexit.push(role2);
}

if (role3 != 0) {
        roleexit.push(role3);
}

if (role4 != 0) {
        roleexit.push(role4);
}


 
    return roleexit;

    },











































    addNewTimeData: function() {
        console.log("asdasdasdasda")
     var me = this,
     chart = this.lookupReference('time-chart'),
            store = chart.getStore(),
            count = store.getCount(),
            xAxis = chart.getAxes()[1],
            visibleRange = 10000,
            minY = 0,
            maxY = 100,
            second = 1000,
            deltaY = 5,
            xValue, lastRecord;

             let tarr = [];
        tarr = this.getNextValueSpeed3((minY + maxY) / 2, minY, maxY);
        console.log(tarr);

          if (count > 0) {
            lastRecord = store.getAt(count - 1);
            xValue = lastRecord.get('xValue') + second;

            if (xValue - me.startTime > visibleRange) {
               me.startTime = xValue - visibleRange;
                xAxis.setMinimum(this.startTime);
                xAxis.setMaximum(xValue);
            }
            store.add({
                xValue: xValue,
                metric5: tarr[0],
                metric6: tarr[1],
                metric7: tarr[2],
                metric8: tarr[3],
                metric9: tarr[4]
            });

        } else {
            chart.animationSuspended = true;
            me.startTime = Math.floor(Ext.Date.now() / second) * second;
            xAxis.setMinimum(me.startTime);
            xAxis.setMaximum(me.startTime + visibleRange);

            store.add({
                xValue: this.startTime,
                metric5: tarr[0],
                metric6: tarr[1],
                metric7: tarr[2],
                metric8: tarr[3],
                metric9: tarr[4]
            });
            chart.animationSuspended = false;
        }
    },

 



     getNextValueSpeed3: function (previousValue, min, max, delta) {
 


userFromStore.load();
 
console.log();
var zcounter = userFromStore.getCount();
console.log(zcounter);


    choosen0 = Ext.getStore('altitStore').data.items[12].data.key0;
    choosen1 = Ext.getStore('altitStore').data.items[12].data.key1;
    choosen2 = Ext.getStore('altitStore').data.items[12].data.key2;
    choosen3 = Ext.getStore('altitStore').data.items[12].data.key3;
    choosen4 = Ext.getStore('altitStore').data.items[12].data.key4;
     




var role0 = Ext.getStore('altitStore').data.items[choosen0-1].data.speed0;
var role1 = Ext.getStore('altitStore').data.items[choosen1-1].data.speed0;
var role2 = Ext.getStore('altitStore').data.items[choosen2-1].data.speed0;
var role3 = Ext.getStore('altitStore').data.items[choosen3-1].data.speed0;
var role4 = Ext.getStore('altitStore').data.items[choosen4-1].data.speed0;


     var roleexit0 = [];
     
     



if (role0 != 0) {
        roleexit0.push(role0);
}

if (role1 != 0) {
        roleexit0.push(role1);
}

if (role2 != 0) {
        roleexit0.push(role2);
}

if (role3 != 0) {
        roleexit0.push(role3);
}

if (role4 != 0) {
        roleexit0.push(role4);
}


 
    return roleexit0;

    },


 






















    onTabChange: function (tabPanel, newCard, oldCard) {
        if (newCard.getItemId() === 'numeric') {
            Ext.TaskManager.stop(this.timeChartTask);
            Ext.TaskManager.start(this.numberChartTask);
        } else {
            Ext.TaskManager.stop(this.numberChartTask);
            Ext.TaskManager.start(this.timeChartTask);
        }
    },


    onToggleMarkers1: function () {
        var chart = this.lookup('time-chart'),
            seriesList = chart.getSeries(),
            ln = seriesList.length,
            i = 0,
            series;

        for (; i < ln; i++) {
            series = seriesList[i];
            series.setShowMarkers(!series.getShowMarkers());
        }

        chart.redraw();
    },

    onToggleMarkers2: function () {
        var chart = this.lookup('number-chart'),
            seriesList = chart.getSeries(),
            ln = seriesList.length,
            i = 0,
            series;

        for (; i < ln; i++) {
            series = seriesList[i];
            series.setShowMarkers(!series.getShowMarkers());
        }

        chart.redraw();
    },

     onSeriesTooltipRender: function (tooltip, record, item) {
        
/*          var dt =  new Date(); 
*/          var title = item.series.getTitle();
 
 
/*Ext.Date.format(dt, 'h:i:s')*/
 
        tooltip.setHtml(title + ' on ' + new Date(record.get('xValue')) + ': ' +
            record.get(item.series.getYField()));

/* tooltip.setHtml(title + ' on ' + Ext.Date.format(dt, 'G:i:s') + ': ' +
            record.get(item.series.getYField()));*/


         }


  

});


