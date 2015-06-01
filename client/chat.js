
  Meteor.subscribe('mensajes')
  Template.chat.helpers({
    mensajes: function () {
      return Mensajes.find({}, { sort: { fecha: 1 } }) //el 1 representa "ascendente" (javascript events) *los datos de mozilla son los mejores
    }
  })

	Template.chat.events({
  'submit': function (event) {
    event.preventDefault()

    var $mensaje = $('#mensaje')
		var texto    = $mensaje.val().trim()

    if (texto)
      Mensajes.insert({ texto: texto, fecha: new Date })

    $mensaje.val('').focus()
  }
	})

	Template.mensaje.helpers({ // "helpers"cosas que yo quiero leer
    fecha: function () {
      return moment(this.fecha).format('LT')
    }
  })



