import jordImgUrl from './media/jorduppgang.jpg';
import anime from 'animejs';


const imgEl = document.querySelector('img');
imgEl.src = jordImgUrl;

anime({
    targets: imgEl,
    rotate: '360deg',
    direction: 'alternate'
 


})

















/*
import { usersRef } from "./modules/firebaseConfig.js";
import { onValue, ref } from "firebase/database";
import { displayUsers } from "./modules/display.js";
console.log(usersRef)



//Hanterar databasen i realtime
onValue(usersRef, snapshot => {
    const users = snapshot.val();
    console.log(users)
    displayUsers(users);
})

document.querySelector('#batmanForm').addEventListener('submit', event => {
    event.preventDefault();
    const batmanRef = ref(db, 'users/{batmansid}').value;
    update(batmanRef, {score: newScore});
})

const newUserForm = document.querySelector('#addUser');
newUserForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.querySelector('#newUserName').value;
    const score = document.querySelector('#newUserScore').value;

    const newID = push(userRef).key;
    const newUser = {};
    newUser[newID] = {name, score};
    console.log(newUser)
    update(usersRef, newUser);
})

















const url = 'https://restcountries.eu/rest/v2/lang/es';



async function fetchCountries() {


    const response = await fetch(url);
    const countries = await response.json();
    console.log(data);

    console.log(JSON.stringify(countries));


    const populationCount = _.countBy(countries, country => country.population > 10000000 ? 'over10M' : 'under10M');

    console.log('Antal länder med population över 10 000 000:', populationCount.over10M);

    console.log(populationCount);
}

fetchCountries();
console.log('test');
*/



