function Result() {
    var month = document.getElementById("abc").value;
    switch (month) {
        case ('1'):
        case ('3'):
        case ('5'):
        case ('7'):
        case ('8'):
        case ('10'):
        case ('12'):
            document.getElementById('date').innerHTML = 'Tháng ' + month + ' có 31 ngày';
            break;
        case ('2'):
            document.getElementById('date').innerHTML = 'Tháng ' + month + ' có 28 hoặc 29 ngày';
            break;
        default:
            document.getElementById('date').innerHTML = 'Tháng ' + month + ' có 30 ngày';
    }
}