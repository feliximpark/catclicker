console.log("Javascript ist running");



//Model-Area... Was passiert hier?
// in der init-Funktion lege ich eine Schleife fest, die mir Objekte für sämtliche
// Katzen erschafft.
// currentCat ist die var, in der die aktuelle auf dem Bild zu sehende Katze gespeichert ist
// CatMaker ist eine Constructor-Function um die Inhalte für das Array allCats zu schaffen
// und in cats sind alle Katzen gespeichert (erweiterbar!!!)
var model = {

    init: function(){

        var i;
        var forlength = this.cats.length;
        for (i=0; i<forlength; i++){
            var objectName = new this.CatMaker(this.cats[i].name, this.cats[i].url);
            this.allCats.push(objectName);

        }
    },

    currentCat: null,

    CatMaker: function(name, url){
        this.name = name;
        this.url = url;
        this.counter = 0;
    },

    allCats: [],

    cats: [{
        name: "Smitty",
        url: "img/cat.jpg"
        },
        {
        name: "Amber",
        url: "img/cat2.jpg"
        },
        {
        name: "Henry",
        url: "img/cat3.jpg"
        },
        {
        name: "Maunzi",
        url: "img/cat4.jpg"
        },
        {
        name: "Schnurri",
        url: "img/cat5.jpg"
        }
    ],


};




// DER VIEW-BEREICH

// 1. Der Viewbereich für das Katzenbild, den Namenszug und den Klickzähler

var catView = {
    // erst eine Init-Function, die später im Octopus aufgerufen wird
    init: function (){
        // als erstes hole ich mir die DOM-Elemente und speichere sie in einer Var
        this.catImage = document.getElementById("kittenpic");
        this.catName = document.getElementById("names");
        this.catCounter = document.getElementById("scores");
        // und ich erledige alle Arbeiten, die später beim View stehen bleiben
        // in diesem Fall: einen Eventhandler einsetzen, der beim Klicken auf
        // das Foto startet
        this.catImage.addEventListener("click", function(){
            octopus.increaseCounter();
        });
        //dann müssen wir das ganze auf den Schirm zaubern beim Initialisiern
        this.render();
    },

    render: function(){
        var currentCat = octopus.currentCat();
        this.catImage.src = currentCat.url;
        this.catName.innerHTML = currentCat.name;
        this.catCounter.innerHTML = currentCat.counter;
    }

};

//hier habe ich einen eigenen View für die Liste, die ich auf den Schirm bringe

var catViewList = {
    // Start ist wieder mit einer init-Function, die unter anderem rendert und
    // die Eingriff ins DOM in eine Variable auslagert.
    init: function(){
        this.catList = document.getElementById("kittenlist");
        this.render();
    },

    render: function(){
        var allCats = octopus.getAllCats();

        var i, elem;
        var forLength = allCats.length;


        for (i=0; i<forLength; i++){
            cat = allCats[i];
            elem = document.createElement("LI");
            elem.innerHTML = cat.name;
            elem.addEventListener("click", (function(copyCat) {
                return function(){
                    octopus.setCurrentCat(copyCat);
                    catView.render();
                }
            })(cat));
            this.catList.appendChild(elem);



        }
    }
}

var adminView = {
    init:  function(){
            var button = document.getElementById("button");
            // var formDiv = document.getElementById("adminform");
            var saveButton = document.getElementById("savebutton");
            button.addEventListener("click", function(){
                console.log("Button geklickt");
                adminView.classToggle();
                adminView.render();
            });
            saveButton.addEventListener("click", function(){
                adminView.infoPush();
            })

    },

    classToggle:  function(){
        var formDiv = document.getElementById("adminform");
        formDiv.classList.toggle("hide");

    },

    render: function(){
            var catname = document.getElementById("catname");
            var caturl = document.getElementById("caturl");
            var catcount = document.getElementById("catcount");
            var cat = octopus.currentCat();
            catname.value = cat.name;
            caturl.value = cat.url;
            catcount.value = cat.counter;
    },

    infoPush: function(){
            var catname = document.getElementById("catname").value;
            var caturl = document.getElementById("caturl").value;
            var catcount = document.getElementById("catcount").value;
            console.log(catname);

            var allCats = octopus.getAllCats();
            var i, cat;
            var forLength = allCats.length;
            console.log(allCats);
            console.log(allCats[1].name);
            for (i=0; i<forLength; i++){
                if (allCats[i].name==catname){
                    cat = allCats[i];
                    cat.counter = catcount;

                    adminView.classToggle();
                    octopus.setCurrentCat(cat);
                    catView.render();
                }
            };

        // adminView.init();
    }

}



// Ocotpus ---------------------------
var octopus = {
    init: function(){
        model.init();
        model.currentCat = model.allCats[0];
        catView.init();
        catViewList.init();
        adminView.init();

    },
    // bei currentCat holt sich der Controller den Wert aus dem Model mittels return
    // aufgerufen wird er in der render-function von catView.
    currentCat: function(){
        return model.currentCat;
    },
    //holt das Array mit allen Katzen aus dem Model ab und übergibt es an den
    // View
    getAllCats: function(){
        return model.allCats;
    },

    setCurrentCat: function(cat){
        model.currentCat = cat;
    },

    increaseCounter: function(){
        model.currentCat.counter++;
        catView.render();
    }


}


octopus.init();
