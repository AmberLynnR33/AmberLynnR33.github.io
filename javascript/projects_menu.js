function homePage() {
    var newLocation = "../index.html";
    window.location.href = newLocation;
}
function blogsMainPage() {
    var newLocation = "blog_main_page.html";
    window.location.href = newLocation;
}

var to_ind = document.getElementById('ind_from_proj');
to_ind.onclick = homePage;

var to_blog = document.getElementById('blog_from_proj');
to_blog.onclick = blogsMainPage;