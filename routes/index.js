
/*
 * GET home page.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/post');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
	assunto: { type: String, required: true },
	categoria: { type: String, required: true },
	descricao: { type: String, required: true }
});


var Ticket = mongoose.model('ticket', ticketSchema);

var conexoes = 0;

exports.index = function(req, res){
	conexoes++;
	console.log(conexoes);
	res.render('index', { title: 'Express' });
};


exports.adicionaTicket = function(req, res) {
	var ticket = new Ticket(req.body);
	console.log(ticket);
	ticket.save(function(error, ticket) {
		if(error) res.send(500);

		res.send(201);
	});
}

exports.listaTickets = function(req, res) {
	Ticket.find({}, function(error, tickets) {
		if(error) res.send(500);

		res.json({ tickets: tickets });
	});
}