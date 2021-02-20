var xdis, ydis;
var average;
function applyForce(sprite, pullbackx, pullbacky){
	xdis = sprite.x - pullbackx;
	ydis = sprite.y - pullbacky;
	average = xdis/ydis;
	while(sprite.x != xdis && sprite.y != ydis){sprite.y = sprite.y + 1;
	sprite.x = sprite.x + average;}
}