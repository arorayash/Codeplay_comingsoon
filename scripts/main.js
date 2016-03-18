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
var x_offset = -400;
var y = 0;
var y_offset = -400;

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
				document.getElementById('div'+n).style.top=y+'px'
				document.getElementById('div'+n).style.left=x+'px'
				document.getElementById('div'+n).style.visibility='visible'
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
