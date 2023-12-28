function projectsPage(onMainPage) {
    var newLocation = "html/projects_page.html";
    if (!onMainPage){
        newLocation = "../" + newLocation;
    }
    window.location.href = newLocation;
}
function blogsMainPage(onMainPage) {
    var newLocation = "html/blog_main_page.html";
    if (!onMainPage){
        newLocation = "../" + newLocation;
    }
    window.location.href = newLocation;
}
function homePage(onMainPage) {
    var newLocation = "index.html";
    if (!onMainPage){
        newLocation = "../" + newLocation;
    }
    window.location.href = newLocation;
}
function projectWebsite() {
    window.open("https://github.com/AmberLynnR33/ambear-website")
}
function projectDeerhacks2023(){
    window.open("https://github.com/AmberLynnR33/Deerhack2023")
}
function githubLink() {
    window.open("https://github.com/AmberLynnR33")
}
function blogTemplate() {
    window.location.href = "./all_blogs/blog_template.html"
}
