
canvas = document.getElementById('pane')
cheight = canvas.height
cwidth = canvas.width
c = canvas.getContext('2d')

function c()				{return $("canvas")[0].getContext("2d")}
function clear() {this.c.clearRect(0, 0, this.width, this.height)}
function origin() {return {hx: $("canvas").width()/2, hy: $("canvas").height()/2}}
function grid()
{
	c.strokeStyle = "rgba(0, 0, 255, 1)"
	c.lineWidth = 1
	for (var i = 0; i <= 20; i++)	 {c.beginPath(); c.moveTo(i*50, 0); c.lineTo(i*50, 1000); c.stroke()}
	for (var j = 0; j <= 20; j++)	 {c.beginPath(); c.moveTo(0, j*50); c.lineTo(1000, j*50); c.stroke()}

	c.beginPath()
	c.lineWidth = 4
	c.strokeStyle = "rgba(0, 0, 0, 1)"
	c.moveTo(0, 500)
	c.lineTo(1000, 500)
	c.stroke()

	c.beginPath()
	c.lineWidth = 4
	c.strokeStyle = "rgba(0, 0, 0, 1)"
	c.moveTo(500, 0)
	c.lineTo(500, 1000)
	c.stroke()

	c.strokeStyle = "rgba(0, 0, 0, 1)"
	c.lineWidth = 4
	for (var i = 0; i <= 20; i++)	 {c.beginPath(); c.moveTo(i*50, 490); c.lineTo(i*50, 510); c.stroke()}
	for (var j = 0; j <= 20; j++)	 {c.beginPath(); c.moveTo(490, j*50); c.lineTo(510, j*50); c.stroke()}
}
function redraw(i)
{
	clear()
	draw()
}

function drawline(c, x1, y1, x2, y2, color)
{
	c.beginPath()
	c.moveTo(x1, y1)
	c.lineTo(x2, y2)
	c.fillStyle = color
	c.stroke()
}
function line(m, b, s)
{
	for (var i = -400; i <= 400; i++)
	{
		circle(canvas.width/2+(i*1.25), canvas.height/2-((i*m+b)*1.25), 1, s, s)
	}
}

function piesection(a, b, color)
{
	c.beginPath()
	c.arc(150,150,150,a,b,false)
	c.fillStyle = color
	c.lineTo(150,150)
	c.fill()
}
function circle(x, y, r, w, s, f, l)
{
	c.beginPath()
	c.arc(x, y, r, Math.PI, -Math.PI, false)
	c.lineWidth = w
	if (s != '') {c.strokeStyle = s; c.stroke()}
	if (f != '') {c.fillStyle = f; c.fill()}
	c.closePath()
	if (l != '') {label(l, x, y)}
}

function label(l, x, y)
{
	c.font = "10pt Calibri"
	c.fillStyle = "rgba(0, 0, 0, 1)"
	c.textAlign = "center";
	c.textBaseline = "middle";
	c.fillText(l, x, y)
}

function pretty(x, y)
{
	circle(x-100, y, 100, 5, "", 'rgba(250, 0, 0, 0.5)');
	circle(x, y-100, 100, 5, "", 'rgba(0, 0, 0, 0.5)');
	circle(x, y+100, 100, 5, "", 'rgba(0, 250, 0, 0.5)');
	circle(x+100, y, 100, 5, "", 'rgba(0, 0, 250, 0.5)');
	circle(x-70, y-70, 100, 5, "", 'rgba(250, 0, 250, 0.5)');
	circle(x+70, y+70, 100, 5, "", 'rgba(250, 250, 0, 0.5)');
	circle(x-70, y+70, 100, 5, "", 'rgba(0, 250, 250, 0.5)');
	circle(x+70, y-70, 100, 5, "", 'rgba(250, 250, 250, 0.5)');

	circle(x-100, y, 100, 5, "black");
	circle(x, y-100, 100, 5, "black");
	circle(x, y+100, 100, 5, "black");
	circle(x+100, y, 100, 5, "black");
	circle(x-70, y-70, 100, 5, "black");
	circle(x-70, y+70, 100, 5, "black");
	circle(x+70, y-70, 100, 5, "black");
	circle(x+70, y+70, 100, 5, "black");
}


function rectangle(x, y, dx, dy, s, f, l)
{
	c.beginPath()
	if (s != '')
	{
		c.strokeStyle = s
		c.stroke()
	}
	if (f != '')
	{
		c.fillStyle = f
		c.fill()
	}
	c.fillRect(x, y, dx, dy)
	if (l != '')
	{
		label(l, x, y)
	}
	c.closePath()
}


