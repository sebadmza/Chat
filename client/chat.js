
  Meteor.subscribe('mensajes')
	//accountsUIBootstrap3.setLanguage('es')// SI LO DESCOMENTO NO ME MUESTRA LOS MENSAJES

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
		var usuario = Meteor.user()

    if (texto)
      Mensajes.insert({ 

				texto: texto, 
				fecha: new Date,
				usuario: usuario.profile.name

		 })

    $mensaje.val('').focus()
  }
	})

	Template.mensaje.helpers({ // "helpers"cosas que yo quiero leer
    fecha: function () {
      return moment(this.fecha).format('LT')
    }
  })



