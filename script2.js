window.onload = function loadCountry() {
    let countryList = ['Ghana', 'Kenia', 'Angola', 'Äthiopien', 'Kongo', 'Brasilien', 'Argentinien', 'Peru', 'Kolumbien', 'Mexiko', 'Japan', 'Honduras', 'Aserbaidschan', 'Indonesien', 'Indien', 'Philippinen', 'Vietnam', 'Singapur', 'Malaysia', 'Pakistan', 'Taiwan', 'Sri Lanka', 'Israel', 'Bangladesch', 'Katar', 'Malediven', 'Kasachstan', 'Mongolei', 'Myanmar', 'Armenien', 'Irak', 'Usbekistan', 'Macau', 'Libanon', 'Marokko', 'Jemen', 'Jordanien', 'Kirgistan', 'Kanada', 'El Salvador', 'Haiti', 'Jamaika', 'Paraguay', 'Uruguay', 'Venezuela'];
    let coutryLine = document.getElementById('country');
    let rndCountry = countryList[Math.floor(Math.random() * countryList.length)];
     
        coutryLine.innerHTML = rndCountry
    
    }