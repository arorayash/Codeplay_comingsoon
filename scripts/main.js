/*
$(function () {
  $("li").each(function (i, elt) {
    $(elt).css({
      left: Math.random() * 1000,
      bottom: Math.random() * (400),
    });
  });
});

$('.subscribe').hover(
       function(){ $('#scatter_toggle').removeClass('word_scatter') },
       function(){ $('#scatter_toggle').addClass('word_scatter') }
);
*/

var t0 = new TimelineMax({onComplete:onRepeat})


t0.to(".svg_rotate", .2, {rotation:"+=1",transformOrigin:"50% 50%",scale:1})

function onRepeat() {
  t0.invalidate().restart()
}

function randomScale(type){
  if (type === 'x') {
    return 1.4 // return a randomised X value
  } else {
    return 1.5 // return a randomised Y value
  }
}


/*
Script by Mike McGrath- http://website.lineone.net/~mike_mcgrath
Featured on JavaScript Kit (http://javascriptkit.com)
For this and over 400+ free scripts, visit http://javascriptkit.com
*/

//Updated Feb 20th, 08 by JavaScriptKit.com: Script now compatible in IE7/FF

var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes

var nav = (!document.all || window.opera);
var tmr = null;
var spd = 50;
var x = 0;
var x_offset = -350;
var y = 0;
var y_offset = -350;

document.onmousemove = get_mouse;

function get_mouse(e)
{
  x = (nav) ? e.pageX : event.clientX+standardbody.scrollLeft;
  y = (nav) ? e.pageY : event.clientY+standardbody.scrollTop;
  x += x_offset;
  y += y_offset;
  beam(1);
}

function beam(n)
{
  if(n<5)
  {
				document.getElementById('div'+n).style.top=y+'px';
				document.getElementById('div'+n).style.left=x+'px';
				document.getElementById('div'+n).style.visibility='visible';
    n++;
    tmr=setTimeout("beam("+n+")",spd);
  }
  else
  {
     clearTimeout(tmr);
     fade(4);
  }
}

function fade(n)
{
  if(n>0)
  {
				document.getElementById('div'+n).style.visibility='hidden'
    n--;
    tmr=setTimeout("fade("+n+")",spd);
  }
  else clearTimeout(tmr);
}

//Type.js
$(function(){
    $(".moving_humanity").typed({
      strings: ["HOLDING THE VISION", "MOVING HUMANITY."],
      typeSpeed: 150
    });
});

//Equalizer-toggle
$('.equalizer').click(function(){
  if($('span').hasClass('bar-1'))
    {
      $('.equalizer span').removeClass('bar-1 bar-2 bar-3 bar-4').addClass('equalizer-nopop');
    }
   else
     {
       $('.equalizer span:nth-of-type(1)').addClass('bar-1').removeClass('equalizer-nopop');
       $('.equalizer span:nth-of-type(2)').addClass('bar-2').removeClass('equalizer-nopop');
       $('.equalizer span:nth-of-type(3)').addClass('bar-3').removeClass('equalizer-nopop');
       $('.equalizer span:nth-of-type(4)').addClass('bar-4').removeClass('equalizer-nopop')
     }
});


//Background-music
