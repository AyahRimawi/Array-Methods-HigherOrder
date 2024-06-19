let array = [];

document.getElementById('submit-btn').addEventListener('click', function() {
    document.getElementById('result1').innerHTML = '';
    document.getElementById('result2').innerHTML = '';

    let input = document.getElementById('input').value.split(",");
    let number = input.map(function(item) {
        return parseInt(item.trim());
    });

    array = number;

    document.getElementById('result1').innerHTML = array;
    

    // using map:
//=====================================
    let newArray = number.map(function(element) {
        return 2 ** element;
    });
    document.getElementById('result2').innerHTML = newArray;
//=====================================

    // Using forEach: 
//=====================================
    // array.forEach(function (element) {
        // document.getElementById('result2').innerHTML += 2 ** element + ' ';
    // })
//=====================================

   // Using for:
//=====================================
    // for (let element of array) {
    //     element = 2 ** element;
    //     document.getElementById('result2').innerHTML += element + ' ';}
//=====================================
    
    document.getElementById('input').value = '';
});