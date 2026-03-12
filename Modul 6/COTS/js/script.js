let produkList = JSON.parse(localStorage.getItem("produk")) || []
let editIndex = -1

$(document).ready(function () {

    let table = $('#tabelProduk').DataTable()

    tampilkanData()

    $('#formProduk').submit(function (e) {

        e.preventDefault()

        let nama = $('#nama').val()
        let kategori = $('#kategori').val()
        let harga = $('#harga').val()

        let produk = {
            nama: nama,
            kategori: kategori,
            harga: harga
        }

        if (editIndex === -1) {

            produkList.push(produk)

        } else {

            produkList[editIndex] = produk
            editIndex = -1

        }

        simpanStorage()
        tampilkanData()

        $('#formProduk')[0].reset()

    })

    function tampilkanData() {

        table.clear()

        produkList.forEach(function (item, index) {

            table.row.add([
                index + 1,
                item.nama,
                item.kategori,
                "Rp " + parseInt(item.harga).toLocaleString(),

                `<button class="btn btn-warning btn-sm edit" data-id="${index}">Edit</button>
<button class="btn btn-danger btn-sm hapus" data-id="${index}">Hapus</button>`

            ])

        })

        table.draw()

    }

    function simpanStorage() {

        localStorage.setItem("produk", JSON.stringify(produkList))

    }

    $('#tabelProduk tbody').on('click', '.hapus', function () {

        let index = $(this).data('id')

        Swal.fire({
            title: "Hapus produk?",
            icon: "warning",
            showCancelButton: true
        }).then((result) => {

            if (result.isConfirmed) {

                produkList.splice(index, 1)

                simpanStorage()
                tampilkanData()

            }

        })

    })

    $('#tabelProduk tbody').on('click', '.edit', function () {

        let index = $(this).data('id')
        let data = produkList[index]

        $('#nama').val(data.nama)
        $('#kategori').val(data.kategori)
        $('#harga').val(data.harga)

        editIndex = index

    })

})