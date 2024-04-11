$(document).ready(function(){
    $('#Seccion_inicio').carousel({
      interval: 2000
    });
  });

$(document).ready(function(){
    $('#btnenviar').click(function() {
        alert("Tu mensaje será respondido en breve");
    });
});

$(document).ready(function(){
  $('#github').tooltip({
      title: 'GitHub',
      placement: 'left'
  });

  $('#linkedin').tooltip({
      title: 'LinkedIn',
      placement: 'bottom'
  });

  $('#twitter').tooltip({
    title: 'Twitter',
    placement: 'top'
  });

  $('#facebook').tooltip({
    title: 'Facebook',
    placement: 'right'
  });
});