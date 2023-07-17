$.getJSON('users.json', function(users) {
    //ex1
    let answ1 = users.map(u => ({email:u.email, companyName:u.company.name}))
    console.log(answ1)
    // ex2
    let answ2 = users.filter(u => u.address.zipcode.startsWith('5'))
    console.log(answ2)
    //3
    let answ3 = users.filter(u => u.address.zipcode.startsWith('5')).map(u => (u.id))
    console.log(answ3)
    //4
    let answ4 = users.map(u => (u.name)).filter(u => u.startsWith('C'))
    console.log(answ4)
    //5
    let answ5 = users.every(u => u.address.city === 'South Christy')
    console.log(answ5)
    // 6
    let answ6 = users.find(u => u.address.suite === 'Apt. 950')
    console.log(answ6.company.name)

    // 7
    users.forEach(user => console.log(represent(user)))
})

// 7
const represent = function(u) {
    return `${u.name} lives in ${u.address.city}, and owns the company ${u.company.name}`
}

