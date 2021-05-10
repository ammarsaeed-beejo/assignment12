var numbers = [-45, 4, 9, 16, 25];
   var all_up_zero = numbers.every(all_positive);
  
    function all_positive(value, index, array) {
         return value > 0;
    }
    alert(all_up_zero); 