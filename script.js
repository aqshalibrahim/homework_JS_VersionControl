// Langkah 1: Buat 100 nilai acak antara 1 sampai 50
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 50) + 1);
}

// Langkah 2: Pisahkan array menjadi dua berdasarkan indeks
let arrGenap = [];
let arrGanjil = [];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        arrGenap.push(arr[i]);
    } else {
        arrGanjil.push(arr[i]);
    }
}

// Langkah 3: Buat fungsi-fungsi untuk menghitung min, max, total, dan rata-rata

// Fungsi untuk menghitung nilai minimum
function hitungMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Fungsi untuk menghitung nilai maksimum
function hitungMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Fungsi untuk menghitung total
function hitungTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Fungsi untuk menghitung rata-rata
function hitungRataRata(array) {
    let total = hitungTotal(array);
    return total / array.length;
}

// Fungsi untuk menghitung semua statistik
function hitungStatistik(array) {
    let min = hitungMin(array);
    let max = hitungMax(array);
    let total = hitungTotal(array);
    let rataRata = hitungRataRata(array);
    return { min, max, total, rataRata };
}

// Hitung statistik untuk array genap dan ganjil
let statGenap = hitungStatistik(arrGenap);
let statGanjil = hitungStatistik(arrGanjil);

// Langkah 4: Cetak semua hasil

// Output array utama
console.log("Array Utama dengan jumlah index 100:");
console.log(arr);

// Output array genap
console.log("\nArray Genap dengan jumlah index 50:");
console.log(arrGenap);

// Output array ganjil
console.log("\nArray Ganjil dengan jumlah index 50:");
console.log(arrGanjil);

// Output statistik array genap
console.log("\nStatistik Array Genap:");
console.log("Min:", statGenap.min);
console.log("Max:", statGenap.max);
console.log("Total:", statGenap.total);
console.log("Rata-rata:", statGenap.rataRata);

// Output statistik array ganjil
console.log("\nStatistik Array Ganjil:");
console.log("Min:", statGanjil.min);
console.log("Max:", statGanjil.max);
console.log("Total:", statGanjil.total);
console.log("Rata-rata:", statGanjil.rataRata); 

// Langkah 5: Bandingkan kedua array
console.log("\nPerbandingan Antara Array Genap dan Ganjil:");
console.log("Perbandingan Min:", (statGenap.min > statGanjil.min) ? "Array Genap lebih besar" : "Array Ganjil lebih besar");
console.log("Perbandingan Max:", (statGenap.max > statGanjil.max) ? "Array Genap lebih besar" : "Array Ganjil lebih besar");
console.log("Perbandingan Total:", (statGenap.total > statGanjil.total) ? "Array Genap lebih besar" : "Array Ganjil lebih besar");
console.log("Perbandingan Rata-rata:", (statGenap.rataRata > statGanjil.rataRata) ? "Array Genap lebih besar" : "Array Ganjil lebih besar");