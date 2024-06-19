var array = ['Rawan', 'Wesam', 'Hind', 'Muhammad', 'Esraa', 'Dareen'];
document.getElementById('array').innerHTML = array
array.forEach(function (element) {
    return document.getElementById('result').innerHTML += element + " "
})