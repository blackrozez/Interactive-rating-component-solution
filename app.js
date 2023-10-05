const rating_cards =document.querySelectorAll(".rating-number span");
const submit_btn = document.querySelector(".submit");
const rate_point = document.querySelector("rate");
const rating_section = document.querySelector(".rating");
const thank_Section = document.querySelector(".thanks");


let rate = null;

rating_cards.forEach((rating_card)=>
{ 
    rating_card.addEventListener(
        "click", (e) => {
            const active= document.querySelector('.checked');
            if(active){
                active.classList.remove("checked")
            }
            const card = e.target;
            card.classList.add("checked");
            rate = e.target.innerText;
        });
});

submit_btn.addEventListener("click",() => {

    if (rate){
        rate_point.innerText = rate;
        rating_section.classList.add('hidden');
        thank_Section.classList.remobe('hidden');
    }
});
