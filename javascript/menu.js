var productMenu = new ypSlideOutMenu("products", "down", 0, 0, 200,200);
var companyMenu = new ypSlideOutMenu("company", "down", 0, 0, 300,200);
var servicesMenu = new ypSlideOutMenu("services", "down", 0, 0, 222,200);

//var researchdivMenu = new ypSlideOutMenu("meddiv", "right",170,64,140, 150,"productdiv")
ypSlideOutMenu.writeCSS();

/*//MENU OPTIONS

// the number you pass to initLeft doesn't matter since it will get
// changed onactivate

var productMenu = new ypSlideOutMenu("product", "down", 0, 0, 210,200)

//var dvrMenu = new ypSlideOutMenu("dvrs", "right", -1000, 153, 180, 82, "products")

//var monitorMenu = new ypSlideOutMenu("monitors", "right", -1000, 193, 180, 82, "products")
 
// for each menu, we set up hte onactivate event to call repositionMenu with the amount offset from center, in pixels

	productMenu.onactivate = function() { repositionMenu(productMenu,-402); }


//dvrMenu.onactivate = function() { repositionMenu(dvrMenu, -110); }

//monitorMenu.onactivate = function() { repositionMenu(monitorMenu, -110); }

// this function repositions a menu to the speicified offset from center
function repositionMenu(menu, offset)
{
	var browser= navigator.appName;
	
	// the new left position should be the center of the window + the offset
	var newLeft = getWindowWidth() / 2 + offset;
	if(browser=='Netscape'){
		newLeft = newLeft-11;
		menu.container.style ? menu.container.style.left = newLeft + "px" : menu.container.left = newLeft;
	}
	if(browser=="Microsoft Internet Explorer"){
	// setting the left position in netscape is a little different than IE
		menu.container.style ? menu.container.style.left = newLeft + "px" : menu.container.left = newLeft;
	}
}
 
// this function calculates the window's width - different for IE and netscape
function getWindowWidth()
{
	return window.innerWidth ? window.innerWidth : document.body.offsetWidth;
}

//-->*/