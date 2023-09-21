const n = window.prompt("Nhập vào một số : ");
let result = 1;

for (let i = 2; i <= n ;i++) {
    result *= i;
}
document.write("Giai thừa của số đó là : ", result);

