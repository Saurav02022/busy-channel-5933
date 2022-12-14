import header from '../components/navbar.js'

let header_div=document.getElementById("ps_header");
header_div.innerHTML=header();

import {footer} from '../components/footer.js';

let footer_div=document.getElementById("ps_footer");
footer_div.innerHTML=footer();

// Import navbar popup

import {popup_display} from "../components/navbar.js";
let popup=document.getElementById("ps_popup");
popup.innerHTML=popup_display();


import {del_popup} from "../components/navbar.js";
let del_address=document.getElementById("ps_delivr");
del_address.innerHTML=del_popup();


let pickup=document.getElementsByClassName("ps_nav-bottom")[0];
// console.log(pickup);
pickup.addEventListener("click",function(){
    
    popup.style.display="block";
})

let span = document.getElementsByClassName("close")[0]
console.log(span);
span.addEventListener("click",function(){
    popup.style.display="none";
    del_address.style.display="none";
})

// for delivery popup
let span1 = document.getElementsByClassName("close")[1]
span1.addEventListener("click",function(){
    popup.style.display="none";
    del_address.style.display="none";
})

let delivery_popup=document.querySelector("#ps_delivery > button");

delivery_popup.addEventListener("click",function(){
    del_address.style.display="block";
    popup.style.display="none";
})
//  for featured items 
let featured_data=[
    {
        image:"https://i.ibb.co/Jr0zVQf/1.jpg",
        calories: "4700-7430",
        price:"set location for pricing",
    },
    {
        image:"https://i.ibb.co/p0gRXk8/2.jpg",
        calories: "3040-4280",
        price:"set location for pricing",
    },
    {
        image:"https://i.ibb.co/F4wxk7H/3.jpg",
        calories: "540-1100",
        price:"set location for pricing",
    },
    {
        image:"https://i.ibb.co/7QzG09f/4.jpg",
        calories: "550-1610",
        price:"set location for pricing",
    }

];

const append=(data)=>{
    let featured_div=document.getElementById("ps_featured");

    data.forEach(ele => {
        console.log(ele);

        let box=document.createElement("div");

        let img=document.createElement("img");
        img.src=ele.image;
        // console.log(img);

        let calorie=document.createElement("P");
        calorie.innerHTML=`calories: ${ele.calories}`;

        let pricing=document.createElement("P");
        pricing.innerHTML=`price: ${ele.price}`;

        box.append(img,calorie,pricing);

        featured_div.append(box);
    });
}
append(featured_data);

let pickup_button=document.getElementById("ps_quick");
pickup_button.addEventListener("click",function(){
    alert("Enter Area code/Pin code for Pickup")
})
