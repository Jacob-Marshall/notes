var startCode = ("")
var myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
myWindow.document.write(startCode);   // Text in the new window
myWindow.opener.document.write("<p>This is the source window!</p>");  // Text in the window that created the new window
