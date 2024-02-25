function homePage() {
    var newLocation = "../../index.html";
    window.location.href = newLocation;
}
function projectsPage() {
    var newLocation = "../../html/projects_page.html";
    window.location.href = newLocation;
}
function blogsMainPage() {
    var newLocation = "../../html/blog_main_page.html";
    window.location.href = newLocation;
}

var to_home = document.getElementById('blog_to_home');
to_home.onclick = homePage;

var to_proj = document.getElementById('blog_to_proj');
to_proj.onclick = projectsPage;

var to_blog = document.getElementById('blog_to_blog_main');
to_blog.onclick = blogsMainPage;