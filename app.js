import axios from 'axios';



async function getData(number) {
    const { data: users } = await axios('https://jsonplaceholder.typicode.com/users/' + number),
    { data: post } = await axios('https://jsonplaceholder.typicode.com/posts/' + number)


    console.log(users, post);
}

getData(1)


export default getData;