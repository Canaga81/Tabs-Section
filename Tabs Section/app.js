const tabs = document.querySelector(".tabs");
const buttons = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

tabs.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if(id) {
        buttons.forEach((button) => {
            button.classList.remove("live");
        });
        e.target.classList.add("live");

        contents.forEach((content) => {
            content.classList.remove("live");
        });
        
        const element = document.getElementById(id);
        element.classList.add("live");
    }
});