function projectWebsite() {
    window.open("https://github.com/AmberLynnR33/ambear-website", "_blank", "noreferrer");
}
function projectDeerhacks2023(){
    window.open("https://github.com/AmberLynnR33/Deerhack2023", "_blank", "noreferrer");
}
function projectTextBasedAdventure() {
    window.open("https://github.com/AmberLynnR33/CSC207-Adventure-Game-Group-Project", "_blank", "noreferrer");
}
function blogTemplate() {
    window.location.href = "./all_blogs/blog_template.html";
}

var textBasedAdventure = document.getElementById("githubTextBasedAdventure");
textBasedAdventure.onclick = projectTextBasedAdventure;

var thisWebsite = document.getElementById("githubWebsite");
thisWebsite.onclick = projectWebsite;

var deerhacks2023 = document.getElementById("githubDeerhacks2023");
deerhacks2023.onclick = projectDeerhacks2023;
