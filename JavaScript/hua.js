
var dbody=document.getElementById('test');

objAddEvent(document,'DOMMouseScroll', function(e){return mouse_scroll(e);})


objAddEvent(document,'mousewheel', function(e){return mouse_scroll(e);})


objAddEvent(dbody,'mousewheel', function(e){return mouse_scroll(e);})
function mouse_scroll(e){
    e=e || window.event;
    var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
    var move_s=delD>0?-50:50;
    document.documentElement.scrollLeft+=move_s;

    if(document.documentElement.scrollLeft==0)document.body.scrollLeft+=move_s;

    return false;
}

function objAddEvent(oEle, sEventName, fnHandler)
{
    if(oEle.attachEvent) oEle.attachEvent('on'+sEventName, fnHandler);
    else oEle.addEventListener(sEventName, fnHandler, false);
}