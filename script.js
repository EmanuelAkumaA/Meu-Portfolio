let menuVisivel = false;
// Função que oculta ou mostra o menu
function mostraOcultaMenu(){
    if(menuVisivel){
        document.getElementById("nav").classList ="";
        menuVisivel = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisivel = true;
    }
}

function selecionar(){
    // Vai ocultar o menu assim que escolher a opção
    document.getElementById("nav").classList ="";
    menuVisivel = false;
}

// Aqui será a função que aplica a animação nas habilidades
function efeitoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progresso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("django");
        habilidades[4].classList.add("flask");
        habilidades[5].classList.add("sqlite");
        habilidades[6].classList.add("git");
        habilidades[7].classList.add("comunicacao");
        habilidades[8].classList.add("trabalho");
        habilidades[9].classList.add("atendimento");
        habilidades[10].classList.add("criatividade");
        habilidades[11].classList.add("dedicacao");
        habilidades[12].classList.add("project");
        habilidades[13].classList.add("adaptacao")
    }
}


//Detectar o scrolling pra poder aplicar a animação das habilidades
window.onscroll = function(){
    efeitoHabilidades();
}