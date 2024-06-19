let array = [];

document.getElementById('submit-btn').addEventListener('click', function() {
   document.getElementById('result1').innerHTML = '';
   document.getElementById('result2').innerHTML = '';

   let input = document.getElementById('input').value.split(',');
   
   let inputsArray = input.map(function(item) {
       return item.trim();
   });
   
   // Add each item to array
//    array = array.concat(inputsArray);
inputsArray.forEach(function(item) {
    array.push(item);
});
   
   document.getElementById('result1').innerHTML = inputsArray;
   
   document.getElementById('input').value = '';

   let newArray = array.map(function(element) {
       if (isNaN(element)) {
           return 'nan';
       } else {
           if (element % 2 == 0) {
               return 'even';
           } else {
               return 'odd';
           }
       }
   });
   
   document.getElementById('result2').innerHTML = newArray;

});