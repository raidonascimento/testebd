
Ext.application({
     name: 'teste15',

     controllers: ['Main'],
     stores: ['Contacts', 'ContactsSQL', 'Users'],
     
     models: ['Contacts'],
     views: ['View'],

      launch: function() {

         Ext.Viewport.add({
             xtype: 'contactlist'
         });

     }
});



/*


Ext.Loader.setConfig({
    enabled:true
});


Ext.application({
    
    
        requires: [
        'Ext.data.Store',
        'Ext.List',
        'Ext.field.Search',
        'Ext.Toolbar',
        'Ext.Panel'
    ],
    
    name: 'teste15',
    views:[],
    models:[],
    controllers:[
	'Main'
    ],
    stores:[],
    
    viewport:{
	layout:{
	    type:'card',
	    animation:{
		type:'slide',
		duration: 300
	    }
	
	
	
	
	
	
	
	
    },
    launch: function (){
	Ext.Viewport.add(Ext.create('teste15.view.painel1'));
	Ext.Viewport.add(Ext.create('teste15.view.painel2'));

	
;
	
}
    

});

*/