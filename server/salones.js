		Meteor.publish('salones', function () {
				if (this.userId)
					return Salones.find()
				else
					return []
			})

			Salones.allow({
				insert: function (userId, doc) {
					return !! userId
				}
			})

			Meteor.startup(function () {  //se ejecuta cada vez que cambia el codigo
				if (Salones.find().count() === 0)
					Salones.insert({ nombre: 'Principal' })
			})

