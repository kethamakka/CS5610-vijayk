<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset='utf-8' />

    <title>Demo Home Page</title>


    <style type="text/css">
        ul.master_navigation {
            font-size: 100%;
            font-weight: bold;
            text-align: center;
            list-style: none;
            margin: 0.5em 0;
            padding: 0;
        }

            ul.master_navigation li {
                display: inline-block;
                padding: 0 0.5%;
            }

        a {
            color: #08f;
            font-weight: bold;
            text-decoration: none;
        }

            a:visited {
                color: #88f;
            }

            a:hover {
                color: #f00;
            }

        p {
            text-align: justify;
        }
    </style>

    <style type="text/css" media="screen">
        body {
            width: 900px;
            max-width: 100%;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        .pad {
            padding: 10px;
        }
    </style>

</head>

<body align="center">

    <div class="pad" align="center">

        <form id="form1" runat="server">

            <div>

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
                    <li><a href="experiments/index.html" target="_blank">Experiments</a></li>
                </ul>

                <hr />

                <div align="center">
                    <img src="Vijaya Saradhi Kethamakka.JPG" alt="Vijaya Saradhi Kethamakka" width="168" height="288">
                    <h2>Vijaya Saradhi Kethamakka</h2>
                    I am a Master's student of <a href="http://www.ccs.neu.edu/">Computer Science</a>, at <a href="http://www.northeastern.edu/">Northeastern University</a>
                </div>

                <hr />


            </div>

        </form>

    </div>

</body>
</html>
