<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset='utf-8' name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Demo Home Page</title>
    <link href="Home.css" rel="stylesheet" type="text/css" />
</head>

<body>

    <div class="pad">

        <form id="form1" runat="server">
            
            <div class="header">
                <ul class="master_navigation">
                    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
                    <li><a href="statistics/" target="_blank">Statistics</a></li>
                    <li><a href="source/" target="_blank">Source</a></li>
                    <li><a href="search/" target="_blank">Search</a></li>
                    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
                    <li><a href="textview/" target="_blank">TextView</a></li>
                    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
                    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
                    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
                    <li><a href="blog/" target="_blank">Blog</a></li>
                    <li><a href="story/index.htm?../story.txt" target="_blank">Experiments</a></li>
                    <li><a href="https://github.com/kethamakka/CS5610-vijayk" target="_blank">GitHub</a></li>
                    <li><a href="https://github.com/kethamakka/CS5610-vijayk/tree/master/essential/project" target="_blank">Project</a></li>
                </ul>
            </div>
            
            <div class="about-me">
                <div class="col-1">
                    <h2>Vijaya Saradhi Kethamakka</h2>
                    <p>I am a Master's student in <a href="http://www.ccs.neu.edu/">Computer Science</a>, at <a href="http://www.northeastern.edu/">Northeastern University</a>, Boston. I started my school at Northeastern in Fall 2014. I did my undergraduation from Jawaharlal Nehru Technological University, India. After my bachelor's degree, I workd as a software developer in Social Computers, Hyderabad. This website is being developed as a part of the course Web Development, being taught by Prof. Richard Rasala and Prof. Jose Annunziato. The course gave a great opportunity to learn very new and exciting technologies like MEAN web stack. HTML, CSS, Bootstrap, jQuery, AngularJS, NodeJS, MongoDB and ASP.net are some of the key features of this course. The final project is being developed using MEAN web stack under the supervision of Prof. Jose Annunziato.</p>
                </div>
                <div class="col-2">
                    <img src="Vijaya Saradhi Kethamakka.JPG" alt="Vijaya Saradhi Kethamakka">
                </div>
            </div>

            <div class="small-about-me">
                <div class="col-2">
                    <img src="Vijaya Saradhi Kethamakka.JPG" alt="Vijaya Saradhi Kethamakka">
                </div>
                <div class="col-1">
                    <h2>Vijaya Saradhi Kethamakka</h2>
                    <p>I am a Master's student in <a href="http://www.ccs.neu.edu/">Computer Science</a>, at <a href="http://www.northeastern.edu/">Northeastern University</a>, Boston. I started my school at Northeastern in Fall 2014. I did my undergraduation from Jawaharlal Nehru Technological University, India. After my bachelor's degree, I workd as a software developer in Social Computers, Hyderabad. This website is being developed as a part of the course Web Development, being taught by Prof. Richard Rasala and Prof. Jose Annunziato. The course gave a great opportunity to learn very new and exciting technologies like MEAN web stack. HTML, CSS, Bootstrap, jQuery, AngularJS, NodeJS, MongoDB and ASP.net are some of the key features of this course. The final project is being developed using MEAN web stack under the supervision of Prof. Jose Annunziato.</p>
                </div>
            </div>

            <hr />
            <div class="components">
                <div class="experiments" style="text-align:center;">
                    <span><a class="a" href="http://localhost:52569/story/index.htm?../story.txt"><b class="a">Experiments</b></a></span>
                </div>
                <div class="project" style="text-align:center; ">
                    <span><a class="a" href="https://www.youtube.com/watch?v=4pgiqEA9gTA"><b class="a">Project</b></a></span>
                </div>
                <div class="documentation" style="text-align:center; ">
                    <span><a href="story/index.htm?../Documentation/story.txt"><b class="a">Documentation</b></a></span>
                </div>
                <div style="clear:both"></div>
            </div>
            <div class="footer" style="text-align:center; clear:both">
                
            </div>



        </form>

    </div>

</body>
</html>
