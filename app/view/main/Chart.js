Ext.define('ExtTest.view.main.Chart', {
    extend: 'Ext.tab.Panel',
    xtype: 'line-real-time',
    layout: 'fit',

    requires:[
        'ExtTest.view.main.ChartController',
        //'Ext.chart.AbstractChart'\
        'Ext.chart.*',
         'Ext.chart.CartesianChart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Time',
        'Ext.chart.interactions.CrossZoom'
    ],

    controller: 'realtimechartcontroller',

    title: 'Мониторинг',

    frame: true,

    height: window.innerHeight - (36+36),

 

items: [{
        title: 'Высота/Время',
        itemId: 'numeric',
        layout: 'fit',
        items: {
            xtype: 'cartesian',
            reference: 'number-chart',
            insetPadding: '40 40 20 20',
            width: '100%',
            height: 500,
             legend: {
            type: 'sprite',
            docked: 'right'
        },
            store: Ext.create('Ext.data.JsonStore', {
                fields: ['yValue', 'xValue']
            }),
             interactions: {
            type: 'crosszoom',
            zoomOnPanGesture: false
        },
            axes: [{
                type: 'numeric',
                minimum: 0,
                maximum: 5000,
                grid: true,
                position: 'left',
                title: 'Высота (км)'
            }, {
               type: 'time',
            dateFormat: 'G:i:s',
            segmenter: {
                type: 'time',
                step: {
                    unit: Ext.Date.SECOND,
                    step: 1
                }
            },
            label: {
                fontSize: 10
            },
                grid: true,
                position: 'bottom',
                title: 'Время (сек)',
                fields: ['xValue'],
                majorTickSteps: 10,
                style: {
                    textPadding: 0
                },
                /*renderer: 'onAxisLabelRender'*/
            }],

             tbar: [
        '->',
        {
            text: 'Уменьшить',
            handler: 'onZoomUndoH'
        },

        {
                text: 'Просмотреть',
                handler: 'onPreviewH'
        },

        {
            text: Ext.os.is.Desktop ? 'Скачать' : 'Просмотреть',
            handler: 'onDownloadH'
        },

        {
            text: 'Скрыть маркеры',
            handler: 'onToggleMarkers2'
        },

    ],

            series: [{
                type: 'line',
                title: 'Спутник № n1',
                label: {
                    display: 'rotate',
                    field: 'yValue',
                },
                marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
                style: {
                    lineWidth: 4,
                    miterLimit: 0,
                    //fillStyle: '#115fa6',
                //strokeStyle: '#6400A1',
                //fillOpacity: 0.1,
                 lineCap: 'miter'
                },
                xField: 'xValue',
                yField: 'metric0',
                tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender',
            }
            },

            {
                type: 'line',
                title: 'Спутник № n2',
                label: {
                    display: 'rotate',
                    field: 'yValue',
                },
                marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
                style: {
                    lineWidth: 4,
                    miterLimit: 0,
                    //fillStyle: '#358F04',
                //strokeStyle: '#6400A1',
                //fillOpacity: 0.5,
                 lineCap: 'miter'
                },
                xField: 'xValue',
                yField: 'metric1',
                tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
            },

            {
                type: 'line',
                title: 'Спутник № n3',
                label: {
                    display: 'rotate',
                    field: 'yValue',
                },
                marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
                style: {
                    lineWidth: 4,
                    miterLimit: 0,
                    //fillStyle: '#358F04',
                //strokeStyle: '#6400A1',
                //fillOpacity: 0.5,
                 lineCap: 'miter'
                },
                xField: 'xValue',
                yField: 'metric2',
                tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
            },

            {
                type: 'line',
                title: 'Спутник № n4',
                label: {
                    display: 'rotate',
                    field: 'yValue',
                },
                marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
                style: {
                    lineWidth: 4,
                    miterLimit: 0,
                    //fillStyle: '#358F04',
                //strokeStyle: '#6400A1',
                //fillOpacity: 0.5,
                 lineCap: 'miter'
                },
                xField: 'xValue',
                yField: 'metric3',
                tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
            },

            {
                type: 'line',
                title: 'Спутник № n5',
                label: {
                    display: 'rotate',
                    field: 'yValue',
                },
                marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
                style: {
                    lineWidth: 4,
                    miterLimit: 0,
                    //fillStyle: '#358F04',
                //strokeStyle: '#6400A1',
                //fillOpacity: 0.5,
                 lineCap: 'miter'
                },
                xField: 'xValue',
                yField: 'metric4',
                tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
            }],
            listeners: {
                afterrender: 'onNumberChartRendered',
                //destroy: 'onNumberChartDestroy'
            }
        }
    },
    {
    title: 'Скорость/Время',
    layout: 'fit',
    items: {
        xtype: 'cartesian',
        reference: 'time-chart',
        insetPadding: '40 40 20 20',
        width: '100%',
        height: 500,
        legend: {
            type: 'sprite',
            docked: 'right'
        },
        store: Ext.create('Ext.data.JsonStore', {
            fields: ['yValue', 'xValue']
        }),

        interactions: {
            type: 'crosszoom',
            zoomOnPanGesture: false
        },


        axes: [{
            type: 'numeric',
            minimum: 0,
            maximum: 15,
            grid: true,
            position: 'left',
            title: 'Скорость (км/ч)'
        }, {
            type: 'time',
            dateFormat: 'G:i:s',
            segmenter: {
                type: 'time',
                step: {
                    unit: Ext.Date.SECOND,
                    step: 1
                }
            },
            label: {
                fontSize: 10
            },
                grid: true,
                position: 'bottom',
                title: 'Время (сек)',
                fields: ['xValue'],
                majorTickSteps: 10,
                style: {
                    textPadding: 0
                },
                /*renderer: 'onAxisLabelRender'*/
            }],

        tbar: [
        '->',
        {
            text: 'Уменьшить',
            handler: 'onZoomUndoS'
        },

        {
                text: 'Просмотреть',
                handler: 'onPreviewS'
        },

        {
            text: Ext.os.is.Desktop ? 'Скачать' : 'Просмотреть',
            handler: 'onDownloadS'
        },

        {
            text: 'Скрыть маркеры',
            handler: 'onToggleMarkers1'
        },

       /* {
            text: 'Toggle markers',
            handler: 'onToggleMarkersS'
        },*/
    ],

        series: [{
            type: 'line',
            title: 'Спутник № n1',
            label: {
                display: 'rotate',
                field: 'yValue'
            },
            marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            style: {
                lineWidth: 4,
                miterLimit: 0
            },
            xField: 'xValue',
            yField: 'metric5',
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        },

        {
            type: 'line',
            title: 'Спутник № n2',
            label: {
                display: 'rotate',
                field: 'yValue'
            },
            marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            style: {
                lineWidth: 4,
                miterLimit: 0
            },
            xField: 'xValue',
            yField: 'metric6',
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        },

        {
            type: 'line',
            title: 'Спутник № n2',
            label: {
                display: 'rotate',
                field: 'yValue'
            },
            marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            style: {
                lineWidth: 4,
                miterLimit: 0
            },
            xField: 'xValue',
            yField: 'metric7',
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        },

        {
            type: 'line',
            title: 'Спутник № n2',
            label: {
                display: 'rotate',
                field: 'yValue'
            },
            marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            style: {
                lineWidth: 4,
                miterLimit: 0
            },
            xField: 'xValue',
            yField: 'metric8',
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        },

        {
            type: 'line',
            title: 'Спутник № n2',
            label: {
                display: 'rotate',
                field: 'yValue'
            },
            marker: {
                radius: 4,
                animation: {
                    duration: 200,
                    easing: 'backOut'
                }
            },
            highlightCfg: {
                scaling: 2
            },
            style: {
                lineWidth: 4,
                miterLimit: 0
            },
            xField: 'xValue',
            yField: 'metric9',
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }],
        listeners: {
            afterrender: 'onTimeChartRendered',
            //destroy: 'onTimeChartDestroy'
        }
    }

}

],

    listeners: {
        tabchange: 'onTabChange'
    }

}

);




 