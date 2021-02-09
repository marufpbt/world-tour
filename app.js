fetch(`https://restcountries.eu/rest/v2/all`)
.then(res => res.json())
.then(data => {
	displayCountryName(data);
})

const displayCountryName = country => {
	country.forEach(element => {
		const countriesList = document.getElementById('countriesList');
		const div = document.createElement('div');
		countriesList.appendChild(div);
		const countryInfo = `
			<h3>${element.name}</h3>
			<p>${element.capital}</p>
			<button onclick="displayCountryDetail('${element.name}')">Detail Info</button>
		`
		div.innerHTML = countryInfo;
		div.className = 'country';
	});
}

const displayCountryDetail = name => {
	const url = `https://restcountries.eu/rest/v2/name/${name}`
	fetch(url)
	.then(res => res.json())
	.then(data => {
		renderDetail(data[0]);
	})
}


const renderDetail = render =>{
	const renderDetail = document.getElementById('renderDetail');
	const renderInfo = `
			<h3>${render.name}</h3>
			<img style="width:400px" src="${render.flag}">
			<p style="font-size:30px">${render.currencies[0].symbol}</p>
	`
	renderDetail.innerHTML = renderInfo;
}
