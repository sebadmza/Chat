
	Session.set('salonSeleccionado', 'Principal')

	Template.salon.helpers({
		activo: function () {
		  return Session.equals('salonSeleccionado', this.nombre) && 'active'  //devuelve false de la primer expresion o 'active' ya que la cadena es siempre true 
																																					 //por lo tanto la expresion && devuelve el ultimo valor de las comprobaciones si es que todo es verdadero.
		}
	})



	Template.salon.events({
		'click a': function (event) {
		  event.preventDefault()

		  Session.set('salonSeleccionado', this.nombre)
		}
	})



	Template.salones.helpers({
		salones: function () {
		  return Salones.find({}, { sort: { nombre: 1 } })
		}
	})

