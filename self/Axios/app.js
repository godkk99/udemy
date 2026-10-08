// axios.get("https://swapi.info/api/people/1/")
//   .then(res =>
//     console.log("response: ", res)
//   )
//   .catch(e => {
//     console.log("error :", e)
//   })

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.info/api/people/${id}/`)
    console.log(res.data)
  }
  catch (e) {
    console.log("error: ", e)
  }
}

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')


const addNewJoke = async () => {
  const jokeText = await getDadJoke();


  const newLI = document.createElement('LI')
  newLI.append(jokeText)
  jokes.append(newLI)
}
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
  }
  catch (e) {
    return "no jokes available"
  }
}

button.addEventListener('click', addNewJoke)