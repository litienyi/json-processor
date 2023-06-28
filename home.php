<!DOCTYPE html>
<html>  
<head>  
    <title>Project 2 Website</title>

    <!--Google Fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet">  
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600;700&display=swap" rel="stylesheet">

    <!--CSS stylesheet-->
    <link rel="stylesheet" href="homeStyle.css">

    <!--jQuery import-->
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
</head>  


<body>
    <!--div to contain everything, imposes height limit to page-->
    <div class="big-container">
        <!--1st Strip-->
        <div class="ct-container">
            <p class="corner-text ct-left">Easy CrossRef Query</p><p class="corner-text ct-right" style="text-align: right;">A Pilot Digital Humanities by Tien Yi Li</p>
        </div>

        <!--2nd Strip: Main Body, search bar etc.-->
        <div class="vertical-stack">
            <div class="query-container">
                <form action="Results.html" method="GET"> 
                    <input type="text" class="search-bar" name="userQuery" id="userQuery" placeholder="Search within CrossRef"/>
                    <button type="submit" id="query-button">Submit query</button>
                </form>
            </div>
            <div class="query-container">
                <p style="align-self: flex-start">Not sure what to input? Check out the CrossRef's official <a href="https://search.crossref.org/help/search" target="_blank">Search help</a></p>
            </div>
        </div>
        <!--3rd Strip-->
        <div class="ct-container" >
            <p class="corner-text ct-left">
                <?php include "about-project-label.txt" ?><br>
                <?php include "about-project-body.txt" ?>
            </p>
            <p class="corner-text ct-right">
                <?php include "about-me-label.txt" ?><br>
                <?php include "about-me-body.txt" ?><br><br>
                <?php include "contact-label.txt" ?><br>
                <?php include "contact-body.txt" ?><br>
            </p>
        </div>
    </div>
</body>