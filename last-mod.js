/////////////////////////////////////////////////////////////////////////////
//  SECTION THAT FORMATS THE DATE FOR LAST MODIFIED
/////////////////////////////////////////////////////////////////////////////

function initArray() {  
	this.length = initArray.arguments.length      
        for (var i = 0; i < this.length; i++)      
                this[i+1] = initArray.arguments[i]   
}   
var DOWArray = new initArray("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");   
var MOYArray = new initArray("January","February","March","April","May","June","July","August","September","October","November","December");   
var LastModDate = new Date(document.lastModified);   
document.write("<CENTER><FONT FACE='Arial,Helvetica'><FONT SIZE=2>")
document.write("Last updated on ");   
document.write(MOYArray[(LastModDate.getMonth()+1)]," ");   
document.write(LastModDate.getDate());

if (LastModDate.getYear() < 50) {
	document.write(", ",(LastModDate.getYear() + 2000));
}
if ((LastModDate.getYear() > 50) && (LastModDate.getYear() < 150)) {
	document.write(", ",(LastModDate.getYear() + 1900));
}
if (LastModDate.getYear() > 1900) {
	document.write(", ",(LastModDate.getYear()));
}
document.write("</font></font></CENTER>");