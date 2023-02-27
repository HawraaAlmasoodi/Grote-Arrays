//console.log(randomPersonData);

const lijst = document.querySelector(".lijst");

// Subopdracht: Landenlijst.

const landen = randomPersonData.map(array => {
    return array.region;
}).reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
}, []).sort();

console.log(landen);


const addLandenToDom = region => {
    const landenLijstElementen = region.map(region => {
        const landenLijstItem = document.createElement("li");
        const landenLijstContent = document.createTextNode(region)
        landenLijstItem.appendChild(landenLijstContent);
        return landenLijstItem;
    })
    landenLijstElementen.forEach(element => {
        lijst.appendChild(element);
    })
}
//addLandenToDom(landen);

const landenButton = document.getElementById("landen-lijst");
landenButton.addEventListener("click", function () {
    lijst.innerHTML = "";
    addLandenToDom(landen);
});


// Subopdracht: Steenbokvrouwen

const getSteenBokVrouwen = array => {
    return array.filter(item => {
        return item.gender === "female";
    }).filter(item => {
        return item.age >= 30
    }).filter(item => {
        return (item.birthday.dmy.split("/")[0] >= "22" && item.birthday.dmy.split("/")[1] == "12") || (item.birthday.dmy.split("/")[0] <= "19" && item.birthday.dmy.split("/")[1] == "01")
    });

}

getSteenBokVrouwen(randomPersonData);

const addSteenBokVrouwenToDom = randomPersonData => {
    const steenBokVrouwenElementen = randomPersonData.map(personData => {
        const li = document.createElement("li");
        li.innerHTML = `${personData.name} ${personData.surname}`;
        return li;
    })
    steenBokVrouwenElementen.forEach(element => {
        lijst.appendChild(element);
    })
}
//addSteenBokVrouwenToDom(getSteenBokVrouwen(randomPersonData));

const steenBokVrouwenButton = document.getElementById("steenbokvrouwen")
steenBokVrouwenButton.addEventListener("click", function () {
    lijst.innerHTML = "";
    addSteenBokVrouwenToDom(getSteenBokVrouwen(randomPersonData));
});

// Subopdracht: Oude creditcards
const getYear = new Date().getFullYear();
const getNextYear = new Date().getFullYear() + 1 - "2000";
const getNearlyExpiretCreditCards = array => {
    return array.filter(item => {
        return item.age >= 18;
    }).filter(item => {
        return (item.credit_card.expiration.split("/")[1] == getYear) || (item.credit_card.expiration.split("/")[1] == getNextYear)
    })

}

getNearlyExpiretCreditCards(randomPersonData);

const addCreditCardsToDom = randomPersonData => {
    const creditCardsElementen = randomPersonData.map(personData => {
        const li = document.createElement("li");
        li.innerHTML = ` Name: ${personData.name} ${personData.surname}, Phone: ${personData.phone},  Creditcard number: ${personData.credit_card.number}, expiration date: ${personData.credit_card.expiration}`;
        return li;
    })
    creditCardsElementen.forEach(element => {
        lijst.appendChild(element);
    })
}

//addCreditCardsToDom(getNearlyExpiretCreditCards(randomPersonData));

const creditCardsButton = document.getElementById("creditcards");
creditCardsButton.addEventListener("click", function () {
    lijst.innerHTML = "";
    addCreditCardsToDom(getNearlyExpiretCreditCards(randomPersonData));
});


// Subopdracht: meeste mensen

let countLanden = randomPersonData.map(array => {
    return array.region + "  ";
}).reduce((tally, land) => {
    if (!tally[land]) {
        tally[land] = 1;
    } else {
        tally[land] = tally[land] + 1;
    }
    return tally;
}, {});

console.log(countLanden);

countLanden = Object.entries(countLanden);
console.log(countLanden)

const addLandenMetAantalMensenToDom = (randomPersonData) => {
    const landenMetAantalMensen = randomPersonData.map(countLand => {
        const li = document.createElement("li");
        li.innerHTML = countLand;
        return li;
    })
    landenMetAantalMensen.forEach(element => {
        lijst.appendChild(element);
    })
}
//addLandenMetAantalMensenToDom(countLanden);

const hoeveelMensenButton = document.getElementById("hoeveelmensen")
hoeveelMensenButton.addEventListener("click", function () {
    lijst.innerHTML = "";
    addLandenMetAantalMensenToDom(countLanden);
});




