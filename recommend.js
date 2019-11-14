function appView() {
    return $(`
    <div id="root">
        <section class="hero is-black is-fullheight">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <span class="navbar-item">
                                    <a class="button is-white is-outlined" href="about.html">
                                        <span>About</span>
                                    </a>
                                </span>
                                <span class="navbar-item">
                                    <a class="button is-white is-outlined" href="https://github.com/adamalston/Redventures-Movie-Quotes">
                                        <span>View Source</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>

                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column">
                            <h1 class="title">Ironman</h1>
                            <h2 class="subtitle">Have you seen/heard this quote before</h2>

                            <div class="container">
                                <div class="buttons is-centered">
                                    <a class="button is-success" href="newQuote.js" id="yes">Yes</a>
                                    <button class="button is-danger" id="no">No</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        <script async type="text/javascript" src="../js/bulma.js"></script>
    </div>
    `);
}

function getQuote() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://casecomp.konnectrv.io/movie', 0);
    request.onload = function () {
    
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            p.textContent = `${movie.overview}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    }
    request.send();
}

function initializePage() {
    let body = $('body');
    
    // Load initial page page
    body.empty()
    body.append(appView());


    // attachEventHandlers(app);

    // change text on click
    $("#yes").on("click", getQuote);

}

$(document).ready(initializePage());