function square(x, y, e, w, s, f)
{
	if (s == "")
	{
		s = 'rgba(0, 0, 0, 0)'
	}
	c.beginPath()
	c.rect(x, y, e, e)
	c.lineWidth = w
	c.strokeStyle = s
	c.stroke()
	if (f)
	{
		c.fillStyle = f
		c.fillRect(x, y, e, e)
	}
}

function parabola(a, b, c, s)
{
	for (var i = -400; i <= 400; i++)
	{
		x = i*1.25
		y = (((a/8)*Math.pow(i, 2))+(b*i)+c)*1.25
		circle(canvas.width/2+(x), canvas.height/2-(y), 1, s, s)
	}
}

function dot(c)
{
	c.save()
	c.fillStyle = "black"
	c.fillRect(-2, -2, 4, 4)
	// c.fillRect(x-3, y-18, 4, 4)
	c.restore()
}

function bowtied(c)
{
	c.fillRect(25, 25, 100, 100)
	c.clearRect(45, 45, 60, 60)
	c.strokeRect(50, 50, 50, 50)
}
function drawBowties(c)
{
	c.translate(45, 45)

	c.save()
	drawBowtie(c, "red")
	dot(c)
	c.restore()

	c.save()
	c.translate(85, 0)
	c.rotate(45 * Math.PI / 180)
	drawBowtie(c, "green")
	dot(c)
	c.restore()

	c.save()
	c.translate(0, 85)
	c.rotate(135 * Math.PI / 180)
	drawBowtie(c, "blue")
	dot(c)
	c.restore()

	c.save()
	c.translate(85, 85)
	c.rotate(90 * Math.PI / 180)
	drawBowtie(c, "yellow")
	dot(c)
	c.restore()
}
function drawBowtie(c, color)
{
	c.fillStyle = "rgba(200, 200, 200, 0.3)"
	c.fillRect(-30, -30, 60, 60)

	c.fillStyle = color
	c.globalAlpha = 1.0
	c.beginPath()
	c.moveTo(25, 25)
	c.lineTo(-25, -25)
	c.lineTo(25, -25)
	c.lineTo(-25, 25)
	c.closePath()
	c.fill()
}


function roundedRect(x, y, w, h, r)
{
	c.beginPath()
	c.moveTo(x, y+r)
	c.lineTo(x, y+h-r)
	c.quadraticCurveTo(x, y+h, x+r, y+h)
	c.lineTo(x+w-r, y+h)
	c.quadraticCurveTo(x+w, y+h, x+w, y+h-r)
	c.lineTo(x+w, y+r)
	c.quadraticCurveTo(x+w, y, x+w-r, y)
	c.lineTo(x+r, y)
	c.quadraticCurveTo(x, y, x, y+r)
	c.stroke()
}
function smiley(x, y, r)
{

	c.beginPath()
	c.arc(x,y,r/2,0,Math.PI*2,true)			 //	 Outer circle
	c.stroke()
	c.closePath()

	c.beginPath()
	c.arc(x,y+r/10,r/4,0,Math.PI,false)	 //	 Mouth (clockwise)
	c.stroke()
	c.closePath()

	c.beginPath()
	c.arc(x-r/5,y-r/8,r/10,0,Math.PI*2,true)	//	 Left eye
	c.stroke()
	c.closePath()

	c.beginPath()
	c.arc(x+r/5,y-r/8,r/10,0,Math.PI*2,true)	//	 Right eye
	c.stroke()
	c.closePath()
}



