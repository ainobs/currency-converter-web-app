//******************DECLARATION OF GLOBAL VARIABLES***********************//

let submit = document.getElementById('button');
let ansa = document.getElementById('result');
let bat = document.getElementById('btn');
let opt = document.getElementById('currency');
let opt2 = document.getElementById('currency2');
let number = document.getElementById('number');

//******************API REQUEST FUNCTION***********************//

let calculate = () => {
	let access_key = '680bbc3728d9add676669ad55d2595fe';

	fetch(`http://data.fixer.io/api/latest?access_key=${access_key}`)
	.then(response => response.json())
	
	.then(response => {
		let symbol1 = opt.value;
		let symbol2 = opt2.value;
		let input = number.value;
		if(response.success === true){
			const value1 = response.rates[`${symbol1}`];
			const value2 = response.rates[`${symbol2}`];
			const result = (input * value2 / value1).toFixed(3);
			ansa.innerHTML = `${symbol2} ${result}`;
		}
	}).catch(error => console.log(error))
}

//*****CURRENCY ARRAY TO POPULATE DROP-DOWN MENU UPON REQUEST**********//

let currArray = [
	{value: 'CAD', text: 'Canadian Dollar'},
	{value: 'EUR', text: 'Euro'},
	{value: 'AUD', text: 'Australian Dollar'},
	{value: 'NZD', text: 'New Zealand Dollar'},
	{value: 'ZAR', text: 'South African Rand'},
	{value: 'HRK', text: 'Croatian Kuna'},
	{value: 'AOA', text: 'Angolan Kwanza'},
	{value: 'ARS', text: 'Argentine Peso'},
	{value: 'BHD', text: 'Bahraini Dinar'},
	{value: 'BRL', text: 'Brazilian Real'},
	{value: 'DZD', text: 'Algerian Dinar'},
	{value: 'BND', text: 'Brunei Dollar'},
	{value: 'XAF', text: 'CFA Franc BEAC'},
	{value: 'CVE', text: 'Cape Verde Escudo'},
	{value: 'EGP', text: 'Egyptian Pound'},
	{value: 'GIP', text: 'Gibraltar Pound'},
	{value: 'GNF', text: 'Guinea Franc'},
	{value: 'HKD', text: 'Hong Kong Dollar'},
	{value: 'ISK', text: 'Iceland Krona'},
	{value: 'INR', text: 'Indian Rupee'},
	{value: 'IQD', text: 'Iraqi Dinar'},
	{value: 'ILS', text: 'New Israeli Sheqel'},
	{value: 'JPY', text: 'Yen'},
	{value: 'KES', text: 'Kenyan Shilling'},
	{value: 'KPW', text: 'North Korean Won'},
	{value: 'KWD', text: 'Kuwaiti Dinar'},
	{value: 'CNY', text: 'Renminbi (Yuan)'},
	{value: 'LRD', text: 'Liberian Dollar'},
	{value: 'GHS', text: 'Ghanaian Cedi'},
	{value: 'MAD', text: 'Moroccan Dirham'},
	{value: 'RUB', text: 'Russian Ruble'},
	{value: 'SAR', text: 'Saudi Riyal'},
	{value: 'SGD', text: 'Singapore Dollar'},
	{value: 'SLL', text: 'Sierra Leonean Leone'},
	{value: 'TND', text: 'Tunisian Dinar'},
	{value: 'TZS', text: 'Tanzanian Shilling'},
	{value: 'ZWL', text: 'Zimbabwean Dollar'},
	{value: 'VEF', text: 'Venezuelan Bolívar Fuerte'},
	{value: 'UAH', text: 'Ukrainian Hryvnia'},
	{value: 'TTD', text: 'Trinidad and Tobago Dollar'},
	{value: 'TRY', text: 'Turkish Lira'},
	{value: 'SYP', text: 'Syrian Pound'},
	{value: 'SCR', text: 'Seychellois Rupee'},
	{value: 'RWF', text: 'Rwandan Franc'},
	{value: 'RON', text: 'Romanian Leu'},
	{value: 'PLN', text: 'Polish Zloty'},
	{value: 'PGK', text: 'Papua New Guinean Kina'},
	{value: 'NOK', text: 'Norwegian Krone'},
	{value: 'NAD', text: 'Namibian Dollar'},
	{value: 'MYR', text: 'Malaysian Ringgit'}
]

let array = () => {
	alert('The drop-down menu has been updated with more currency exchange values');
	for(let i =0; i < currArray.length; i++) {
		let option = document.createElement('option');
		let option2 = document.createElement('option');
		option.setAttribute('value', currArray[i].value);
		option.appendChild(document.createTextNode(currArray[i].text));
		option2.setAttribute('value', currArray[i].value);
		option2.appendChild(document.createTextNode(currArray[i].text));
		opt.appendChild(option);
		opt2.appendChild(option2);
		bat.disabled = true;
	}
}

//******************EVENT LISTENERS***********************//

bat.addEventListener('click', array);

submit.addEventListener('click', calculate);