document.getElementById("cleartextarea").addEventListener("click", addClearEvent); 
document.getElementById("splAddCmnt").addEventListener("click", toggleCommentSpoiler); 

function addClearEvent(){
    const textBoxContent = document.getElementById('addcomment');
    textBoxContent.value="";
}

function toggleCommentSpoiler() {
    const commentSpoiler = document.getElementsByClassName('spoiler');
    commentSpoiler[0].classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function(){
    const sidebarLinks = document.getElementById('sidebarlinks');
    for (let i=0;i<=15;i++){
        sidebarLinks.innerHTML+=`<li><a href="index.html?loadsection=${i}">Section ${i}</a></li>`
    }
  });
