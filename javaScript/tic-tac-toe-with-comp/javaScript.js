let text = 0;
let places = ['#one', '#two', '#three', '#four', '#five', '#six', '#seven', '#eight', '#nine'];
let matrix = {};
$('td').on('click', (y) => {
	let className = y.currentTarget.id;
	if (!$('#' + className).html()) {
		if (text === 0) {
			text = 1;
			$('#' + className).html('<i class="fas fa-circle"></i>')
			$('h3').html('Computer\'s Turn');
			matrix['#' + className] = 'o';
			computerTurn();
		}
	}
	if (checkWinner()) {
		if (text === 0) {
			$('.winner').html('Cumputer Won');
			$('h3').html('Cumputer Won');
		} else {
			$('.winner').html('You Won');
			$('h3').html('You Won');
		}
		$('.pyro').removeClass('hidden');
		$('.winner').addClass('showwinner');
	}
});

$('h2').on('click', (y) => {
	$('#one').html('');
	$('#two').html('');
	$('#three').html('');
	$('#four').html('');
	$('#five').html('');
	$('#six').html('');
	$('#seven').html('');
	$('#eight').html('');
	$('#nine').html('');
	text = 0;
	$('.winner').html('');
	$('.winner').removeClass('showwinner');
	$('.pyro').addClass('hidden');
	$('h3').html('Your Turn');
	matrix = {};
});

checkWinner = (x) => {
	let won = 0;
	if ($('#one').html() && $('#two').html() && $('#three').html() && $('#one').html() === $('#two').html() && $('#two').html() === $('#three').html()) {
		won = 1;
	} else if ($('#one').html() && $('#four').html() && $('#seven').html() && $('#one').html() === $('#four').html() && $('#seven').html() === $('#four').html()) {
		won = 1;
	} else if ($('#one').html() && $('#five').html() && $('#nine').html() && $('#one').html() === $('#five').html() && $('#nine').html() === $('#five').html()) {
		won = 1;
	} else if ($('#four').html() && $('#five').html() && $('#six').html() && $('#four').html() === $('#five').html() && $('#six').html() === $('#four').html()) {
		won = 1;
	} else if ($('#seven').html() && $('#eight').html() && $('#nine').html() && $('#seven').html() === $('#eight').html() && $('#nine').html() === $('#seven').html()) {
		won = 1;
	} else if ($('#five').html() && $('#two').html() && $('#eight').html() && $('#two').html() === $('#five').html() && $('#eight').html() === $('#two').html()) {
		won = 1;
	} else if ($('#six').html() && $('#nine').html() && $('#three').html() && $('#three').html() === $('#six').html() && $('#nine').html() === $('#three').html()) {
		won = 1;
	} else if ($('#five').html() && $('#seven').html() && $('#three').html() && $('#three').html() === $('#five').html() && $('#seven').html() === $('#three').html()) {
		won = 1;
	}
	return won;
}

checkWinnerWithMatrex = (x) => {
	let won = 0;
	if (x['#one'] && x['#two'] && x['#three'] && x['#one'] === x['#two'] && x['#two'] === x['#three']) {
		won = x['#one'];
	} else if (x['#one'] && x['#four'] && x['#seven'] && x['#one'] === x['#four'] && x['#seven'] === x['#four']) {
		won = x['#one'];
	} else if (x['#one'] && x['#five'] && x['#nine'] && x['#one'] === x['#five'] && x['#nine'] === x['#five']) {
		won = x['#one'];
	} else if (x['#four'] && x['#five'] && x['#six'] && x['#four'] === x['#five'] && x['#six'] === x['#four']) {
		won = x['#four'];
	} else if (x['#seven'] && x['#eight'] && x['#nine'] && x['#seven'] === x['#eight'] && x['#nine'] === x['#seven']) {
		won = x['#seven'];
	} else if (x['#five'] && x['#two'] && x['#eight'] && x['#two'] === x['#five'] && x['#eight'] === x['#two']) {
		won = x['#five'];
	} else if (x['#six'] && x['#nine'] && x['#three'] && x['#three'] === x['#six'] && x['#nine'] === x['#three']) {
		won = x['#six'];
	} else if (x['#five'] && x['#seven'] && x['#three'] && x['#three'] === x['#five'] && x['#seven'] === x['#three']) {
		won = x['#five'];
	}
	return won;
}

getBoardState = (currentState, playerTurn, place) => {
	currentState[place] = playerTurn;
	return currentState;
}

algo = (state, playerTurn, level) => {

	if (checkWinnerWithMatrex(state)) {
		return checkWinnerWithMatrex(state) === 'x' ? 1 : -1;
	}
	const movesResult = [];
	let placesleftnew = [];
	let optimalMove = playerTurn === 'x' ? -Infinity : Infinity;
	places.forEach(item => {
		if (!(item in state)) {
			placesleftnew.push(item);
		}
	});

	if (!placesleftnew.length) {
		return 0;
	}
	placesleftnew.forEach(element => {
		let newState = JSON.parse(JSON.stringify(state));
		newState = getBoardState(newState, playerTurn, element);
		const currentTurn = playerTurn === 'o' ? 'x' : 'o';
		const bstmove = algo(newState, currentTurn, false);
		if (playerTurn === 'x') {
			optimalMove = Math.max(optimalMove, bstmove);
		} else {
			optimalMove = Math.min(optimalMove, bstmove);
		}
		movesResult.push({
			index: element,
			result: bstmove
		});
	});
	if (level) {
		return movesResult;
	}
	return optimalMove;
}

computerTurn = () => {
	let state = JSON.parse(JSON.stringify(matrix));

	const result = algo(JSON.parse(JSON.stringify(state)), 'x', true);
	if (result) {
		let winIndex = result[0];
		result.forEach(index => {
			if (index['result'] > winIndex['result']) {
				winIndex = index;
			}
		});
		text = 0;
		matrix[winIndex['index']] = 'x';
		$(winIndex['index']).html('<i class="fas fa-times"></i>');
		$('h3').html('Your Turn');
	} else {
		$('h3').html('Match Draw');
		$('.winner').addClass('showwinner');
		$('.winner').html('Match Draw');
	}

}
