The main stuff is on a goormIDE server.
<br>
The url is <a href="https://wdb-hhsoj.run-us-west2.goorm.io">here</a>.
<br>
Once my server is running the application service, you can access the web APP.
<br>
This app uses **RESTful** routes, which means as follows
<br>
<!DOCTYPE HTML>
<html>
  <head>
    <style>
      table {margin:auto}
    </style>
  </head>
  <body>
<table border="1" align="center">
  <tr>
    <td>operation</td>
    <td>url</td>
    <td>type</td>
    <td>description</td>
  </tr>             
  <tr>
    <td>index</td>
    <td>/campgrounds or /</td>
    <td>GET</td>
    <td>show the home page</td>
  </tr>            
  <tr>
    <td>new</td>
    <td>/campgrounds/new</td>
    <td>GET</td>
    <td>show the new page</td>
  </tr>             
  <tr>
    <td>create</td>
    <td>/campgrounds</td>
    <td>POST</td>
    <td>create a new campground and add it into the database</td>
  </tr>             
  <tr>
    <td>show</td>
    <td>/campgrounds/:id</td>
    <td>GET</td>
    <td>show a specific campground with id</td>
  </tr>             
  <tr>
    <td>edit</td>
    <td>/campgrounds/:id/edit</td>
    <td>GET</td>
    <td>show the edit page</td>
  </tr>             
  <tr>
    <td>update</td>
    <td>/campgrounds/:id</td>
    <td>PUT</td>
    <td>modify a campground in the database</td>
  </tr>             
  <tr>
    <td>delete</td>
    <td>/campgrounds/:id</td>
    <td>DELETE</td>
    <td>delete a specific campground with id</td>
  </tr>         
</table>
      </body>
    </html>
