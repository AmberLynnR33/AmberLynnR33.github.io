function projectsPage() {
    var newLocation = "html/projects_page.html";
    window.location.href = newLocation;
}
function blogsMainPage() {
    var newLocation = "html/blog_main_page.html";
    window.location.href = newLocation;
}

var to_proj = document.getElementById('proj_from_ind');
to_proj.onclick = projectsPage;

var to_blog = document.getElementById('blog_from_ind');
to_blog.onclick = blogsMainPage;