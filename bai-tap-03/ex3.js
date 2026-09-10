// chạy vòng lặp từ 1 -> 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {     // i chia hết cho 2
        console.log(i + " là số chẵn");
    }
    if (i % 2 !== 0) {     // i không chia hết cho 2
        console.log(i + " là số lẻ");
    }
}