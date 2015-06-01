
Meteor.publish('mensajes', function () {
    return Mensajes.find()
  })