function triangle()
{
	c.beginPath()
	c.moveTo(25,25)
	c.lineTo(105,25)
	c.lineTo(25,105)
	c.fill()

	c.beginPath()
	c.moveTo(125,125)
	c.lineTo(125,45)
	c.lineTo(45,125)
	c.closePath()
	c.stroke()
}
function arcs()
{
	for (i = 0; i < 4; i++)
	{
		for(j = 0; j < 3; j++)
		{
			c.beginPath()
			var x					 = 25 + j * 50							 // x coordinate
			var y					 = 25 + i * 50							 // y coordinate
			var r					 = 20												// Arc r
			var startAngle	= 0												 // Starting point on circle
			var endAngle		= Math.PI + (Math.PI*j)/2	 // End point on circle
			var clockwise	 = i % 2 == 0 ? false : true // clockwise or anticlockwise

			c.arc(x, y, r, startAngle, endAngle, clockwise)

			if (i > 1)	{c.fill()}
			else				{c.stroke()}
		}
	}
}
function speechbubble()
{
	c.beginPath()
	c.moveTo(75, 25)
	c.quadraticCurveTo(25, 25, 25, 62.5)
	c.quadraticCurveTo(25, 100, 50, 100)
	c.quadraticCurveTo(50, 120, 30, 125)
	c.quadraticCurveTo(60, 120, 65, 100)
	c.quadraticCurveTo(125, 100, 125, 62.5)
	c.quadraticCurveTo(125, 25, 75, 25)
	c.stroke()
}
function heart()
{
	c.beginPath()
	c.moveTo(75, 40)
	c.bezierCurveTo(75, 37, 70, 25, 50, 25)
	c.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
	c.bezierCurveTo(20, 80, 40, 102, 75, 120)
	c.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
	c.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
	c.bezierCurveTo(85, 25, 75, 37, 75, 40)
	c.fill()
}
function pacman()
{
	roundedRect(c, 12, 12, 150, 150, 15)
	roundedRect(c, 19, 19, 150, 150, 9)
	roundedRect(c, 53, 53, 49, 33, 10)
	roundedRect(c, 53, 119, 49, 16, 6)
	roundedRect(c, 135, 53, 49, 33, 10)
	roundedRect(c, 135, 119, 25, 49, 10)

	// Character 1
	c.beginPath()
	c.arc(37, 37, 13, Math.PI/7, -Math.PI/7, false)
	c.fillStyle = "gold"
	c.lineTo(34, 37)
	c.fill()
	c.fillStyle = "black"

	// blocks
	for(i = 0; i < 8; i++) {c.fillRect(51+i*16, 35, 4, 4)}
	for(i = 0; i < 6; i++) {c.fillRect(115, 51+i*16, 4, 4)}
	for(i = 0; i < 8; i++) {c.fillRect(51+i*16, 99, 4, 4)}

	// character 2
	c.beginPath()
	c.moveTo(83, 116)
	c.lineTo(83, 102)
	c.fillStyle = "green"
	c.bezierCurveTo(83, 94, 89, 88, 97, 88)
	c.bezierCurveTo(105, 88, 111, 94, 111, 102)
	c.lineTo(111, 116)
	c.lineTo(106.333, 111.333)
	c.lineTo(101.666, 116)
	c.lineTo(97, 111.333)
	c.lineTo(92.333, 116)
	c.lineTo(87.666, 111.333)
	c.lineTo(83, 116)
	c.fill()
	c.fillStyle = "white"
	c.beginPath()
	c.moveTo(91, 96)
	c.bezierCurveTo(88, 96, 87, 99, 87, 101)
	c.bezierCurveTo(87, 103, 88, 106, 91, 106)
	c.bezierCurveTo(94, 106, 95, 103, 95, 101)
	c.bezierCurveTo(95, 99, 94, 96, 91, 96)
	c.moveTo(103, 96)
	c.bezierCurveTo(100, 96, 99, 99, 99, 101)
	c.bezierCurveTo(99, 103, 100, 106, 103, 106)
	c.bezierCurveTo(106, 106, 107, 103, 107, 101)
	c.bezierCurveTo(107, 99, 106, 96, 103, 96)
	c.fill()
	c.fillStyle = "blue"
	c.beginPath()
	c.arc(101, 102, 2, 0, Math.PI*2, true)
	c.fill()
	c.beginPath()
	c.arc(89, 102, 2, 0, Math.PI*2, true)
	c.fill()
}



