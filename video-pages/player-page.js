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

var description = document.getElementById("page-structure").getAttribute("description");

document.write(
    "<head>",
        "<meta charset = \"utf-8\">",
        "<meta name = \"viewport\" content = \"width=device-width, initial-scale=1\">",
        "<link rel = \"stylesheet\" href = \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">",
        "<script src = \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>",
        "<link rel = \"stylesheet\" type = \"text/css\" href = \"design.css\">",
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

                        //Description
                        "<div class = \"description p-4 border\">",
                            "<h3>Description:</h3>",
                            "<p>" + description + "</p>",
                        "</div>",
                    "</div>",
                "</div>",

                //Right hand side / sidebar
                "<div class = \"col-md-3 col-sm-12 sticky-top sidebar\">",
                    "<p id = \"textLabel\"> Time Elapsed: </p>",
                    "<p id = \"timeLabel\"></p>",
                    "<div>",
                        "<ul class = \"navbar-nav ml-auto\">",
                            "<li class = \"nav-item active\">",
                                "<a id = \"vid1\" class = \"nav-link disabled\" href = \"video1.html\">Video #1</a>",
                            "</li>",
                            "<li class = \"nav-item\">",
                                "<a id = \"vid2\" class = \"nav-link disabled\" href = \"video2.html\">Video #2</a>",
                            "</li>",
                        "</ul>",
                    "</div>",
                "</div>",
            "</div>",
        "</div>",
    "</body>"
);