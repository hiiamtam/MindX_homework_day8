const n = window.prompt("Nhập vào một số : ");

let i, sum=0;

for (i = 1; i <= n; i += 2) {
    sum += i;
}
document.write("Tổng các số lẻ từ 1 tới " + n + " là " + sum);
