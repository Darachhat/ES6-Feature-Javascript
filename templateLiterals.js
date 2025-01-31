let name = 'John'
let message = `Hello, ${name}!`
console.log(message);

const text = 'Welcome to My Community'
console.log(`${text}, Bruh`);

const User = {
    name: 'Jonh De',
    age: '25',
    email: 'johnde@gmail.com'
}

const idCard = document.getElementById('user-card')

const userCard = `
    <div>
        <h2>${User.name}</h2>
        <p>${User.age}</p>
        <p>${User.email}</p>
    </div>
`
;

idCard.innerHTML = userCard
console.log(userCard);