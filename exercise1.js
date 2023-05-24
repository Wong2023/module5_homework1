let result = +prompt("введите число");
if(typeof result == 'number'){
  if(isNaN(result)){
    alert("Вы ввели не число");
  } else{
    result % 2 == 0? alert("число четное"):alert("число нечетное");
  }
} else{
  alert("что то пошло не так");
}
