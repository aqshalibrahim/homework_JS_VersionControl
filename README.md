# Program Pemisahan Array Genap dan Ganjil

## Deskripsi

Program ini melakukan pemisahan sebuah array yang berisi 100 nilai acak (antara 1 sampai 50) ke dalam dua array, yaitu:
- **Array Genap**: Berisi nilai-nilai pada indeks genap dari array utama.
- **Array Ganjil**: Berisi nilai-nilai pada indeks ganjil dari array utama.

Setelah pemisahan, program menghitung **Min**, **Max**, **Total**, dan **Rata-rata** dari kedua array (genap dan ganjil), lalu membandingkan hasil statistik antara keduanya.

## Fitur

- Membuat 100 nilai acak antara 1 sampai 50.
- Memisahkan nilai array berdasarkan indeks genap dan ganjil.
- Menghitung statistik berikut untuk kedua array (genap dan ganjil):
  - Nilai **Min** (Minimum)
  - Nilai **Max** (Maksimum)
  - **Total** jumlah nilai
  - **Rata-rata** nilai
- Membandingkan statistik antara array genap dan ganjil:
  - Perbandingan **Min** (Mana yang lebih besar).
  - Perbandingan **Max** (Mana yang lebih besar).
  - Perbandingan **Total** (Mana yang lebih besar).
  - Perbandingan **Rata-rata** (Mana yang lebih besar).

## Instalasi

1. Pastikan Anda memiliki **Node.js** terinstal di sistem Anda.
2. Clone repository ini atau salin kode program ke dalam file `.js` di lokal Anda.

## Penggunaan

1. Buka terminal atau command prompt.
2. Jalankan perintah berikut untuk mengeksekusi program:

   ```bash
   node <nama_file.js>
   ```

3. Program akan menghasilkan output berupa:
   - Array utama dengan 100 nilai acak.
   - Array genap dan array ganjil, masing-masing dengan 50 nilai.
   - Nilai minimum, maksimum, total, dan rata-rata untuk kedua array.
   - Perbandingan statistik antara array genap dan ganjil.

### Contoh Output

```bash
Array Utama dengan jumlah index 100:
[10, 22, 31, 47, 15, 49, 7, 2, 11, ...]

Array Genap dengan jumlah index 50:
[10, 31, 15, 7, 11, ...]

Array Ganjil dengan jumlah index 50:
[22, 47, 49, 2, 36, ...]

Statistik Array Genap:
Min: 1
Max: 49
Total: 1234
Rata-rata: 24.68

Statistik Array Ganjil:
Min: 3
Max: 48
Total: 1178
Rata-rata: 23.56

Perbandingan Antara Array Genap dan Ganjil:
Perbandingan Min: Array Ganjil lebih besar
Perbandingan Max: Array Genap lebih besar
Perbandingan Total: Array Genap lebih besar
Perbandingan Rata-rata: Array Genap lebih besar
```

## Struktur Program

1. **Pembuatan nilai acak**: Program membuat 100 nilai acak dengan rentang 1 hingga 50.
2. **Pemisahan array**: Program memisahkan nilai-nilai berdasarkan indeksnya:
   - Indeks genap masuk ke `Array Genap`.
   - Indeks ganjil masuk ke `Array Ganjil`.
3. **Perhitungan Statistik**:
   - Nilai minimum, maksimum, total, dan rata-rata dihitung menggunakan fungsi manual tanpa fungsi bawaan.
4. **Perbandingan Statistik**: Program membandingkan statistik antara array genap dan ganjil.

## Teknologi yang Digunakan

- **JavaScript (Node.js)**: Program ini ditulis menggunakan JavaScript dan dapat dijalankan menggunakan Node.js.

## Lisensi

Proyek ini tidak memiliki lisensi dan dapat digunakan untuk keperluan pembelajaran.
