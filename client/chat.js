
  
	var mensajesSub = Meteor.subscribe('mensajes')
	var salonesSub  = Meteor.subscribe('salones')

	//accountsUIBootstrap3.setLanguage('es')// SI LO DESCOMENTO NO ME MUESTRA LOS MENSAJES

	Template.chat.helpers({
  listo: function () {
    return mensajesSub.ready() && salonesSub.ready()
  }
	})







/*


	Template.pruebaContexto.helpers({
	externa: function() {
			return { texto: 'Hola' }
	},
  usuario: function () {
    return { nombre: 'Prueba' }
  }
})

	Template.pruebaSesion.helpers({  
  count: function () {
    return Session.get('contador') //se avisa con este metodo que la funcion, en este caso 'count', puede cambiar de valor, para refrezcarlo.
																	// Session es la conexion que existe entre el usuario y el servidor (es global, usarla con cuidado principalmente para no pisar variables locales)
  }
	})

*/
	



