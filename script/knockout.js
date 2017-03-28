var catData = [
    {
        catname: "Schnurri",
        url: "img/cat.jpg"
    },
    {
        catname: "Mohrle",
        url: "img/cat2.jpg"
    },
    {
        catname: "Amber",
        url:  "img/cat3.jpg"
    },
    {
        catname: "Gargamel",
        url: "img/cat4.jpg"
    },
    {
        catname: "Fritzii",
        url: "img/cat5.jpg"
    }];


var Cat = function(data){
    var self = this;
    self.catname = ko.observable(data.catname);
    self.counter = ko.observable(0);
    self.url = ko.observable(data.url);
    self.catLevel = ko.computed(function(){

        if (self.counter()<10){
            return ("Kitten");
        }else if (self.counter()>=10 && self.counter()<30){
            return ("Cat");
        }else if (self.counter()>=30){
            return ("Mastercat");
        }


    });



};


var ViewModel = function(){

    var self = this;
    self.allCats = ko.observableArray([]);

    catData.forEach(function(catItem){
        self.allCats.push(new Cat(catItem));
    });


    self.currentCat = ko.observable(self.allCats()[0]);
    console.log(self.currentCat());
    console.log(self.allCats()[0].catname());


     self.incrementCounter = function(){
        self.currentCat().counter(self.currentCat().counter() +1);
    };

    self.chooseCat = function(cat){
        console.log ("Name angeklickt");
        console.log(cat);
        self.currentCat(cat);
    };





};

ko.applyBindings (new ViewModel());