$("#makepiechart").click(function(e)
{
	if ($("#dx").html() != 2)
	{
		return
	}
	$(".popup").remove()
	var popup = $(".visible").append("<div id='piechart' class='popup'></div>")
	pressedP = false
	$("#piechart").css(
	{
		"position":"fixed",
		"left":"150px",
		"top":"150px",
		"width":"320px",
		"height":"320px",
		"z-index":"5",
		"background-color":"black",
		"border":"none"
	}) //"opacity":".5",
	$("#piechart").mousedown(function(e)
	{
		startP = $(this)
		startPX = e.pageX
		startPY = e.pageY
		pressedP = true
	})
	$(document).mousemove(function(e)
	{
		if (pressedP == true)
		{
			startP.css(
			{
				"left": (startPX+(e.pageX-startPX))-($("#piechart").width()/2),
				"top": (startPY+(e.pageY-startPY))-($("#piechart").height()/2)
			})
		}
	})
	$(document).mouseup(function(e)
	{
		pressedP = false
		$("#piechart").css("cursor", "")
	})
	$("#piechart").html("<canvas id='graphcanvas' width='300px' height='300px'></canvas>") //class='control'
	$("#graphcanvas").after("<button id='savegraph'>Save</button><button id='closegraph'>Close</button>")

	var canvas = document.getElementById("graphcanvas")
	var c = canvas.getContext("2d")
	$("#graphcanvas").css(
	{
		"background-color":"white",
		"margin-top":"10px",
		"margin-left":"10px",
	})
	$("#savegraph").click(function()
	{
		window.open(c.canvas.toDataURL('image/png'), '_blank')
	})
	$("#closegraph").click(function()
	{
		$("#piechart").remove()
	})


	var twodarray = []
	for (var j = gety1(); j <= gety2(); j++)
	{
		var row = []
		for (var i = getx1(); i <= getx2(); i++)
		{
			var cell = $(".visible tr").eq(j).children().eq(i).children(".cell")
			if (!cell.hasClass("selected"))
			{
				continue
			}
			if (cell.val() != "")
			{
				row.push(cell.val())
			}
		}
		twodarray.push(row)
	}

	c.beginPath()
	c.arc(150, 150, 150, Math.PI, -Math.PI, false)
	c.stroke()

	var total = 0
	for (i in twodarray)
	{
		total += parseInt(twodarray[i][1])
	}

	var spot = 0
	for (i in twodarray)
	{
		var min = spot
		var max = (((parseInt(twodarray[i][1])/total)*360)*(0.0174532925))+min
		pie_section(c, min, max, random_color())

		var theta = (max - min)/2 + min
		var l = 100
		var bx = 150 + l*Math.cos(theta)
		var by = 150 + l*Math.sin(theta)
		c.fillStyle = "white"
		c.font = "bold 18px sans-serif";
		c.textAlign = "center"
		c.textBaseline = "middle"
		c.fillText(twodarray[i][0], bx, by)

		spot = max
	}
})
$("#makescatterplot").click(function(e)
{
	if ($("#dx").html() != 2) {return}
	$(".popup").remove()
	var popup = $(".visible").append("<div id='scatterplot' class='popup'></div>")
	pressedP = false

	$("#scatterplot").css(
	{
		"position":"fixed",
		"left":"150px",
		"top":"150px",
		"width":"320px",
		"height":"320px",
		"z-index":"5",
		"background-color":"black",
		"border":"none"
	}) //"opacity":".5",
	$("#scatterplot").mousedown(function(e)
	{
		$(this).css("cursor", "move")
		startP = $(this)
		startPX = e.pageX
		startPY = e.pageY
		pressedP = true
	})
	$(document).mousemove(function(e)
	{
		if (pressedP == true)
		{
			startP.css(
			{
				"left": (startPX+(e.pageX-startPX))-($("#scatterplot").width()/2),
				"top":	(startPY+(e.pageY-startPY))-($("#scatterplot").height()/2)
			})
		}
	})
	$(document).mouseup(function(e)
	{
		pressedP = false
		$("#scatterplot").css("cursor", "")
	})
	$("#scatterplot").html("<canvas id='graphcanvas' width='300px' height='300px'></canvas>") //class='control'
	$("#graphcanvas").after("<button id='savegraph'>Save</button><button id='closegraph'>Close</button>")

	var canvas = document.getElementById("graphcanvas")
	var c = canvas.getContext("2d")
	$("#graphcanvas").css(
	{
		"background-color":"white",
		"margin-top":"10px",
		"margin-left":"10px",
	})
	$("#savegraph").click(function()
	{
		window.open(c.canvas.toDataURL('image/png'), '_blank')
	})
	$("#closegraph").click(function()
	{
		$("#scatterplot").remove()
	})
	var twodarray = []
	for (var j = gety1(); j <= gety2(); j++)
	{
		var row = []
		for (var i = getx1(); i <= getx2(); i++)
		{
			var cell = $(".visible tr").eq(j).children().eq(i).children(".cell")
			if (!cell.hasClass("selected"))
			{
				continue
			}
			if (cell.val() != "")
			{
				row.push(cell.val())
			}
		}
		twodarray.push(row)
	}
	var line = least_squares(twodarray)
	var minx = twodarray[0][0]
	var miny = twodarray[0][1]
	var maxx = twodarray[0][0]
	var maxy = twodarray[0][1]
	for (i in twodarray)
	{
		if (parseInt(twodarray[i][0]) < minx)
		{
			minx = twodarray[i][0]
		}
		if (parseInt(twodarray[i][1]) < miny)
		{
			miny = twodarray[i][1]
		}
		if (parseInt(twodarray[i][0]) > maxx)
		{
			maxx = twodarray[i][0]
		}
		if (parseInt(twodarray[i][1]) > maxy)
		{
			maxy = twodarray[i][1]
		}
	}
	c.fillStyle = "black"
	c.textAlign = "center"
	c.textBaseline = "middle"
	c.fillText(minx, 20, 288)
	c.fillText(miny, 12, 280)
	c.fillText(maxx, 280, 288)
	c.fillText(maxy, 12, 20)

	draw_line(c, 15, 20, 20, 20, "black")
	draw_line(c, 20, 20, 20, 285, "black")
	draw_line(c, 15, 280, 280, 280, "black")
	draw_line(c, 280, 280, 280, 285, "black")

	var point1 = []
	var point2 = []
	point1.push(0)
	point1.push(0 * line[1] + line[0])
	point2.push(maxx)
	point2.push(maxx * line[1] + line[0])
	draw_line(c, (280-(point1[0]*260/maxx)), (280-(point1[1]*260/maxy)), (280-(point2[0]*260/maxx)), (280-(point2[1]*260/maxy)), "black")

	for (a in twodarray)
	{
		c.fillRect(280-(twodarray[a][0]*(260/maxx))-2.5, 280-(twodarray[a][1]*(260/maxy))-2.5, 5, 5);
	}
})


