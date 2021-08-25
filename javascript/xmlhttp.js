// global flag
var isIE = false;
 
// global request and XML document objects
var req;
var container;

 
// retrieve XML document (reusable generic function);
// parameter is URL string (relative or complete) to
// an .xml file whose Content-Type is a valid XML
// type, such as text/xml; XML source must be from
// same domain as HTML file
function loadDoc2(url,frm ) 
{
//alert('HI');	
//alert(cnt);
    // branch for native XMLHttpRequest object
if(frm == ''){
		
    if (window.XMLHttpRequest) 
	{
        req = new XMLHttpRequest();
        req.onreadystatechange = process;
		  req.open("GET", url, true);
			req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
			var pstr;
			//pstr=get_elements(frm);
			//alert(pstr);
			req.send('NULL');
    // branch for IE/Windows ActiveX version
    } else if (window.ActiveXObject) 
	{
        isIE = true;
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) 
		{
            req.onreadystatechange = process;
            req.open("GET", url, true);
			req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
			var pstr;
			//pstr=get_elements(frm);
			//alert(pstr);
			req.send('NULL');
			
//       req.send();
        }
    }
}
else{
	
	if (window.XMLHttpRequest) 
	{
        req = new XMLHttpRequest();
        req.onreadystatechange = process;
		  req.open("POST", url, true);
			req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
			var pstr;
			pstr=get_elements(frm);
			//alert(pstr);
			req.send(pstr);
    // branch for IE/Windows ActiveX version
    } else if (window.ActiveXObject) 
	{
        isIE = true;
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) 
		{
            req.onreadystatechange = process;
			req.open("POST", url, true);
			req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
			var pstr;
			pstr=get_elements(frm);
			//alert(pstr);
			req.send(pstr);
			
//       req.send();
        	}
   		 }
	
	}

}
// handle onreadystatechange event of req object--ny

function process() {
    // only if req shows "loaded"
	//alert("hi");
    if (req.readyState == 4) 
	{
		
        // only if "OK"
		
	    if (req.status == 200) 
		{
	      //  alert("process complete");
			//document.write(req.responseText);
			var Rd = req.responseText;
			//document.getElementById(container).style.display='block';
			
			//document.getElementById(container).innerHTML =  Rd;
		 } else {
            alert("There was a problem retrieving the data:\n" + req.statusText);
         }
    }else{
		 //alert("process");
		//document.getElementById(container).style.display='none';
	}
	
}



// gets all the elements from the certain form---ny
	function get_elements(frm)
	{
		var str;
		str="";
			with (eval("document."+frm)) 
			{
			
				for (var i=0; i < elements.length; i++)
				{
					str+="&"+elements[i].name+"="+elements[i].value;
			    }
			}
		return str.substr(1);			
	}


