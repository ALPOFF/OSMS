


Ext.define('ExtTest.view.main.GridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.realtimeGRID',

    init: function(view) {


 var runner = new Ext.util.TaskRunner(),
   updateClock, task;
 

// Start a simple clock task that updates a div once per second
updateClock = function() {
          var store = view.getStore();
        //  console.log(store.data.items);

    store.load();
};

task = runner.start({
    run: updateClock,
    interval: 30000
});

},
 

    onRefresh: function () {
        var grid = this.getView();
        var store = grid.getStore();
        store.load();
    },

 
    
    onStoreLoad: function (store) { 
//this.startTicker(store); 
var xxxx; 
clearInterval(xxxx); 
xxxx = setInterval(function(){ 
store.load(function(records, operation, success) { 
console.log('loaded records') 
}) 
}, 10000);
 },

 
    onTickDelayChange: function (slider, newValue, thumb, type) {
        Ext.view.AbstractView.updateDelay = newValue;
    }
});