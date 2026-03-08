# Modul 5 – Ramadan Mubarak dengan Bootstrap Modal (THR)

## Deskripsi
Pada modul ini dilakukan pengembangan lanjutan dari halaman Ramadan Mubarak dengan menambahkan fitur interaktif menggunakan komponen Modal dari Bootstrap 5. Ketika tombol "Ambil THR" diklik, akan muncul sebuah modal yang menampilkan pesan selamat mendapatkan THR. Seluruh tampilan tetap dibangun menggunakan class Bootstrap tanpa mengandalkan native CSS secara penuh.

Tools yang digunakan dalam praktikum ini antara lain:
- Visual Studio Code
- Google Chrome
- HTML
- Bootstrap 5

## Langkah-langkah

### 1. Menambahkan Bootstrap JS CDN
Karena komponen Modal Bootstrap memerlukan JavaScript untuk berfungsi, Bootstrap JS Bundle ditambahkan di bagian bawah tag `<body>` sebelum tag penutupnya:
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

Bootstrap JS Bundle sudah mencakup Popper.js di dalamnya sehingga tidak perlu memanggil library tambahan secara terpisah.

### 2. Menambahkan Tombol "Ambil THR"
Tombol ditambahkan di dalam hero section tepat di bawah paragraf deskripsi. Tombol menggunakan class `btn btn-warning btn-lg shadow` dan dua atribut Bootstrap untuk memicu modal yaitu `data-bs-toggle` dan `data-bs-target`:
```html
<button class="btn btn-warning btn-lg shadow" data-bs-toggle="modal" data-bs-target="#thrModal">
    Ambil THR 🎁
</button>
```

Atribut `data-bs-toggle="modal"` memberi tahu Bootstrap bahwa tombol ini akan membuka sebuah modal, sedangkan `data-bs-target="#thrModal"` menunjuk ke elemen modal dengan id `thrModal` yang akan ditampilkan.

### 3. Membuat Komponen Modal
Modal dibuat menggunakan struktur komponen Bootstrap yang terdiri dari tiga bagian utama yaitu `modal-header`, `modal-body`, dan `modal-footer`. Atribut `data-bs-dismiss="modal"` digunakan pada tombol close dan tombol Alhamdulillah agar modal dapat ditutup kembali:
```html
<div class="modal fade" id="thrModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">🎉 Selamat!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body text-center">
                <h4 class="text-success">Anda mendapatkan THR!</h4>
                <p class="mt-3">
                    Semoga rezekinya berkah dan Ramadanmu penuh kebahagiaan 🌙
                </p>
            </div>

            <div class="modal-footer">
                <button class="btn btn-success" data-bs-dismiss="modal">
                    Alhamdulillah
                </button>
            </div>

        </div>
    </div>
</div>
```

Class `modal-dialog-centered` digunakan agar modal muncul di tengah layar secara vertikal, dan class `fade` memberikan efek animasi saat modal dibuka maupun ditutup.

### 4. Full Code
Berikut adalah keseluruhan kode dari file `thr.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ramadan Mubarak</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: #1f2327;
            color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            margin: 0;
        }
        footer {
            margin-top: auto;
        }
    </style>
</head>
<body>

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow">
        <div class="container">
            <a class="navbar-brand fw-bold fs-4" href="#">
                🌙 Ramadan Kareem
            </a>
        </div>
    </nav>

    <!-- HERO -->
    <div class="container text-center mt-5">
        <h1 class="display-2 text-warning fw-bold mb-4">
            Ramadan Mubarak
        </h1>
        <p class="lead mb-4">
            Semoga bulan suci ini membawa keberkahan, kedamaian, dan kebahagiaan bagi kita semua.
        </p>

        <!-- BUTTON THR -->
        <button class="btn btn-warning btn-lg shadow" data-bs-toggle="modal" data-bs-target="#thrModal">
            Ambil THR 🎁
        </button>
    </div>

    <!-- CARD SECTION -->
    <div class="container mt-5">
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card text-center shadow">
                    <div class="card-body">
                        <h4 class="card-title">🌙 Puasa</h4>
                        <p class="card-text">
                            Menahan diri dari makan, minum, dan hawa nafsu dari subuh hingga maghrib.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-center shadow">
                    <div class="card-body">
                        <h4 class="card-title">📖 Ibadah</h4>
                        <p class="card-text">
                            Memperbanyak membaca Al-Quran, dzikir, dan sholat tarawih.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-center shadow">
                    <div class="card-body">
                        <h4 class="card-title">🤝 Berbagi</h4>
                        <p class="card-text">
                            Berbagi rezeki dengan sedekah dan membantu sesama.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL THR -->
    <div class="modal fade" id="thrModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">🎉 Selamat!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <h4 class="text-success">Anda mendapatkan THR!</h4>
                    <p class="mt-3">
                        Semoga rezekinya berkah dan Ramadanmu penuh kebahagiaan 🌙
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success" data-bs-dismiss="modal">
                        Alhamdulillah
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer class="text-center p-3 bg-success">
        <p class="mb-0">
            Selamat menjalankan ibadah puasa 🌙
        </p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
```

## Hasil
Halaman web berhasil menampilkan tombol "Ambil THR 🎁" di hero section. Ketika tombol diklik, modal Bootstrap muncul di tengah layar dengan animasi fade menampilkan pesan "Anda mendapatkan THR!" berwarna hijau. Modal dapat ditutup menggunakan tombol silang di sudut kanan atas maupun tombol "Alhamdulillah" di bagian bawah modal.
