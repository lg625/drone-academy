/*
 *  This js file contains the html code for the structure of the player page.
 *  This way, any changes to the page structure will automatically be reflected 
 *  in all of the video pages. It also reduces the redundancy of the code.
 *  
 *  Since this is a JavaScript file and not actually html, all of the quotation
 *  marks (") have to be replaced with the respective Java escape key (\").
 * 
 *  Additionally, because the html code is passed through as an argument for the 
 *  document.write() function, each line of the code is placed within its own 
 *  quotations and seperated by a comma. 
 * 
 */

var element = document.getElementById("page-structure");
var description = element.getAttribute("description");
var title = element.getAttribute("title");

document.write(
    "<head>",
        "<meta charset = \"utf-8\">",
        "<meta name = \"viewport\" content = \"width=device-width, initial-scale=1\">",
        "<link rel = \"stylesheet\" href = \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">",
        "<script src = \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>",
        "<link rel = \"stylesheet\" type = \"text/css\" href = \"design.css\">",
        //Font Awesome
        "<script src= \"https://kit.fontawesome.com/bac819c396.js\"></script>",
    "</head>",

    "<body>",
        "<div class = \"container-fluid\">",
            "<div class = \"row d-flex align-items-start\">",
                //Left hand side / content
                "<div class = \"col-md-9 col-sm-12 justify-content-start\">",
                    "<div class = \"content\">",
                        "<!-- Video Player -->",
                        "<div class = \"player-container\">",
                            "<div id=\"player\"></div>",
                        "</div>",

                        "<!-- Tab links -->", 
                        "<div class=\"tab\">",
                            "<button id = \"description-tab\" class=\"tablinks\" onclick=\"tabClick(event, 'description')\">Description</button>",
                            "<button id = \"transcript-tab\" class=\"tablinks\" onclick=\"tabClick(event, 'transcript')\">Transcript</button>",
                            "<button id = \"instructor-tab\" class=\"tablinks\" onclick=\"tabClick(event, 'instructor')\">Instructor Info</button>",
                        "</div>",

                        "<!-- Tab content -->",
                        "<div id=\"description\" class=\"tabcontent\">",
                            "<h4>", title, "</h4>",
                            "<p>", description, "</p>",
                        "</div>",
                        
                        "<div id=\"transcript\" class=\"tabcontent\">",
                            "<h4>Transcript</h4>",
                            "<p>", "</p>", 
                        "</div>",

                        "<div id=\"instructor\" class=\"tabcontent\">",
                            "<h4>Dwight Neptune</h4>",
                            "<p>", "Personal Bio", "</p>", 
                        "</div>",
                    "</div>",
                "</div>",

                //Right hand side / sidebar
                "<div class = \"col-lg-3 col-md-12 sticky-top sidebar d-flex flex-column align-items-end\">",
                    "<div class = \"container-fluid sidebar-content-bar\">",
                        "<div class = \"row course-title\">",
                            "<div class = \"col-12 mt-2 mb-3 d-flex justify-content-center\">",
                                "<h4>Course Name</h4>", 
                            "</div>",
                        "</div>",

                        "<div class = \"row border video-list\">",
                        "<div class=\"col-12\">",
                                "<ul class = \"navbar-nav ml-auto\">",
                                    "<li class = \"nav-item\">",
                                        "<div style = 'display: inline-flex; align-items: center;'>",
                                            "<img style='height:auto; width:20%; vertical-align: middle;' src='video1-thumbnail.jpg'>",                                           
                                            "<a style = 'padding-left:10px' id = \"video1\" class = \"nav-link disabled\" href = \"video1.html\"> Should the Nets Fear Signing Kyrie Without Kevin Durant?<p id = video1-progress>Progress: 0:00 of 7:05</p></a>",
                                        "</div>",
                                    "</li>",
                                    "<li class = \"nav-item\">",
                                        "<div style = 'display: inline-flex; align-items: center;'>",
                                            "<img style='height:auto; width:20%; vertical-align: middle;' src='video2-thumbnail.jpg'>",                                           
                                            "<a style = 'padding-left:10px' id = \"video2\" class = \"nav-link disabled\" href = \"video2.html\"> Te Soñé De Nuevo<p id = video2-progress>Progress: 0:00 of 3:19</p></a>",
                                        "</div>",
                                    "</li>",
                                    "<li class = \"nav-item\">",
                                        "<div style = 'display: inline-flex; align-items: center;'>",
                                            "<img style='height:auto; width:20%; vertical-align: middle;' src='video3-thumbnail.jpg'>",                                           
                                            "<a style = 'padding-left:10px' id = \"video3\" class = \"nav-link disabled\" href = \"video3.html\"> iOS 13 Public Beta: Dark Mode, Apple Maps, Reminders<p id = video3-progress>Progress: 0:00 of 9:05</p></a>",
                                        "</div>",
                                    "</li>",
                                "</ul>",
                            "</div>",	
                        "</div>",

                        "<div class = \"row video-buttons\">",
                            "<div class=\"col-xl-12\">",
                                "<div class = \"row border d-flex align-items-center justify-content-around button-background\">",
                                    "<a id = \"reverse-button\" class = \"col-xs-3 reverse-icon\" href = \"\"><i class = \"fas fa-angle-double-left\"></i></a>",
                                    "<a id = \"play-button\" class = \"col-xs-3 play-icon\" href =\"javascript:\"><i class = \"fas fa-play\"></i></a>",
                                    "<a id = \"pause-button\" class = \"col-xs-3 play-icon\" href =\"javascript:\"><i class = \"fas fa-pause\"></i></a>",
                                    "<a id = \"ff-button\" class = \"col-xs-3 reverse-icon disabled\" href = \"\"><i class = \"fas fa-angle-double-right\"></i></a>",
                                "</div>",
                            "</div>",
                        "</div>",
                    "</div>",
                "</div>",
            "</div>",
        "</div>",
    "</body>"
);

document.write("<script>");

function tabClick(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.write("</script>");