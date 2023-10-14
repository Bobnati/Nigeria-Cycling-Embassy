function runImages () {
    image1 = '<img class="renderImage" src="small-peloton-riding.jpg" loading="lazy">';
image2 = '<p> <img class="renderImage" src="man-with-reflective-vests.jpg"> </p>';
image3 = '<p> <img class="renderImage" src="gravel-bike-01.jpg"> </p>';
image4 = '<img class="renderImage" src="delivery-bikes.jpg">';
image5 = '<img class ="renderImage" src="Cycling-in-Nigeria.jpg">';
image6 = '<img class ="renderImage" src="black-woman-on-shopping-bike.jpg">';
image7 = '<img class ="renderImage" src="black-girls-do-bike-monica-garrison.jpg">';
image8 = '<img class ="renderImage" src="biniam-girmay-tour-france-international-cycling.jpg">';

images = [image1, image2, image3, image4, image5, image6, image7, image8];

function displayImages(timesToDisplayImage, recallFunction) {
    let ind = 0;

    function loopIteration() {
        document.querySelector('.renderHTML').innerHTML = images[ind];

        ind++;

        if (ind >= images.length) {
            ind = 0;
            console.log(ind);
        }

        if (ind < timesToDisplayImage) {
            setTimeout(loopIteration, recallFunction);
            console.log(ind);
        }
    }

    loopIteration();
}

displayImages(50, 10000); // Display images 3 times with a 1000ms delay 
};


runImages ();