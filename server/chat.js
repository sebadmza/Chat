
Meteor.publish('mensajes', function () {

    if (this.userId) //comprueba que el usuario este logueado
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
