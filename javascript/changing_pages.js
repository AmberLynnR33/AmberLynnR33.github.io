function projectsPage() {
    var newLocation = "html/projects_page.html";
    window.location.href = newLocation;
}
function blogsMainPage() {
    var newLocation = "html/blog_main_page.html";
    window.location.href = newLocation;
}
function homePage() {
    var newLocation = "../index.html";
    window.location.href = newLocation;
}
function projectWebsite() {
    window.open("https://github.com/AmberLynnR33/ambear-website");
}
function projectDeerhacks2023(){
    window.open("https://github.com/AmberLynnR33/Deerhack2023");
}
function githubLink() {
    window.open("https://github.com/AmberLynnR33");
}
function blogTemplate() {
    window.location.href = "./all_blogs/blog_template.html"
}



var blog_to_ind = document.getElementById('ind_from_blog');
blog_to_ind.onclick = homePage

