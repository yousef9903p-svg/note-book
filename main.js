let inputnode = document.querySelector(".inputText");

let buttunsave = document.querySelector(".save");

let boxsave = document.querySelector(".inputNodeTOsave");

let THEshow = document.querySelector("theNode");

let loadbutton = document.querySelector(".load")

let nightvision = document.querySelector(".nightvision")

let titleSacceful = document.querySelector(".saveTitle")

buttunsave.addEventListener("click", function(){
    localStorage.setItem("click", inputnode.value);
    inputnode.value = "";

    titleSacceful.textContent = "save sacceful";

    

        setTimeout(() => {
        titleSacceful.classList.toggle("hide")
            }, 2000)
});

loadbutton.addEventListener("click", function(){
    let load = localStorage.getItem("click");

    inputnode.value = load;
    

})


nightvision.addEventListener("click", function(){
    document.body.classList.toggle("website")
})
