const api_endpoint = 'https://irail.be/stations/NMBS/008814001'

const response = await fetch(api_endpoint);

const data = await response.json();

console.log(data);
