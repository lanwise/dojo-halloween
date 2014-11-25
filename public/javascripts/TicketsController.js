function TicketsController($scope, $http) {

	function Ticket() {
		this.nome = '';
		this.telefone = '';
	}


	$scope.ticket = new Ticket();

	$scope.tickets = [];

	$http.get('/tickets').success(function(retorno) {
		$scope.tickets = retorno.tickets;
	});

	$scope.adicionaTickets = function() {
		$http.post('/ticket', $scope.ticket).success(function() {
			$scope.tickets.push($scope.ticket);
			$scope.ticket = new Ticket();
		});
	}	
}