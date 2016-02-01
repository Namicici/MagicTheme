$(function(){var savedTheme=JSON.parse(localStorage.getItem('pages_theme'));if(savedTheme){$('.btn-toggle-theme').removeClass('active');$('.btn-toggle-theme[data-action="'+ savedTheme.name+'"]').addClass('active');$('.main-stylesheet').attr('href',savedTheme.stylesheet);}
var changeTheme=function(name){if(name==null){$('.main-stylesheet').attr('href','pages/css/pages.css');var obj=JSON.stringify({stylesheet:'pages/css/pages.css',name:"default"});localStorage.setItem('pages_theme',obj);return;}
$('.main-stylesheet').attr('href','pages/css/themes/'+ name+'.min.css');var obj=JSON.stringify({stylesheet:'pages/css/themes/'+ name+'.min.css',name:name});localStorage.setItem('pages_theme',obj);}
$('.btn-toggle-theme').click(function(){$('.btn-toggle-theme').removeClass('active');var action=$(this).attr('data-action');$(this).addClass('active');switch(action){case'default':changeTheme();break;case'corporate':changeTheme('corporate');break;case'retro':changeTheme('retro');break;case'unlax':changeTheme('unlax');break;case'vibes':changeTheme('vibes');break;case'abstract':changeTheme('abstract');break;}});});