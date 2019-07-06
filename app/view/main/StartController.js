Ext.define('ExtTest.view.main.StartController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.spreadsheet',

    formatDays: function (value) {
        return (value === 1) ? '1 day' : (value + ' days');
    },

    getSelectionModel: function () {
        var grid = this.getView();
        return grid.getSelectionModel();
    },

    onRefresh: function () {
        var grid = this.getView();
        grid.store.reload();
    },

 nameSorter: function (rec1, rec2) {
        // Sort prioritizing surname over forename as would be expected.
        var rec1Name = rec1.get('surname') + rec1.get('forename'),
            rec2Name = rec2.get('surname') + rec2.get('forename');

        if (rec1Name > rec2Name) {
            return 1;
        }
        if (rec1Name < rec2Name) {
            return -1;
        }
        return 0;
    },
 
	
	onNameFilterKeyup: function() {
        var grid = this.getView(),
            // Access the field using its "reference" property name.
            filterField = this.lookupReference('nameFilterField'),
            filters = grid.store.getFilters();

        if (filterField.value) {
            this.nameFilter = filters.add({
                id            : 'nameFilter',
                property      : 'name',
                value         : filterField.value,
                anyMatch      : true,
                caseSensitive : false
            });
        } else if (this.nameFilter) {
            filters.remove(this.nameFilter);
            this.nameFilter = null;
        }
    },
	
    onSelectionChange: function (grid, selection) {
        var status = this.lookupReference('status'),
            message = '??',
            firstRowIndex,
            firstColumnIndex,
            lastRowIndex,
            lastColumnIndex;

        if (!selection) {
            message = 'No selection';
        }
        else if (selection.isCells) {
            firstRowIndex = selection.getFirstRowIndex();
            firstColumnIndex = selection.getFirstColumnIndex();
            lastRowIndex = selection.getLastRowIndex();
            lastColumnIndex = selection.getLastColumnIndex();

            message = 'Selected cells: ' + (lastColumnIndex - firstColumnIndex + 1) + 'x' + (lastRowIndex - firstRowIndex + 1) +
                ' at (' + firstColumnIndex + ',' + firstRowIndex + ')';
        }
        else if (selection.isRows) {
            message = 'Selected rows: ' + selection.getCount();
            console.log(selection.selectedRecords.items.length);//кол-во строк
                        console.log(selection.selectedRecords.items[0].data.id);//кол-во строк

        }
        else if (selection.isColumns) {
            message = 'Selected columns: ' + selection.getCount();
        }

        status.update(message);
    
    },

    toggleRowSelect: function(button, pressed) {
        var sel = this.getSelectionModel();
        sel.setRowSelect(pressed);
    },

    toggleCellSelect: function(button, pressed) {
        var sel = this.getSelectionModel();
        sel.setCellSelect(pressed);
    },

    toggleColumnSelect: function(button, pressed) {
        var sel = this.getSelectionModel();
        sel.setColumnSelect(pressed);
    },

    SelectConfirm: function(grid, selection) {
        var ChoosenID = {};
        var dfdf = this.getView();
        var selectionModel= dfdf.getSelectionModel(), record;
        record = selectionModel.getSelection();
        lgth = record.length;

           if (lgth > 5) {
            Ext.Msg.alert('Ошибка', 'Выбранное количество спутников не должно превышать 5.');
        }

        else {

        for (i = 0; i < lgth; i++) {
            record[i].data.id;
            val = 'key'+i;
            console.log(val);
            ChoosenID[val] = record[i].data.id;
            console.log(record[i].data.id);
        }
        

        //console.log("CONFIRMED");
console.log(ChoosenID);
console.log(ChoosenID.key0);
console.log(ChoosenID.key1);
 //console.log(user);

Ext.Ajax.request({
            //type: 'POST',
            url: '../../../web/try.php',
            params: {number0: ChoosenID.key0,
                     number1: ChoosenID.key1, 
                     number2: ChoosenID.key2,
                     number3: ChoosenID.key3,
                     number4: ChoosenID.key4,
                     sgnl: 1
                    },
    /*        success: function () {              
                store.commitChanges();
            }*/
        });

Ext.Ajax.request({
            //type: 'POST',
            url: '../../../web/perem.php',
            params: {number0: ChoosenID.key0,
                     number1: ChoosenID.key1, 
                     number2: ChoosenID.key2,
                     number3: ChoosenID.key3,
                     number4: ChoosenID.key4,
                     sgnl: 1
                    },
    /*        success: function () {              
                store.commitChanges();
            }*/
        });

}

    }
});


