'use  strict'


const Prev = document.getElementById('Prev');
const Next = document.getElementById('Next');
const thumbnails = document.getElementById('thumbnails');
const target = document.getElementById('target');
const thTitle = document.getElementById('thTitle');
const parkingIcon = document.getElementById('parkingIcon');
const parkingSign = document.getElementById('parkingSign');
const babybedIcon = document.getElementById('babybedIcon');
const babybedSign = document.getElementById('babybedSign');
const multisheetIcon = document.getElementById('multisheetIcon');
const multisheetSign = document.getElementById('multisheetSign');
const ostomateIcon = document.getElementById('ostomateIcon');
const ostomateSign = document.getElementById('ostomateSign');
const buttonIcon = document.getElementById('buttonIcon');
const buttonSign = document.getElementById('buttonSign');
const shoewrtoiletIcon = document.getElementById('shoewrtoiletIcon');
const shoewrtoiletSign = document.getElementById('showertoiletSign');
const tdTime = document.getElementById('tdTime');

function  setModal(textSet, imageSet) {
    textSet.forEach((value) => {
        thTitle.innerHTML = value.title;
        parkingIcon.innerHTML = value.parking;
        parkingSign.innerText = value.parkingSign;
        babybedIcon.innerHTML = value.babybed;
        babybedSign.innerText = value.babybedSign
        multisheetIcon.innerHTML = value.multisheet;
        multisheetSign.innerText = value.multisheetSign
        ostomateIcon.innerHTML = value.ostomate;
        ostomateSign.innerText = value.ostomateSign;
        buttonIcon.innerHTML = value.button;
        buttonSign.innerText = value.buttonSign
        shoewrtoiletIcon.innerHTML = value.showertoilet;
        shoewrtoiletSign.innerText = value.showertoiletSign;
        tdTime.innerText = value.tdTime;

    });

    let currentNum = 0;

    function setMainImage(imageSet) {
        target.src = imageSet;
    }
    
    setMainImage(imageSet[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#thumbnails li')[currentNum].classList.add('current');
    }

   
    imageSet.forEach((image, index) => {
        const li = document.createElement('li');
        if (index === currentNum) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            setMainImage(image);
            removeCurrentClass();
            currentNum  = index;
            addCurrentClass();
        })
        const img = document.createElement('img');
        img.src = image;
        li.appendChild(img);
        thumbnails.appendChild(li);
    });

    Next.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === imageSet.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(imageSet[currentNum]);
    });

    Prev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = imageSet.length -1;
        }
        addCurrentClass();
        setMainImage(imageSet[currentNum]);
    });
}

function back() {
    mask.classList.add('hidden');
    modal.classList.add('hidden');
    modalArrayRemove();
}

function modalArrayRemove() {
    thTitle.removeChild(thTitle.firstChild);
    parkingIcon.removeChild(parkingIcon.firstChild);
    parkingSign.removeChild(parkingSign.firstChild);
    babybedIcon.removeChild(babybedIcon.firstChild);
    babybedSign.removeChild(babybedSign.firstChild);
    multisheetIcon.removeChild(multisheetIcon.firstChild);
    multisheetSign.removeChild(multisheetSign.firstChild);
    ostomateIcon.removeChild(ostomateIcon.firstChild);
    ostomateSign.removeChild(ostomateSign.firstChild);
    buttonIcon.removeChild(buttonIcon.firstChild);
    buttonSign.removeChild(buttonSign.firstChild);
    shoewrtoiletIcon.removeChild(shoewrtoiletIcon.firstChild);
    shoewrtoiletSign.removeChild(shoewrtoiletSign.firstChild);
    tdTime.removeChild(tdTime.firstChild);
    target.removeAttribute("src");
    thumbnails.textContent = null;
}
