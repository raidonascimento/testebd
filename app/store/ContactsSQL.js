Ext.define('teste15.store.ContactsSQL', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql',
	'Ext.util.Filter'
    ],
    config: {
	autoLoad: true,
	model: 'teste15.model.Contacts',
	storeId: 'clientesStore',
	
	proxy: {
	    type: 'sql',
	    database: 'teste',
	    table: 'contatos'
	}
    }
});

