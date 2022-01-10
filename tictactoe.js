var width=getWidth();
var height=getHeight();

function start(){
	
	var rect=newRectangle(width,10);
	rect.setPosition(0,height/3);
	rect.setColor(Color.black);
	add(rect);
	var rect2=newRectangle(width,10);
	rect.setPosition(0,(height/3)*2;
	rect.setColor(Color.black);
	add(rect2);
	var rect3=newRectangle(10,height);
	rect.setPosition(width/3,0);
	rect.setColor(Color.black);
	add(rect3);
	var rect4=newRectangle(10,height);
	rect.setPosition((width/3)*2,0);
	rect.setColor(Color.black);
	add(rect4);
}