# Modul 1 – Setup Repository Menggunakan Command Line

## Deskripsi

Pada modul ini dilakukan proses pembuatan dan konfigurasi repository Git menggunakan Command Line Interface (CLI) pada sistem operasi Windows. Tahapan yang dilakukan meliputi inisialisasi repository secara lokal, menghubungkannya dengan repository yang telah dibuat di GitHub, serta mengunggah struktur folder praktikum ke dalam repository tersebut.

Tools yang digunakan dalam praktikum ini antara lain:

- Git
- Command Prompt (CMD)
- GitHub

## Langkah-langkah

### 1. Masuk ke Folder Project

Langkah pertama adalah membuka Command Prompt (CMD) kemudian masuk ke folder project praktikum menggunakan perintah berikut:

```
cd Documents
cd PRAKTIKUM ABP
```

Perintah tersebut digunakan untuk berpindah ke direktori tempat project praktikum disimpan.

### 2. Membuat Folder Modul

Setelah berada di dalam folder project, langkah berikutnya adalah membuat struktur folder untuk setiap modul menggunakan perintah berikut:

```
mkdir "Modul 1" "Modul 2" "Modul 3" "Modul 4" "Modul 5"
```

Perintah ini digunakan untuk membuat folder yang akan digunakan untuk menyimpan setiap tugas praktikum berdasarkan modul.

### 3. Membuat File di Dalam Folder Modul

Karena Git tidak dapat menyimpan folder kosong, maka perlu dibuat file di dalam setiap folder modul. Contohnya pada Modul 1:

```
cd "Modul 1"
type nul > README.md
cd ..
```

Langkah ini dilakukan agar setiap folder memiliki file yang dapat di-track oleh Git.

### 4. Mengunggah File ke Repository GitHub

Setelah seluruh folder dan file berhasil dibuat, langkah selanjutnya adalah mengunggah semua perubahan ke repository GitHub menggunakan perintah berikut:

```
git add .
git commit -m "Menambahkan struktur folder Modul 1 sampai Modul 5"
git push origin main
```

Perintah tersebut digunakan untuk menambahkan semua file ke staging area, membuat commit perubahan, serta mengirimkannya ke repository GitHub milik pengguna dengan username **Religitan**.

## Hasil

Repository GitHub berhasil diperbarui dengan struktur folder Modul 1 sampai Modul 5. Setiap folder telah berisi file yang dapat di-track oleh Git sehingga repository memiliki susunan yang lebih rapi dan terorganisir.

![SS 1](ss-1.png)

![SS 2](ss-2.png)
