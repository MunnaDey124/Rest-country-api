// fetch("https://restcountries.eu/rest/v2/all")
// .then(res =>res.json())
// .then(data => displayCountries(data))


// const displayCountries = countries =>{
//     const countriesDiv = document.getElementById('countries');
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const countryDiv =document.createElement('div');
//         const h3 =document.createElement('h3');
//         h3.innerText = country.name;
//         const p =document.createElement('p');
//         p.innerText=country.capital;

//         countryDiv.appendChild(h3);
//         countryDiv.appendChild(p);

//         countriesDiv.appendChild(countryDiv);
//     }

// }

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => displayCountries(data))


const displayCountries = countries =>{
    const countriesDiv =document.getElementById("countries");
    countries.forEach(country => {
        const countryDiv=document.createElement("div");
        countryDiv.className='country';
        const countryInfo=`
        <h3 class="countryName">${country.name}</h3>
        <p class="capital">${country.capital}</p>
        <button onClick="allCountryDetails('${country.name}')"> Details</button>
        `
        countryDiv.innerHTML= countryInfo;
        countriesDiv.appendChild(countryDiv);
        
    });

}
    const allCountryDetails = name =>{
         const url=`https://restcountries.eu/rest/v2/name/${name}`
         fetch(url)
         .then(res =>res.json())
         .then(data =>renderCountryDetails(data[0]))

    }
     const renderCountryDetails =country=>{
         const countryDiv=document.getElementById("country_details");
         countryDiv.innerHTML =`
         <h1>${country.name}</h1>
         <p>Population:${country.population}</p>
         <p>Area:${country.area}</p>
         <img src="${country.flag}">

         `
     }
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv=document.createElement("div");
    //     countryDiv.className='country';
    //     const countryInfo=`
    //     <h3 class="countryName">${country.name}</h3>
    //     <p class="capital">${country.capital}</p>
    //     `
    //     countryDiv.innerHTML= countryInfo;
    //     countriesDiv.appendChild(countryDiv);
        
    // }