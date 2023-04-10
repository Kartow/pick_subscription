const cards = document.getElementsByClassName('card');
const stars = document.getElementsByClassName('star-img');

function pricingChange() {
    let switch_state = document.getElementById('switch');

    if (switch_state.checked === true) {
        cards[0].children[1].innerHTML = '107.99€';
        cards[1].children[1].innerHTML = '203.99€';
        cards[2].children[1].innerHTML = '359.99€';
        for (let i = 0; i < 3; i++) {
            stars[i].style.display = 'block'
        }
    } else {
        cards[0].children[1].innerHTML = '9.99€';
        cards[1].children[1].innerHTML = '18.99€';
        cards[2].children[1].innerHTML = '35.99€';
        for (let i = 0; i < 3; i++) {
            stars[i].style.display = 'none'
        }
    }
}

function choosePlan(plan_id){
    for (let i = 0; i < 3; i++) {
        cards[i].classList.remove('chosen');
    }
    document.getElementById(plan_id).classList.add('chosen');
}
