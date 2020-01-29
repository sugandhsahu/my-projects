
var text = 0;

$('td').on('click', (y) => {
    var className = y.currentTarget.id;
    if (!$('#' + className).html()) {
        if (text === 0) {
            text = 1;
            $('#' + className).html('<i class="fas fa-circle"></i>')
        } else {
            text = 0;
            $('#' + className).html('<i class="fas fa-times"></i>')
        }
    }
    if (checkWinner()) {
        if (text === 0) {
            $('.winner').html('X wins');
        } else {
            $('.winner').html('O wins');
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
});

checkWinner = (x) => {
    var won = 0;
    if( $('#one').html() && $('#two').html() && $('#three').html() && $('#one').html() === $('#two').html() && $('#two').html() === $('#three').html()) {
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