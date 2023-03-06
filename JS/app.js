var cookies = 0;
var cookiesPerClick = 1;
var cookiesPerSecond = 0;
var cookiesPerClickPrice = 10;
var grandmas = 0;
var grandmaPrice = 100;
var farms = 0;
var farmPrice = 1000;
var mines = 0;
var minePrice = 10000;
var factories = 0;
var factoryPrice = 100000;

function testingCookies() {
    cookies += 1000000;
    updateCounters();
}

function updateCounters() {
    cookieCounter.innerHTML = Math.round(cookies);
    cpc.innerHTML = cookiesPerClick;
    cpcPrice.innerHTML = cookiesPerClickPrice;
    grandma.innerHTML = grandmas;
    grandmasPrice.innerHTML = grandmaPrice;
    cpsCounter.innerHTML = cookiesPerSecond;
    farm.innerHTML = farms;
    farmsPrice.innerHTML = farmPrice;
    mine.innerHTML = mines;
    minesPrice.innerHTML = minePrice;
    factory.innerHTML = factories;
    factoriesPrice.innerHTML = factoryPrice;
}

function clickCookie() {
    cookies += cookiesPerClick;
    updateCounters();
}

function incrementCookies(amount) {
    cookies += amount;
    updateCounters();
}

function upgradeCookiesPerClick() {
    if (cookies >= cookiesPerClickPrice) {
        cookiesPerClick += 1;
        cookies -= cookiesPerClickPrice;
        cookiesPerClickPrice = Math.round(cookiesPerClickPrice * 1.2);
        updateCounters();
    }
}

function upgradeGrandmas() {
    if (cookies >= grandmaPrice) {
        grandmas += 1;
        cookies -= grandmaPrice;
        grandmaPrice = Math.round(grandmaPrice * 1.2);
        updateCounters();
    }
}

function upgradeFarms() {
    if (cookies >= farmPrice) {
        farms += 1;
        cookies -= farmPrice;
        farmPrice = Math.round(farmPrice * 1.2);
        updateCounters();
    }
}

function upgradeMines() {
    if (cookies >= minePrice) {
        mines += 1;
        cookies -= minePrice;
        minePrice = Math.round(minePrice * 1.2);
        updateCounters();
    }
}

function upgradeFactories() {
    if (cookies >= factoryPrice) {
        factories += 1;
        cookies -= factoryPrice;
        factoryPrice = Math.round(factoryPrice * 1.2);
        updateCounters();
    }
}

function idleGameLoop() {
    if (grandmas >= 1) {
        incrementCookies(grandmas / 10);
    }
    if (farms >= 1) {
        incrementCookies(farms);
    }
    if (mines >= 1) {
        incrementCookies(mines * 10);
    }
    if (factories >= 1) {
        incrementCookies(factories * 100);
    }

    cookiesPerSecond = grandmas + (farms * 10) + (mines * 100) + (factories * 1000);

    updateCounters();

    if (cookies < 1) {
        news.innerHTML = "Welcome to the game, click the cookie to start";
    } else if (cookies < 50) {
        news.innerHTML = "You feel like making cookies, but no one wants to eat your cookies";
    } else if (cookies < 100) {
        news.innerHTML = "Your cookies are popular with your dog";
    } else if (cookies < 1000) {
        news.innerHTML = "Your cookies are popular with your family";
    } else if (cookies < 10000) {
        news.innerHTML = "Your cookies are popular with the neighborhood";
    } else if (cookies < 100000) {
        news.innerHTML = "Your cookies are reowned in the whole town!";
    } else if (cookies < 1000000) {
        news.innerHTML = "Your cookies are worth a lot of money";
    } else if (cookies < 10000000) {
        news.innerHTML = "Your cookies bring all the boys to the yard";
    } else if (cookies < 100000000) {
        news.innerHTML = "People come from very far to get a taste of your cookies";
    }
}

setInterval(idleGameLoop, 100);
