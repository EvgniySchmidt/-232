//1
let transport = prompt('Выберите транспорт');
if (transport  == "а"){
    alert("210")
}
else if (transport == "в") {
    alert("60")
}
иначе если (транспорт == "м") {
    alert("325")
}
else if (transport == "с") {
    alert("1120")
}
else if (transport == "п") {
    alert("300")
}
//2
 номер функции(x){
  
    пусть arr = [];
    для (пусть i = 0; i < x; i++){
    arr.push(+prompt("Введите число",""));
    }
    пусть min = Math.min(...arr);
    тревога(мин);
    
}
 
number(+prompt("Введите кол-во чисел", ""));