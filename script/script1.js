console.log("Javascript ist running");

var allCats=[];

var Cat = function(name, url){
    this.name = name;
    this.url = url;
    this.count = 0;
}

var whiskers = new Cat("Whiskers", "img/cat.jpg");
var susi = new Cat("Susi", "img/cat2.jpg");
var horst = new Cat("Horst", "img/cat3.jpg");
var maunzi = new Cat("Maunzi", "img/cat4.jpg");
var schnurri = new Cat("Schnurri", "img/cat5.jpg");

allCats=[whiskers, susi, horst, maunzi, schnurri];

 function listBuilder(){
    var kittenList = document.getElementById("kittenlist");
    allCats.forEach(function(cat){

        console.log (cat);
        var node = document.createElement("LI");
        var textnode = cat.name;
        node.innerHTML = textnode;
        node.addEventListener("click", (function(copycat){
            return function() {
                var kittenScore = document.getElementById("scores");
                var kitten = document.getElementById("kittenpic");
                var kittenName = document.getElementById("names");
                var kittenScore = document.getElementById("scores");
                kitten.src = copycat.url;
                kitten.value = copycat.name;
                kittenName.textContent=copycat.name;
                kittenScore.textContent=copycat.count;

                // var pic = document.createElement("IMG");
                // var picture = "<img class ='kittenpic' src='"+copycat+"'>";
                // pic.innerHTML = picture;
                // console.log(pic);
                // kitten.appendChild(pic);
            }
        })(cat));
        kittenList.appendChild(node);
    })
}

listBuilder();

var kittenPic = document.getElementById("kittenpic");
var kittenScore = document.getElementById("scores");
kittenPic.addEventListener("click", function(){
        console.log("Bild wurde geklickt");
        var name = kittenPic.value;
        var obj = name.toLowerCase();
        var catty = eval(obj);
        catty.count +=1;
        kittenScore.innerHTML = catty.count;
    });



 // ... and when we click, alert the value of `num`
// //     elem.addEventListener('click', (function(numcopy) {
// //         return function() {
// //             alert(numcopy);
// //         }
// //     })(num));

// //     // finally, let's add this element to the document
// //     document.body.appendChild(elem);



















// var counter = 0;
// var counter2 = 0;
// var kitten = document.getElementById("cat");
// var kitten2 = document.getElementById("cat2");

// // Creating the names as new textnodes

// var name1 = document.createTextNode("Whiskers");
// var name1Node = document.createElement("H2");
// name1Node.appendChild(name1);
// var kitten1 = document.getElementById("kittenbox1").appendChild(name1Node);
// kitten1.className = "names";

// var name2 = document.createTextNode("Susi");
// var name2Node = document.createElement("H2");
// name2Node.appendChild(name2);
// var kitten22 = document.getElementById("kittenbox2").appendChild(name2Node);
// kitten22.className = "names";





// kitten.addEventListener("click", function(){
//     counter+=1;
//     console.log (counter);
//     document.getElementById("counter").innerHTML = counter;
// })

// kitten2.addEventListener("click", function(){
//     counter2+=1;
//     console.log (counter2);
//     document.getElementById("counter2").innerHTML = counter2;
// })

// //
// // // clear the screen for testing
// // document.body.innerHTML = '';
// // document.body.style.background="white";

// // var nums = [1,2,3];

// // // Let's loop over the numbers in our array
// // for (var i = 0; i < nums.length; i++) {

// //     // This is the number we're on...
// //     var num = nums[i];

// //     // We're creating a DOM element for the number
// //     var elem = document.createElement('div');
// //     elem.textContent = num;

// //     // ... and when we click, alert the value of `num`
// //     elem.addEventListener('click', (function(numcopy) {
// //         return function() {
// //             alert(numcopy);
// //         }
// //     })(num));

// //     // finally, let's add this element to the document
// //     document.body.appendChild(elem);
// // };