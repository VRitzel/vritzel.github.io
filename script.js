let drop = document.getElementsByClassName("dropdown");

for(let i = 0; i < drop.length; i++){
    debugger;
    drop[i].addEventListener("click", function(){
        let dropdownContent = this.nextElementSibling;
        if(dropdownContent.style.display === "block"){
            dropdownContent.style.display = "none";
        }
        else{
            dropdownContent.style.display = "block";
        }
    });
}