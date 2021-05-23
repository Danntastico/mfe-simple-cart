import faker from 'faker'

let products = ''

for (let i = 0; i < Math.floor(10 + Math.random()*20); i++) {
  const name = faker.commerce.productName()
  products += `<div>${name}</div>` 
}

document.getElementById('dev-products').innerHTML = products
