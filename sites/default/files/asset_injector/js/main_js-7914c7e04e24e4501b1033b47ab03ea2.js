$=jQuery;
var ingredients = $('.wrapper-ingredient');
var nb_ing = ingredients.length;
$('#selector-nb-plus').click(function(){
  var nb_pers = parseInt($('#nb_personne').html());
  $('#nb_personne').html(nb_pers+1);
  nb_pers++;
  for(var i =0;i<nb_ing;i++){
    console.log("nb_pers="+nb_pers);
    var qpp = parseFloat($('#ing-qte-'+i).attr('data-qpp'));
    console.log(qpp);
    var newval = nb_pers*qpp;
    console.log(newval);
    $('#ing-qte-'+i).html(newval);
  }
});
$('#selector-nb-moins').click(function(){
  var nb_pers = parseInt($('#nb_personne').html());
  if (nb_pers > 1){
    $('#nb_personne').html(nb_pers-1);
    nb_pers--;
    for(var i =0;i<nb_ing;i++){
      console.log("nb_pers="+nb_pers);
      var qpp = parseFloat($('#ing-qte-'+i).attr('data-qpp'));
      console.log(qpp);
      var newval = nb_pers*qpp;
      console.log(newval);
      $('#ing-qte-'+i).html(newval);
    } 
  }
});