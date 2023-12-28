function homePage() {
    var newLocation = "../index.html";
    window.location.href = newLocation;
}
function projectsPage() {
    var newLocation = "projects_page.html";
    window.location.href = newLocation;
}

var to_ind = document.getElementById('ind_from_blog');
to_ind.onclick = homePage;

var to_proj = document.getElementById('proj_from_blog');
to_proj.onclick = projectsPage;