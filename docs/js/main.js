const buttonList = document.getElementById("button-list")
const navList = document.getElementById("nav-list");
const header = document.getElementById("header");
const write = document.getElementById("to-write");
const modal = document.getElementById("modal");
const domTablaturas = document.getElementById("element-tab");
var listImg = [];
const text = `
    La musica es ese hermoso lugar donde todos coíncidimos una vez, ese mundo magico donde eres libre de ser y sentir.
    Disfuta tocando y aprendiendo. Exitos!.
`;
var contador = 0;
var count = 0;
var quantityStr = text.length;
var fincontador = quantityStr;
var countListElement = 0;

const navDisplay = ()=> {
    buttonList.classList.toggle("icon--active");
    (navList.classList.toggle("display")) ? header.style.display = "flex" :  header.style.display = "inline";
}

const scrollPosition = idElement => {
    let element = document.getElementById(idElement);
    let elementTop = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: elementTop,
        left: 0,
        behavior: 'smooth'
    });
    if( screen.width < 500){
        navDisplay();
    }
}

const writeText = setInterval(() =>{
    if (contador < quantityStr){
        write.innerHTML += text[contador];
        contador+= 1;
    }
    else{ 
        if(count > 50){
            write.innerHTML= text.slice(0, fincontador);
            fincontador -=1;
            if(fincontador == 0){
                contador = 0;
                fincontador = quantityStr;
                count = 0;
            }
            // clearInterval(writeText);
        }else{
            count += 1;
        }
    }
}, 100);

var prev = 0;
const headerPosition = () => {
    condicion =  ((window.scrollY < prev && window.scrollY > 50) || (window.scrollY > 50 && window.scrollY < 200));
    condicion ? header.classList.add("header--active") : header.classList.remove("header--active");
    prev = window.scrollY;
}

const eventScroll = () =>{
    headerPosition();
}

buttonList.addEventListener("click", navDisplay);
window.addEventListener("scroll",eventScroll);
//entre boca y river prefiero tu boquita dea

const tablaturas = [
    {
        "img":"img/videos/prueba.webp", 
        "titulo":"hoja en blanco", 
        "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor ea nemo",
        "tablaturas":[
            "img/tabs/tab1.jpg",
            "img/tabs/tab2.jpg",
        ],
        "url":"https://youtube.com/hojaenblanck",
        "id":0
    },
    {
        "img":"img/videos/prueba.webp", 
        "titulo":"Blue bird", 
        "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor eLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor eLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor eLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor eLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor eLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor eLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor eLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor eLorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor ea nemo",
        "tablaturas":[
            "img/tabs/tab2.jpg",
            "img/tabs/tab3.jpg",
        ],
        "url":"https://youtube.com/",
        "id":1
    },
    {
        "img":"img/videos/prueba.webp", 
        "titulo":"Risas y mas", 
        "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor ea nemo",
        "tablaturas":[
            "img/tabs/tab2.jpg",
            "img/tabs/tab1.jpg",
            "img/tabs/tab3.jpg",
        ],
        "url":"https://youtube.com/",
        "id":2
    },
    {
        "img":"img/videos/prueba.webp", 
        "titulo":"La mejor cancion del mundo", 
        "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolor ea nemo",
        "tablaturas":[
            "img/tabs/tab1.jpg",
            "img/tabs/tab2.jpg",
            "img/tabs/tab3.jpg",
        ],
        "url":"https://youtube.com/",
        "id":3
    },
];

tablaturas.forEach(tablatura => {
    domTablaturas.insertAdjacentHTML('beforeend', `
        <div class="tablature__list">
            <img src="${tablatura["img"]}" alt="" class="tablature__list__img">
            <div class="tablature__list__cont">
                <p id="tablature-title" class="tablature__list__title"> ${tablatura["titulo"]}</p>
                <p id="tablature-description" class="tablature__list__description"> ${tablatura["descripcion"].slice(0, 150)}... </p>
                <button onclick="onloadTab(${tablatura['id']})" class="tablature__list__button"> Ver </button>
            </div>
        </div> 
    `);
});
const onloadTab = idTab => {
    tablaturas.forEach(tablatura => {
        if(tablatura["id"] == idTab){
            modal.style = " opacity:1; z-index: 20;";
            document.querySelector(".carrucel__title").innerHTML = tablatura["titulo"];
            document.querySelector(".carrucel__parrafo").innerHTML = tablatura["descripcion"];
            document.getElementById("link-tab").href = tablatura["url"];
            tablatura["tablaturas"].forEach(tab =>{
                img = `<img id="img_${tablatura['id']}" src="${tab}" alt="${tablatura['titulo']}">`
                document.querySelector(".carrucel__img").innerHTML += img;
            })
            countListElement = tablatura["tablaturas"].length - 1;
            listImg = document.querySelectorAll('.carrucel__img > img');
        }
    });
}
var id= 0;
const displayImg = num => {
    if(countListElement > 0){
        listImg[id].style.display = "none";
        if(id>= 0 && id <= countListElement){
            (num == 0) ? id -= 1 : id += 1;
        }
        (id < 0) ? id = countListElement: (id <= countListElement) ? id = id : id = 0;
        listImg[id].style.display = "block";
    }
}
const modalExit = ()=> modal.style = " opacity:0; z-index: -20;";;



