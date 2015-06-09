

	Template.mensajes.helpers({  // "helpers"cosas que yo quiero leer
		mensajes: function () {
		  var selector = { salon: Session.get('salonSeleccionado') }
		  return Mensajes.find(selector, { sort: { fecha: 1 } })
		},
		
		fecha: function () {
		   return moment(this.fecha).format(ll)
		 }

	})



	Template.mensajes.events({  //el 1 representa "ascendente" (javascript events) *los datos de mozilla son los mejores
  'submit': function (event) {
    event.preventDefault()

    var $mensaje = $('#mensaje')
    var texto    = $mensaje.val().trim()
    var usuario  = Meteor.user()

    if (texto)
      Mensajes.insert({
        texto:   texto,
        fecha:   new Date,
        usuario: usuario.profile.name,
        salon:   Session.get('salonSeleccionado')
      })

    $mensaje.val('').focus()
  }
	})



	Template.mensaje.helpers({  // "helpers"cosas que yo quiero leer
		
		fecha: function () {
		   return moment(this.fecha).format('LT')
		 }

	})



