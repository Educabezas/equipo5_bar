const API = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const get = (id) => {
    return fetch (API+id).then((response)=>response.json())
}