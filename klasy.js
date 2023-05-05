class Success {
    endText() {
        return console.log("Dziękujemy za skorzystanie z naszego oprogramowania!")
    }
}

class Calculations extends Success {
    get text() {
        return "Twoje obliczenie to: "
    }

    get notice() {
        return "Twoja liczba jest mniejsza od 10!"
    }

    addition() {
        return 2+6
    }

    multiplication() {
        return 4*5
    }

    endResult(endValue) {
        console.log(this.text + " " + endValue)
        if(endValue < 10) {
            console.log(this.notice)
        }
    }
}



const makeCalc = new Calculations();
console.log(makeCalc.endResult(makeCalc.addition()));
makeCalc.endText();

