const names = ['Asad', 'Axror','Sardor', 'Olim','Asad', 'jasur']
const fname =[]

names.forEach(function(name){
    const newNames = name.charAt().toUpperCase() + name.slice(1).toLowerCase() +'bek'
    fname.push(newNames)

})
console.log(fname)