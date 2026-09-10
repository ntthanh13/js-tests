const chieuCao = 172;                                 // Chiều cao 1m72
const canNangLyTuong = (chieuCao % 100) * 9 / 10;     // Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
const canNangToiDa = chieuCao % 100;                  // Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
const canNangToiThieu = (chieuCao % 100) * 8 / 10;    // Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10

// In kết quả trên 1 dòng
console.log("Cân nặng lý tưởng: " + canNangLyTuong
        + "; Cân nặng tối đa: " + canNangToiDa
        + "; Cân nặng tối thiểu: " + canNangToiThieu);