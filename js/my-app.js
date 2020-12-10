// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Coffee Shop',
	dialog: {
		title: 'Coffee Shop',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;


var notificationOrden = myApp.notification.create({
  icon: '<span class="material-icons">shopping_basket</span> ',
  title: 'Orden de Compra',
  titleRightText: '',
  subtitle: '',
  text: 'Su orden ha sido recibida.',
  closeTimeout: 3000,
});



$$(document).on('click','#btnComprar', function (e) {
	myApp.dialog.alert('Tu compra fue realizada correctamente !');
	notificationOrden.open();
});




