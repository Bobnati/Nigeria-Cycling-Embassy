
class pageElement {

    constructor(minRange, maxRange, theClassName) {

        this.className = theClassName;

        this.element = document.querySelector(`.${this.className}`);

        console.log(this.className, this["element"]);

        this.minRange = minRange;

        this.maxRange = maxRange;

        function returnValueFromRange(minRange, maxRange) {

            const rand = Math.random();

            return Math.floor(rand * ((maxRange - minRange + 1)) + minRange);

        }

        this.color = {};

        this.color.red = returnValueFromRange(this.minRange.red, this.maxRange.red);

        this.color.blue = returnValueFromRange(this.minRange.blue, this.maxRange.blue);

        this.color.green = returnValueFromRange(this.minRange.green, this.maxRange.green);

        this.adding = {

            red: Math.random() > 0.5,

            blue: Math.random() > 0.5,

            green: Math.random() > 0.5

        }

    }

    updateColorValues() {

        for (const eachColor in this.color) {

            if (this.adding[eachColor]) this.color[eachColor]++;

            else this.color[eachColor]--;

            if (this.color[eachColor] > this.maxRange[eachColor]) this.adding[eachColor] = false;

            else if (this.color[eachColor] < this.minRange[eachColor]) this.adding[eachColor] = true;

        }
    }

    setElementColor() {



        const { red, green, blue } = this.color;

        this.element.style.color = "transparent";
        this.element.style.background = `linear-gradient(to right, rgb(${red}, ${green}, ${blue}) 10%, rgb(${Math.floor(red / 1.5)}, ${Math.floor(green / 1.5)}, ${Math.floor(blue / 1.5)}) 50%, rgb(${red}, ${green}, ${blue}) 100%)`;

        this.element.style.webkitBackgroundClip = "text";
        this.element.style.backgroundClip = "text";
    }
}

const thePageElements = [
    new pageElement({
        red: 100,
        blue: 100,
        green: 100
    },
        {
            red: 200,
            blue: 200,
            green: 200
        },
        "pageHeader"),

    new pageElement({
        red: 100,
        blue: 100,
        green: 100
    },
        {
            red: 200,
            blue: 200,
            green: 200
        },
        "text-3"),

    new pageElement({
        red: 20,
        blue: 20,
        green: 20
    },
        {
            red: 90,
            blue: 90,
            green: 90
        },
        "listElements1"),

    new pageElement({
        red: 10,
        blue: 10,
        green: 10
    },
        {
            red: 80,
            blue: 80,
            green: 80
        },
        "listElements2"),

    new pageElement({
        red: 20,
        blue: 20,
        green: 20
    },
        {
            red: 200,
            blue: 200,
            green: 200
        },
        "listElements3"),

    new pageElement({
        red: 20,
        blue: 20,
        green: 20
    },
        {
            red: 200,
            blue: 200,
            green: 200
        },
        "listElements4"),

    // new pageElement({
    //     red: 100,
    //     blue: 100,
    //     green: 100
    // },
    //     {
    //         red: 200,
    //         blue: 200,
    //         green: 200
    //     },
    //     "text-3"),

    // new pageElement({
    //     red: 100,
    //     blue: 100,
    //     green: 100
    // },
    //     {
    //         red: 200,
    //         blue: 200,
    //         green: 200
    //     },
    //     "text-3")
]

function animatePageElements() {

    thePageElements.forEach(element => {

        console.log("a");

        element.updateColorValues();

        element.setElementColor();

    });

    requestAnimationFrame(animatePageElements);

}

animatePageElements();

export default pageElement;