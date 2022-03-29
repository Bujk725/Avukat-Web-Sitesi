var hizmetler = [
    {
        name : "Boşanma Sebepleri Nelerdir?",
        image : "img/boşanma-davası.jpg",
        link : 'bosanma.html',
        alt : "Boşanma Davası?"
    },
    {
        name : "İşçi Hakları",
        image : "img/iş-hukuku.jpg",
        link : 'İs-Hukuku.html',
        alt : "İş Hukuku"
    },
    {
        name : "İcra ve İflas",
        image : "img/İcra ve İflas Hukuku.jpg",
        link : 'İcra.html',
        alt : "İcra Nedir?"
    },
    {
        name : "Ceza Hukuku",
        image : "img/Ceza Hukuku.jpg",
        link : 'ceza.html',
        alt : "Ceza Hukuku"
    }
];

var index = 0;
var uzunluk = hizmetler.length;
var interval;
var ayarlar ={
    duration : "3000",
    random : false
};

değişim(ayarlar);

document.querySelector(".fa-arrow-left").addEventListener
("click",function(){
    index--;
    showSlide(index);
});

document.querySelector(".fa-arrow-right").addEventListener("click",function(){
    index++;
    showSlide(index);
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        değişim(ayarlar);
    })
})

function değişim(ayarlar){

    var sayı;
    interval = setInterval(function(){

        if(ayarlar.random){
            do {
                index = Math.floor(Math.random() * uzunluk);
            } while (index == sayı);
            sayı = index;
        }
        else{
            if(uzunluk == index +1){
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);

    },ayarlar.duration);
}

function showSlide(i){

    index = i;

    if(i<0){
        index = uzunluk - 1;
    }
    if(i>=uzunluk){
        index = 0;
    }

    document.querySelector("#slider_text").textContent = hizmetler[index].name;
    document.querySelector("#slider_image").setAttribute("src",hizmetler[index].image);
    document.querySelector("#slider_image").setAttribute("alt",hizmetler[index].alt);
    document.querySelector("#slider_btn").setAttribute("href",hizmetler[index].link);
};