$("#popup").click(function(e)
{
	$("#popupbox").remove()
	var popup = $(".visible").append("<div id='popupbox'><div id='expandright'></div></div>")
	pressedP = false
	$("#popupbox").css({"position":"fixed", "left":"150px", "top":"150px", "width":"300px", "height":"300px", "z-index":"5", "background-color":"black", "border":"none"}) //"opacity":".5",
	$("#popupbox").mousedown(function(e)
	{
		$(this).css("cursor", "move")
		startP = $(this)
		startPX = e.pageX
		startPY = e.pageY
		pressedP = true
	})
	$(document).mousemove(function(e) {if (pressedP == true) {startP.css({"left": (startPX+(e.pageX-startPX))-($("#popupbox").width()/2), "top":	(startPY+(e.pageY-startPY))-($("#popupbox").height()/2)})}})
	$(document).mouseup(function(e) {pressedP = false; $("#popupbox").css("cursor", "")})
	$("#popupbox").html("<canvas id='myCanvas' width='280px' height='280px'></canvas><button id='closegraph'>x</button>") //class='control'
	var canvas = document.getElementById("myCanvas")
	$("#myCanvas").css(
	{
		"background-color":"white",
		"margin-top":"10px",
		"margin-left":"10px",
	})
	$("#closegraph").click(function() {$("#popupbox").remove()})
	var c = canvas.getContext("2d")

	c.beginPath();
	c.moveTo(20, 20);
	c.lineTo(20, 260);
	c.fillStyle = "black"
	c.stroke()

	c.beginPath()
	c.moveTo(20, 260)
	c.lineTo(260, 260)
	c.fillStyle = "black"
	c.stroke()

	x1 = getx1()
	y1 = gety1()
	dx = getdx()
	dy = getdy()
	var twodarray = []
	for (var j = y1; j < (dy+y1); j++)
	{
		var row = []
		for (var i = x1; i < (dx+x1); i++)
		{
			var cell = $(".visible tr").eq(j).find(".cell").eq(i)
			row.push(cell.val())
		}
		twodarray.push(row)
	}
	for (a in twodarray)
	{
		c.fillRect(260-twodarray[a][0]*30, 260-twodarray[a][1]*30, 5, 5);
	}
})



function showGraph(graph)
{
	showPopup()
	var gr = ((gety2()-gety1())+1)+":"+graph.substring(0, graph.length-1)
	$("#popupcontents").html("<iframe src= \"http://g.ivank.net/g.html#"+gr+"\" width=\"300\" height=\"300\" style= \"border:none;\"></iframe>")

}
function showPopup()
{
	var popup = $("#contents").append("<div id='popupbox'><div id='popupcontents'></div><div id='expandright'></div></div>")
	$("#popupbox").css(
	{
		"position":"fixed",
		"left":"150px",
		"top":"150px",
		"width":"300px",
		"height":"300px",
		"z-index":"5",
		"opacity":".5",
		"background-color":"black",
		"border":"none"
	})
	$("#expandright").css({"height":"100%", "width":"2px", "float":"right", "cursor":"e-resize"})
	$("#popupcontents").css({"height":"100%", "width":"100%"})
	pressedP = false
	$("#popupbox").mousedown(function(e)
	{
		$(this).css("cursor", "move")
		startP = $(this)
		startPX = e.pageX
		startPY = e.pageY
		pressedP = true
	})
	pressedRPX = false
	$("#expandright").mousedown(function(e)
	{
		startPR = $(this).parent()
		startPWX = startPR.width()
		startPRX = e.pageX
		pressedRPX = true
	})
	$(document).mousemove(function(e)
	{
		if (pressedP == true) {startP.css({"left": (startPX+(e.pageX-startPX))-($("#popupbox").width()/2), "top": (startPY+(e.pageY-startPY))-($("#popupbox").height()/2)})}
		if (pressedRPX == true)
		{
			startPR.width(startPWX+(e.pageX-startPRX))
		}
	})
	$(document).mouseup(function(e)
	{
		pressedP = false
		pressedRPX = false
		$("#popupbox").css("cursor", "")
	})
	$("#popupbox").dblclick(function(){$(this).remove()})
}






