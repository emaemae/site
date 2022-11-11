function get_sides(){
    alert('Введите размеры сторон треугольника.');
    var a = parseInt(prompt('Сторона а:'));
    var b = parseInt(prompt('Сторона b:'));
    var c = parseInt(prompt('Сторона c:'));
    document.write('Полученные размеры: ' + 'a = ' + a + ', b = ' + b  + ', c = ' + c + '.');
    document.write("<br>");
   
    
    if (a+b<=c || a+c<=b || b+c<=a){
        document.write("К сожалению, такого треугольника не существует...");
        document.write("<br>");
        document.write("<img src='../img/img_tr/tr-4.jpg'/>");
        
    } else {
        if (a==b && b==c){
            document.write("Поздравляем! У вас равносторонний треугольник.");
            document.write("<br>");
            document.write("<img src='../img/img_tr/tr-3.jpg'/>");
        } else {
            if (a==b || a==c || b==c){
                document.write("Поздравляем! У вас равнобедренный треугольник.");
                document.write("<br>");
                document.write("<img src='../img/img_tr/tr-2.jpg'/>");
            } else {  
                    document.write("Поздравляем! У вас очень красивый треугольник.");
                    document.write("<br>");
                    document.write("<img src='../img/img_tr/tr-1.jpg'/>");
            }
        } 
    }
}

