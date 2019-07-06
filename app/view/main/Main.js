/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtTest.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    id : 'bigPannel',


    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ExtTest.view.main.MainController',
        'ExtTest.view.main.MainModel',
        'ExtTest.view.main.Profile',
        'ExtTest.view.main.Account',
        'ExtTest.view.main.Monitoring',
        'ExtTest.view.main.Grid',
        'ExtTest.view.main.Chart',
        'ExtTest.view.main.Start'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Главная',
        iconCls: 'fa-home',
        items: [{
            xtype: 'spreadsheet-checked',
        }]
    }, {
        title: 'База спутников',
        iconCls: 'fa-desktop',
        items: [{
            xtype: 'rtgrid',
        }]
    }, {
        title: 'Мониторинг',
        iconCls: 'fa-rocket',
        items: [{
            xtype: 'line-real-time',
        }]
    }, {
        title: 'Пользователи',
        iconCls: 'fa-users',
        items: [{
            xtype: 'mainusers',
            margin: '0 0 10 0'
        }],
    }, {
        title: 'Ваш профиль',
        iconCls: 'fa-user',
        items: [{
            xtype: 'mainaccount',
            margin: '0 0 10 0'
        },
              {
                xtype: 'button',
                text: 'Выход',
                width: 100,
                height: 30,
                margin: '0 0 0 0',
                listeners: {click: 'onClickButton'}
              }]
      /*  buttons: [{
            text: 'Exit',
            formBind: true,
            listeners: {
                click: 'onClickButton'
            }

        }]*/
    },
        ], 
});

 