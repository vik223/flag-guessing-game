window.onload = function loadCountry() {
    let countryList = ["deutschland", "russland", "tschechien", "griechenland", "slowenien", "belarus", "island", "ungarn", "rumänien", "monaco", "angola", "argentinien", "brasilien", "el salvador", "ghana", "haiti", "indien", "indonesien", "irak", "kasachstan", "kongo", "libanon", "macau", "malaysia", "malediven", "mexiko", "marokko", "mongolei", "vietnam"];
    let countryLine = document.getElementById('country');
    let rndCountry = countryList[Math.floor(Math.random() * countryList.length)];
    body.style.backgroundColor = "white";
    h1.style.color = "red";
    
    
     
        countryLine.innerHTML = rndCountry
    
    
    
        let countryImgOne = ["spanien.png", "italien.png", "frankreich.png", "polen.png", "holland.png", "armenien.png", "israel.png", "jamaika.png", "myanmar.png", "pakistan.png", "paraguay.png", "peru.png"];
        let countryImgTwo =  ["norwegen.png",  "finnland.png", "rumänien.png", "island.png", "albanien.png", "estland.png", "aserbaidschan.png", "japan.png", "jemen.png", "philippinen.png", "singapur.png", "sri lanka.png"];
        let countryImgThree =  ["litauen.png", "kosovo.png", "schweiz.png", "serbien.png", "österreich.png", "slowakei.png", "äthiopien.png", "jordanien.png", "kanada.png", "katar.png", "taiwan.png", "uruguay.png"];
        let countryImgFour = ["großbrittanien.png", "belgien.png", "dänemark.png", "norwegen.png", "irland.png", "bangladesch.png", "kenia.png", "kirgistan.png", "kolumbien.png", "usbekistan.png", "venezuela.png"]
            
        
        
        let imageOne = document.getElementById("flagOne");
        let imageTwo = document.getElementById("flagTwo");
        let imageThree = document.getElementById("flagThree");
        let imageFour = document.getElementById("flagFour");
        
        imageOne.src = countryImgOne[Math.floor(Math.random() * countryImgOne.length)];
        imageTwo.src = countryImgTwo[Math.floor(Math.random() * countryImgTwo.length)];
        imageThree.src = countryImgThree[Math.floor(Math.random() * countryImgThree.length)];
        imageFour.src = countryImgFour[Math.floor(Math.random() * countryImgFour.length)];
    


        // Passende Flagge wird an einer der vier Stellen generiert
        let allFlags = [imageOne, imageTwo, imageThree, imageFour];
        let rndFlag = allFlags[Math.floor(Math.random() * allFlags.length)];
        rndFlag.src = countryLine.innerHTML + ".png";
    
    
    rndFlag.addEventListener("click", function changeBackground() {
        let body = document.getElementById('body');
        let h1 = document.getElementById('h1');
        body.style.backgroundColor = "green";
        h1.style.color = "black";

        setTimeout(()=>{
            document.location.reload();
        },1000)
})


    imageOne.addEventListener("click", function wrongGuess() {
        if (imageOne.src !== rndFlag.src) {
            body.style.backgroundColor = "red"
            h1.style.color = "white"
        } else {
            body.style.backgroundColor = "green"
            h1.style.color = "black"
        }
        setTimeout(()=>{
            document.location.reload();
        },2000)
    })

    imageTwo.addEventListener("click", function wrongGuess() {
        if (imageTwo.src !== rndFlag.src) {
            body.style.backgroundColor = "red"
            h1.style.color = "white"
        } else {
            body.style.backgroundColor = "green"
            h1.style.color = "black"
        }
        setTimeout(()=>{
            document.location.reload();
        },2000)
    })

    imageThree.addEventListener("click", function wrongGuess() {
        if (imageThree.src !== rndFlag.src) {
            body.style.backgroundColor = "red"
            h1.style.color = "white"
        } else {
            body.style.backgroundColor = "green"
            h1.style.color = "black"
        }
        setTimeout(()=>{
            document.location.reload();
        },2000)
    })

    imageFour.addEventListener("click", function wrongGuess() {
        if (imageFour.src !== rndFlag.src) {
            body.style.backgroundColor = "red"
            h1.style.color = "white"
        } else {
            body.style.backgroundColor = "green"
            h1.style.color = "black"
        }
        setTimeout(()=>{
            document.location.reload();
        },2000)
    })
        
    
}


