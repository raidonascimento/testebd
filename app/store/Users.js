Ext.define('teste15.store.Users', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql',
	'Ext.util.Filter'
    ],
    config: {
	autoLoad: true,
	model: 'teste15.model.Contacts',
	storeId: 'Users',
	
	proxy: {
	    type: 'sql',
	    database: 'Users',
	    table: 'Users'
	}
    }
});

