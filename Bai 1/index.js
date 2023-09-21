const n = window.prompt("Nhập vào một số : ");

if (n < 2){
    document.write(n + " không phải là số nguyên tố");
}

for (let i = 2; i < n ; i++) {
    if (n % i == 0) {
            document.write(n + " không phải là số nguyên tố");
            break;  
    }
    else {
            document.write(n + " là số nguyên tố");
            break;
    }
}
