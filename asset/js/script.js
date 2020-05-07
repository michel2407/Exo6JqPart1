/* On ajout l'évènement mouseover à notre élément à notre id child
Au momeent on passe la souris sur notre élément, on modifie son css pour agrandir sa largeur
'+=50px' : cela veut dire que l'on ajoute 50px à la taille de l'instant T
*/
$(function(){
  $('#chlid').mouseover(function(){
    $('#chlid').css('width', '+=50px');
  });
});
