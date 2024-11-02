const toggleModeButton = document.getElementById('toggle-mode');
const body = document.body;

function toggleTheme(){
    console.log('Botão pressionado!');
    if(body.classList.contains("light-mode")){
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }
    else{
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
}
toggleModeButton.addEventListener("click", toggleTheme);