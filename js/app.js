// Hello! We're here to help and serve you. (:
$(document).ready(function () {
  var telefones = [
    'Motorola X',
    'iPhone 5S'
  ];

  var $lista = $('#lista-dinamica');

  for(var i = 0; i < telefones.length; i++) {
    var nomeDoTelefone = telefones[i];
    var blocoHtml = '<div class="col-sm-4 borda-vermelha"><b>'
                        + nomeDoTelefone + '</b></div>';

    $lista.append(blocoHtml);
  }

});
