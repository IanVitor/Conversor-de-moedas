const tela = document.querySelector("#tela span");
const inputValue = document.querySelector('#input')
const detailsContainer = document.querySelector('#details-container')
const coinTitle = document.querySelector('.coin-title h1')
const actualValue = document.querySelector('#actual-value span')
const variationValue = document.querySelector('#variation-value span')
const highValue = document.querySelector('.high-value span')
const lowValue = document.querySelector('.low-value span')

const getValueData = async(texto) => {
  const URL = texto

  const apiValueURL = `https://economia.awesomeapi.com.br/json/last/${URL}`

  const res = await fetch(apiValueURL);
  const data = await res.json();

  console.log(data)

  return data
}

const showValueData = async(texto) => {
  
  const data = await getValueData(texto);

  switch(texto) {
    case "USD-BRL":
      tela.innerText = `US$ ${parseFloat(inputValue.value / data.USDBRL.bid).toFixed(2)}`;
      coinTitle.innerText = 'Dolár Americano'
      actualValue.innerText = `${parseFloat(data.USDBRL.bid).toFixed(2)}`;
      variationValue.innerText = `${data.USDBRL.pctChange}`
      highValue.innerText = `${data.USDBRL.high}`;
      lowValue.innerText = `${data.USDBRL.low}`;
      break;
    case "EUR-BRL":
      tela.innerText = `€ ${parseFloat(inputValue.value / data.EURBRL.bid).toFixed(2)}`;
      coinTitle.innerText = 'Euro';
      actualValue.innerText = `${parseFloat(data.EURBRL.bid).toFixed(2)}`;
      variationValue.innerText = `${data.EURBRL.pctChange}`;
      highValue.innerText = `${data.EURBRL.high}`;
      lowValue.innerText = `${data.EURBRL.low}`;
      break;
    case "JPY-BRL":
      tela.innerText = `¥ ${parseFloat(inputValue.value / data.JPYBRL.bid).toFixed(3)}`;
      coinTitle.innerText = 'Iene Japonês';
      actualValue.innerText = `${parseFloat(data.JPYBRL.bid).toFixed(3)}`;
      variationValue.innerText = `${data.JPYBRL.pctChange}`;
      highValue.innerText = `${data.JPYBRL.high}`;
      lowValue.innerText = `${data.JPYBRL.low}`;
      break;
    case "GBP-BRL":
      tela.innerText = `£ ${parseFloat(inputValue.value / data.GBPBRL.bid).toFixed(2)}`;
      coinTitle.innerText = 'Libra Esterlina';
      actualValue.innerText = `${parseFloat(data.GBPBRL.bid).toFixed(2)}`;
      variationValue.innerText = `${data.GBPBRL.pctChange}`;
      highValue.innerText = `${data.GBPBRL.high}`;
      lowValue.innerText = `${data.GBPBRL.low}`;
      break;
  }



  detailsContainer.classList.remove("hide");

}