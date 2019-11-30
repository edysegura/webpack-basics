import axios from 'axios'

async function main() {
  const response = axios.get('https://swapi.co/api/people')
  console.log(response.results)
}

main()