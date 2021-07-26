const EventEmitter = require('events')

const emitter = new EventEmitter()

//emitter.on('any', data => {
//	console.log(data);
//})

//emitter.emit('any', { a: 1 })
//emitter.emit('any', { b: 2 })

//setTimeout(() => {
//	emitter.emit('any', { c: 3 })
//}, 2000)

class Dispatcher extends EventEmitter {
	subscrive(eventName, cb) {
		console.log(cb);
		this.on(eventName, cb)

		dispatch()
	}
}