// Canvas Prototype (because prototyping has always proven to be such a great idea...)

if (HTMLCanvasElement) {



	var Editr = function (image) {
		var cvs = document.createElement('canvas'), ctx, imgData;
		cvs.setAttribute('width', image.width);
		cvs.setAttribute('height', image.height);
		ctx = cvs.getContext('2d');
		ctx.drawImage(image, 0, 0);
		imgData = ctx.getImageData(0, 0, image.width, image.height);
	ctx.grayScale = function () {
		var px = imgData.data, length = px.length, i, gray;
		for (i = 0; i < length; i += 4) {
			gray = (px[i] + px[i + 1] + px[i + 2]) / 3;
			imgData.data[i] = gray;
			imgData.data[i + 1] = gray;
			imgData.data[i + 2] = gray;
		}
		ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	ctx.sepia = function () {
		var px = imgData.data, length = px.length, i, red, green, blue;
		for (i = 0; i < length; i += 4) {
			red = (px[i] * 0.393) + (px[i + 1] * 0.769) + (px[i + 2] * 0.189);
			green = (px[i] * 0.349) + (px[i + 1] * 0.686) + (px[i + 2] * 0.168);
			blue = (px[i] * 0.272) + (px[i + 1] * 0.534) + (px[i + 2] * 0.131);
			imgData.data[i] = red;
			imgData.data[i + 1] = green;
			imgData.data[i + 2] = blue;
		}
		ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	ctx.invert = function () {
		var px = imgData.data, length = px.length, i;
		for (i = 0; i < length; i += 4) {
			imgData.data[i] = 255 - px[i];
			imgData.data[i + 1] = 255 - px[i + 1];
			imgData.data[i + 2] = 255 - px[i + 2];
		}
		ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	ctx.monoRed = function () {
		var px = imgData.data, length = px.length, i;
		for (i = 0; i < length; i += 4) {
			imgData.data[i + 1] = 0;
			imgData.data[i + 2] = 0;
		}
		ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	ctx.monoGreen = function () {
		var px = imgData.data, length = px.length, i;
		for (i = 0; i < length; i += 4) {
			imgData.data[i] = 0;
			imgData.data[i + 2] = 0;
		}
		ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	ctx.monoBlue = function () {
		var px = imgData.data, length = px.length, i;
		for (i = 0; i < length; i += 4) {
			imgData.data[i] = 0;
			imgData.data[i + 1] = 0;
		}
		ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	ctx.rotate180 = function () {
		var image = document.createElement('img');
		image.setAttribute('src', ctx.canvas.toDataURL('image/png'));
		ctx.translate(image.width-1, image.height-1);
		ctx.rotate(Math.PI);
		ctx.drawImage(image, 0, 0, image.width, image.height);
		return ctx;
	}
	ctx.flipHorizontal = function () {
		var image = document.createElement('img');
		image.setAttribute('src', ctx.canvas.toDataURL('image/png'));
		ctx.translate(image.width, 0);
		ctx.scale(-1, 1);
		ctx.drawImage(image, 0, 0, image.width, image.height);
		return ctx;
	}
	ctx.replace = function () {
		image.setAttribute('src', ctx.canvas.toDataURL('image/png'));
	}
	ctx.dataURL = function () {
		return ctx.canvas.toDataURL('image/png');
	}

	return ctx;
}

function drawImage(opts) {

	if(!opts.canvas) {
		throw("A canvas is required");
	}
	if(!opts.image) {
		throw("Image is required");
	}

    // get the canvas and context
    var canvas = opts.canvas,
    context = canvas.getContext('2d'),
    image = opts.image,

    // now default all the dimension info
    srcx = opts.srcx || 0,
    srcy = opts.srcy || 0,
    srcw = opts.srcw || image.naturalWidth,
    srch = opts.srch || image.naturalHeight,
    desx = opts.desx || srcx,
    desy = opts.desy || srcy,
    desw = opts.desw || srcw,
    desh = opts.desh || srch,
    auto = opts.auto,

    // finally query the various pixel ratios
    devicePixelRatio = window.devicePixelRatio || 1,
    backingStoreRatio = context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1,

    ratio = devicePixelRatio / backingStoreRatio;

    // ensure we have a value set for auto.
    // If auto is set to false then we
    // will simply not upscale the canvas
    // and the default behaviour will be maintained
    if (typeof auto === 'undefined') {
   	auto = true;
    }

    // upscale the canvas if the two ratios don't match
    if (auto && devicePixelRatio !== backingStoreRatio) {

   	var oldWidth = canvas.width;
   	var oldHeight = canvas.height;

   	canvas.width = oldWidth * ratio;
   	canvas.height = oldHeight * ratio;

   	canvas.style.width = oldWidth + 'px';
   	canvas.style.height = oldHeight + 'px';

        // now scale the context to counter
        // the fact that we've manually scaled
        // our canvas element
        context.scale(ratio, ratio);

    }

    context.drawImage(pic, srcx, srcy, srcw, srch, desx, desy, desw, desh);
}
HTMLCanvasElement.prototype.getImageData = function (x, y, width, height) {
	return this.getContext('2d').getImageData(parseFloat(x) || 0, parseFloat(y) || 0, width != null ? parseFloat(width) : this.width, height != null ? parseFloat(height) : this.height);
};

HTMLCanvasElement.prototype.putImageData = function (imageData, x, y, width, height) {
	var canvas = this;

	canvas.width = width != null ? parseFloat(width) : canvas.width;
	canvas.height = height != null ? parseFloat(height) : canvas.height;

	canvas.getContext('2d').putImageData(imageData, parseFloat(x) || 0, parseFloat(y) || 0);

	return canvas;
};

HTMLCanvasElement.prototype.editImageData = function (callback, x, y, width, height) {
	var canvas = this;

	if (typeof callback == 'function') {
		var imageData = canvas.getImageData(x, y, width, height);

		callback.call(canvas, imageData);

		canvas.putImageData(imageData, x, y, width, height);
	}

	return canvas;
};

function getDataUri(url, callback) {
	var image = new Image();

	image.onload = function () {
		var canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

        canvas.getContext('2d').drawImage(this, 0, 0);

        callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
    };

    image.src = url;
}

// // Usage
// getDataUri('/logo.png', function(dataUri) {
//     // Do whatever you'd like with the Data URI!
// });


function RGBToHSL(r, g, b) {
	var
	min = Math.min(r, g, b),
	max = Math.max(r, g, b),
	diff = max - min,
	h = 0, s = 0, l = (min + max) / 2;

	if (diff != 0) {
		s = l < 0.5 ? diff / (max + min) : diff / (2 - max - min);

		h = (r == max ? (g - b) / diff : g == max ? 2 + (b - r) / diff : 4 + (r - g) / diff) * 60;
	}

	return [h, s, l];
}

function HSLToRGB(h, s, l) {
	if (s == 0) {
		return [l, l, l];
	}

	var temp2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
	var temp1 = 2 * l - temp2;

	h /= 360;

	var
	rtemp = (h + 1 / 3) % 1,
	gtemp = h,
	btemp = (h + 2 / 3) % 1,
	rgb = [rtemp, gtemp, btemp],
	i = 0;

	for (; i < 3; ++i) {
		rgb[i] = rgb[i] < 1 / 6 ? temp1 + (temp2 - temp1) * 6 * rgb[i] : rgb[i] < 1 / 2 ? temp2 : rgb[i] < 2 / 3 ? temp1 + (temp2 - temp1) * 6 * (2 / 3 - rgb[i]) : temp1;
	}

	return rgb;
}

HTMLCanvasElement.prototype.getImageData = function (x, y, width, height) {
	return this.getContext('2d').getImageData(parseFloat(x) || 0, parseFloat(y) || 0, width != null ? parseFloat(width) : this.width, height != null ? parseFloat(height) : this.height);
};

HTMLCanvasElement.prototype.putImageData = function (imageData, x, y) {
	return this.getContext('2d').putImageData(imageData, parseFloat(x) || 0, parseFloat(y) || 0) && this;
};

HTMLCanvasElement.prototype.editImageData = function (callback, x, y, width, height) {
	var canvas = this;

	if (typeof callback == 'function') {
		var imageData = canvas.getImageData(x, y, width, height);

		callback.call(canvas, imageData);

		canvas.putImageData(imageData, x, y);
	}

	return canvas;
};

HTMLCanvasElement.prototype.trim = function () {
	var
	canvas = this,
	imageData = canvas.getImageData(),
	width = imageData.width,
	height = imageData.height,
	pixels = width * height,
	canvasPixelArray = imageData.data,
	top = height,
	right = 0,
	bottom = 0,
	left = width,
	i = 1,
	row;

	for (; i < pixels; ++i) {
		if (canvasPixelArray[i * 4 - 1] > 0) {
			row = Math.floor(i / width);

			top = Math.min(top, row);
			right = Math.max(right, (i % width) + 1);
			bottom = Math.max(bottom, row + 1);
			left = Math.min(left, i % width);
		}
	}

	canvas.width = right - left;
	canvas.height = bottom - top;

	canvas.putImageData(imageData, 0 - left, 0 - top);

	return canvas;
};

HTMLCanvasElement.prototype.whiteTransparency = function(feather) {
	feather = parseFloat(feather) || 0;

	return this.editImageData(function (imageData) {
		var
		canvasPixelArray = imageData.data,
		pixels = imageData.width * imageData.height,
		whiteFeather = 255 - feather,
		i = 1,
		minimumRGB;

		for (; i < pixels; ++i) {
			minimumRGB = Math.min(canvasPixelArray[i * 4 - 4], canvasPixelArray[i * 4 - 3], canvasPixelArray[i * 4 - 2]);

			if (minimumRGB >= whiteFeather) {
				canvasPixelArray[i * 4 - 1] = 0 + (255 - minimumRGB);
			}
		}
	});
};

HTMLCanvasElement.prototype.brightness = function (value) {
	value = parseFloat(value) || 0;

	return this.editImageData(function (imageData) {
		var canvasPixelArray = imageData.data;
		var pixels = imageData.width * imageData.height;
		var i = 1;

		for (; i < pixels; ++i) {
			canvasPixelArray[i * 4 - 4] += value;
			canvasPixelArray[i * 4 - 3] += value;
			canvasPixelArray[i * 4 - 2] += value;
		}
	});
};

HTMLCanvasElement.prototype.contrast = function (value) {
	value = (parseFloat(value) || 0) + 1;

	return this.editImageData(function (imageData) {
		var
		canvasPixelArray = imageData.data,
		pixels = imageData.width * imageData.height,
		i = 1,
		r, g, b;

		for (; i < pixels; ++i) {
			r = i * 4 - 4;
			g = i * 4 - 3;
			b = i * 4 - 2;

			canvasPixelArray[r] = ((((canvasPixelArray[r] / 255) - 0.5) * value) + 0.5) * 255;
			canvasPixelArray[g] = ((((canvasPixelArray[g] / 255) - 0.5) * value) + 0.5) * 255;
			canvasPixelArray[b] = ((((canvasPixelArray[b] / 255) - 0.5) * value) + 0.5) * 255;
		}
	});
};

HTMLCanvasElement.prototype.desaturate = function () {
	return this.editImageData(function (imageData) {
		var
		canvasPixelArray = imageData.data,
		pixels = imageData.width * imageData.height,
		i = 1,
		r, g, b;

		for (; i < pixels; ++i) {
			r = i * 4 - 4;
			g = i * 4 - 3;
			b = i * 4 - 2;

			grayscale = canvasPixelArray[r] * 0.3 + canvasPixelArray[g] * 0.59 + canvasPixelArray[b] * 0.11;

			canvasPixelArray[r] = grayscale;
			canvasPixelArray[g] = grayscale;
			canvasPixelArray[b] = grayscale;
		}
	});
};

HTMLCanvasElement.prototype.rotation = function (value) {
	value = parseFloat(value) || 0;

	var
	canvas = this,
	canvasClone = document.createElement('canvas'),
	context = canvas.getContext('2d'),
	width = context.canvas.width,
	height = context.canvas.height;

	canvasClone.width = width;
	canvasClone.height = height;
	canvasClone.getContext('2d').putImageData(context.getImageData(0, 0, width, height), 0, 0);

	canvas.width = width;
	canvas.height = height;

	context.translate(width / 2, canvas.height / 2);
	context.rotate(Math.PI * (value / 180));
	context.translate(-width / 2,- height / 2);

	context.drawImage(canvasClone, 0, 0);

	return canvas;
};

HTMLCanvasElement.prototype.saturation = function (value) {
	value = parseFloat(value) || 0;

	return this.editImageData(function (imageData) {
		var
		canvasPixelArray = imageData.data,
		pixels = imageData.width * imageData.height,
		i = 1,
		r, g, b, hsl, rgb;

		for (; i < pixels; ++i) {
			r = i * 4 - 4;
			g = i * 4 - 3;
			b = i * 4 - 2;

			hsl = RGBToHSL(canvasPixelArray[r] / 255, canvasPixelArray[g] / 255, canvasPixelArray[b] / 255);

			hsl[1] = Math.max(0, hsl[1] + value);

			rgb = HSLToRGB(hsl[0], hsl[1], hsl[2]);

			canvasPixelArray[r] = rgb[0] * 255;
			canvasPixelArray[g] = rgb[1] * 255;
			canvasPixelArray[b] = rgb[2] * 255;
		}
	});
};

}