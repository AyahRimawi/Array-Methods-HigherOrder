let fizzbuzz = [];

document.getElementById('submit-btn').addEventListener('click', function() {
    document.getElementById('result1').innerHTML = '';
    document.getElementById('result2').innerHTML = '';

    let input = document.getElementById('input').value.split(",");
    let number = input.map(function(item) {
        return parseInt(item.trim());
    });

    fizzbuzz = number;

    document.getElementById('result1').innerHTML = fizzbuzz;
    

    // using map:
//=====================================
    let newArray = number.map(function(element) {
        if (element % 5 == 0 && element % 3 == 0) {
            return 'Fizz Buzz'
        }
        if (element % 3 == 0) {
            return 'Fizz'
        } 
        if (element % 5 == 0) {
            return 'Buzz'
        }
    });
    document.getElementById('result2').innerHTML = newArray;
    document.getElementById('input').value = '';
})