var startCode = ("")
var myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
myWindow.document.write(startCode);   // Text in the new window
myWindow.opener.document.write("<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script type="text/javascript">
    function newNote() {var note = prompt("Enter your note")
    var myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
    myWindow.document.write(note);   // Text in the new window
  }
</script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Online sticky notes! No software required!">
    <meta charset="utf-8">
    <title>Sticky notes | Jacob Marshall</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="github.com/jacob-marshall">Jacob Marshall</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="jacob-marshall.github.io/jacob-marshall/index.html">Home </a>
      <a class="nav-item nav-link" href="index.html">Sticky notes</a>
      <a class="nav-item nav-link" href="jacob-marshall.github.io/document.write/home.html" tabindex="-1" aria-disabled="false">document.write</a>
      <a class="nav-item nav-link" href="github.com/jacob-marshall">Github</a>
      <a class="nav-item nav-link" href="anchor.fm/tech-tree">Tech tree</a>
    </div>
  </div>
</nav>
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success</strong> Note created! Why not <a href="#" class="alert-link" onclick="newNote();">make another</a>.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<br></br>
<div class="container" align="centre">
  <img src="carbon.png" alt="Code">
</div>
<div class="jumbotron">
  <h1 class="display-4">Sticky notes</h1>
  <p class="lead">Never forget</p>
  <hr class="my-4">
  <p><strong>WebNote</strong></p>
  <p>Sticky notes uses javascript to make a new window with your note in. You can even code in the note box to make a website as your note!</p>
  <a class="btn btn-primary btn-lg" onclick="newNote();" role="button">Make a note</a>
  <div style="display: none;">
    <hr class="my-4">
    <p><strong>Bookmarklet</strong></p>
    <p>Drag the bookmarklet onto your bookmarks bar and click on it to make a note where ever you are on the web!</p>
    <a href="javascript:(function()%7Bvar%20note%20%3D%20prompt(%22Enter%20your%20note%22)var%20myWindow%20%3D%20window.open(%22%22%2C%20%22myWindow%22%2C%20%22width%3D200%2Cheight%3D100%22)%3BmyWindow.document.write(note)%7D)()" class="btn btn-primary btn-lg">Make a note</a>
  </div>
</div>
  </body>
</html>
>");  // Text in the window that created the new window
