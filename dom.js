/*
// select element by id

let aa = document.getElementById("js");
document.getElementById("js").innerHTML = "baby";

// select element by class

let d = document.getElementsByClassName("jos");
for(let i=0;i<=d.length;i++){
    d[i].innerHTML = "say baby";
}

// select element by tag name

let a = document.getElementsByTagName("p");
for (let i = 0; i < a.length; i++) {
    a[i].innerHTML = "bro";
}
let b = say.getElementByTAgName ("h2");
for (let i = 0; i < b.length; i++) {
    b[i].innerHTML = "bro";}
    
    
    // query selector
    let a = document.querySelector("p.jos");
    a.innerHTML ="anshuman";
    
    let B = document.querySelectorAll("p.jos");
    for(let i=0;i<B.length;i++){
        B[i].innerHTML = "ANSUMAN";
    }
    
    // travesing element
    // to acess any parent/any element through child/another element
    let a = document.querySelector("h2");
    // let b = a.firstElementChild;
    // let b = a.lastElementChild;
    // b.innerHTML = "hey";
    // let b = a.children;
    // for(let i=0;i<b.length;i++)
    // {
        //     b[i].innerHTML = "hey";
        // }
        // let b = a.previousElementSibling;
        let b = a.nextElementSibling;
        b.innerHTML ="yo";
        
        // append in html documnet
        
        // let a = document.querySelector("hea")
        let a = document.getElementById("head");
        
        let b = document.createElement("button");
        b.id = "btn";
        b.textContent = "visit";
        a.appendChild(b);
        
        let c = document.createElement("p");
        c.id = "para";
        a.appendChild(c);
        
        let d = document.createElement("h6");
        d.className = "h6";
        d.textContent = "click here";
        a.appendChild(d);
        
        // another way to write in html through js
        // let txt = document.createTextNode("hello");
        // d.appendChild(txt);
        // a.appendChild(d);

        // append on body
        // let body = document.body;
        // body.appendChild(d);
        
        document.getElementById("btn").onclick = () => {
            document.getElementById("para").innerHTML = "thanks for visiting";
        };
        
        
        // insert element in html
        let x = document.body;
        
        let a = document.getElementById("hd");
        
        let b = document.createElement("h1");
        b.textContent = "ansumnx";
        
        a.insertBefore(b,a.lastElementChild)
        
        
        // remove element
        
        let x = document.body;

        let rem = document.getElementById("hd");
        
        let remove = rem.lastElementChild.previousElementSibling;
        
        rem.removeChild(remove);
        
        
        let a = document.getElementById("hd");
        // let b = a.cloneNode(); // only parent
        let b = a.cloneNode(true); // parent-child both
        b.id = "help";
        document.body.appendChild(b);
        
        
        // replace element
        
        let x = document.getElementById("hd");
        
        let pass = document.createElement("h6");
        pass.className = "change";
        pass.textContent = "welcome to website";

        let chng = x.lastElementChild;

        x.replaceChild(pass,chng);
        
        // insert/adjust element
        
        let x = document.getElementById("hd");
        
        let n = "<h6>thanks for visiting us</h6>";
        
        x.insertAdjacentHTML("beforeend",n)
        
        // change atribute
        
        let x = document.body;
        
        let button = document.createElement("button");
        button.textContent = "login";
        // button.setAttribute("id" , "btn");
        // let get = button.getAttribute("id");
        // let get = button.removeAttribute("id");
        // let get = button.hasAttribute("id");
        x.appendChild(button);
        
        
        // inline style 
        
        let btn = document.getElementById("btn");
        
        // btn.style.cssText = "color:red;background-color:black; width:110px; border:none;" // 1 way - replace whole css
        // so use +=
        
        // btn.setAttribute("style","color:red;background-color:black;") // 2 way - replace whole css
        // so use +=
        
        // btn.style.color ="red"; // 3 way 
        
        
        // computed css
        // to know what css is already in use
        
        let btn = document.getElementById("btn");
        
        let css = getComputedStyle(btn);
        console.log(css.color);
        
        //  work with css through js
        
        let a = document.getElementById("bx");
        // let css = a.classList;
        //  a.className += " dim"; 
        // a.classList.add("dim");
        // a.classList.remove("dim");
        // a.classList.replace("box","dim");
        // a.classList.contains("box");
        // a.classList.toggle("box"); // agar lga h toh hta do or hta h to lga do
        
        console.log(css);
        
        // how to know width/height of css through js
        
        let x = document.getElementById("bx");

        -total height
        // let width = x.offsetWidth;
        // let height =x.offsetHeight;

        - actual height left
        let width = x.clientWidth;
        let height = x.clientHeight;
        
        console.log(width);
        
        
        // dom event
        
        // add event listener
        
        let x = document.body;
        let btn = document.createElement("button");
        btn.id = "btn";
        btn.textContent = "login";
        x.appendChild(btn);
        
        btn.style.cssText = "color:red;";
        btn.style.cssText += "border-color:red; background-color:black;  padding:20px";
        
        let h1 = document.createElement("h4");
        h1.id = "h4";
        x.appendChild(h1);
        
        function you(){
            h1.textContent = "you muderrr";
        };
        btn.addEventListener("click", you);
        
        
        // remove event listener
        
        btn.removeEventListener("click" , you);
        
        // page load event
        
        let x = document.getElementById("h");
        
        x.addEventListener("DOMContentLoaded",function(){console.log("hello")});

        y.addEventListener("load",function(){
            z.textContent ="hello brother"
        });
        
        
        //scroll
        
        //  window.addEventListener("scroll",scl);
        //  function scl(){
//     console.log("scrollin");
//  }

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 150) {
        document.body.style.background = "red";
    } 
    else {
        document.body.style.background = "YELLOW";
    }
});


// input event

let x = document.getElementById("name");
x.addEventListener("focus" , focus);
x.addEventListener("blur" , blur);
x.addEventListener("input",function(){
    console.log(this.value);
})
x.addEventListener("change",function(){
    console.log(this.value);
})
function focus(){
    x.style.background = "red";
}

function blur(){
    x.style.background ="white";
}



//EVENT BUBBLING AND EVENT CAPTURING

let btn = document.getElementById("btn");
let x =document.getElementById("event");
let y= document.body;

btn.addEventListener("click" , function(event){
    console.log("button is clicked");
    event.stopPropagation();
})

x.addEventListener("click" , function (){
    console.log("div is clicked");
})

y.addEventListener("click" , function(){
    console.log("body is clicked")
},true)


// prevent default

*/
// let x = document.getElementById("ank");

// x.addEventListener("click",function(event){
    //    console.log("link clicked");
    //    event.preventDefault();
    // });
    
    // let x = document.getElementById("frm");
    
    // let para = document.createElement("h4");
    // x.appendChild(para);
    
    // let btn = document.getElementById("btn");
    // btn.addEventListener("submit", function(e){
    //     para.textContent ="wait checking your egiblity";
    //     e.preventDefault();
        
    // })
    