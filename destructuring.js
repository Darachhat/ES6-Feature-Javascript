let numbers = [10,20,30]
let [value1, value2, value3] = numbers
console.log(value1, value2, value3);

//object with method destructuring
const users = [
    {
        name: 'Da',
        age: '12'
    },
    {
        name: 'Fa',
        age: '12'
    },
    {
        name: 'Ka',
        age: '12'
    },
    {
        name: 'La',
        age: '12'
    }
]

// ES6
const displayUserInfo = ({name,age}) => {
    return {
        name: name,
        age: age,
    }
}

// Before ES6 
const disUserInfo = (user) => {
    return {
        name: user.name,
        age: user.age
    }
}
const fetchUsers = users.map(user =>displayUserInfo(user))
console.log(fetchUsers);

const pcs= [
    {
        brand: 'asus',
        year: '2004'
    },
    {
        brand: 'vivo',
        year: '2004'
    },
    {
        brand: 'oppo',
        year: '2004'
    },
]

const displayPc = (pc) => {
    return {
        brand: pc.brand,
        year:pc.year
    }
}

const newDisPc = ({brand,year}) => {
    return {
        brand: brand,
        year: year
    }
}

const fetchPC = pcs.map(pc =>displayPc(pc))
console.log(fetchPC);

const phones = [
    {
        name: 'Oppo',
        Quan: '12'
    },
    {
        name: 'Iphone',
        Quan: '12'
    },
    {
        name: 'Vivo',
        Quan: '12'
    }
]

const displayPhone = ({name,Quan}) => {
    return {
        name: name,
        Quan: Quan
    }
}

const NewDisplayPhone = (Phone) => {
    return {
        name: Phone.name,
        Quan: Phone.Quan
    }
}

const FetchPhone = phones.map(phone =>displayPhone(phone))
const NewFetchPhone = phones.map(phone =>NewDisplayPhone(phone))
console.log(FetchPhone);
