
	Meteor.publish('mensajes', function () {

    if (this.userId) //comprueba que el usuario este logueado (porque una cosa es que no se pueda ver los datos en la interfaz y otra que no tenga los datos).
										// con mensajes.find().fetch() se puede verificar que objetos se estan obteniendo del lado del usuario
    	return Mensajes.find()
  	else
    	return []

  })


	Mensajes.allow({

  insert: function (userId, doc) { //doc es la coleccion de elementos que se envian como formulario (usuario,fecha,texto)
		console.log(userId, doc) //muestra en consola los elementos userId y doc
    return !! userId

  }
	})


		





