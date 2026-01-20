const data = new FormData(form)
console.log(data)

const userData = Object.fromEntries(data)

console.log(userData)
