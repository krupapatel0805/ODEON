const header = document.querySelector('header');

window.addEventListener("scroll", function () {

    window.scrollY >= 10 ? header.classList.add("scrolled") : header.classList.remove("scrolled");

});

// const movie1 = []

const tree = document.querySelectorAll('.redirect');
let pageVal;

for (let i = 0; i < tree.length; i++) {
    tree[i].addEventListener('click', act);
}

function act(e) {
    var click = e.target.parentNode;

    if (click.dataset.dest == 'wallE') {
        pageVal = 'wallE';
    }
    else if (click.dataset.dest == 'theAdamProject') {
        pageVal = 'theAdamProject';
    }
    else if (click.dataset.dest == 'batman') {
        pageVal = 'batman';
    }
    else if (click.dataset.dest == 'drStrange') {
        pageVal = 'drStrange';
    }

    console.log(pageVal);
    localStorage.setItem('movieData',pageVal);
}
