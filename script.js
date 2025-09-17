        class Buku {
            constructor(judul, penulis) {
                this.judul = judul
                this.penulis = penulis
            }
        }

        class BukuFiksi extends Buku {
            constructor(judul, penulis) {
                super(judul, penulis)
                this.jenis = "Buku Fiksi"
            }
        }

        class BukuNonFiksi extends Buku {
            constructor(judul, penulis) {
                super(judul, penulis)
                this.jenis = "Buku Non Fiksi"
            }
        }

        class Anggota {
            #password = 12345

            constructor(nama, nim) {
                this.nama = nama
                this.nim = nim
                this.daftarBukuDipinjam = []
            }

            cekPassword(input) {
                return input === this.#password
            }
        
        set password(value) {
                this.#password = value
            }

            pinjamBuku(buku) {
                this.daftarBukuDipinjam.push(buku)
                console.log(`${this.nama} meminjam buku ${buku.judul}`)
            }
        }

        class Perpustakaan {
            static jumlahBuku = 0
            static jumlahAnggota = 0
            static koleksiBuku = []
            static daftarAnggota = []

            static tambahBuku(buku) {
                this.koleksiBuku.push(buku)
                this.jumlahBuku++
            }

            static tambahAnggota(anggota) {
                this.daftarAnggota.push(anggota)
                this.jumlahAnggota++
            }

            static tampilkanBuku() {
                console.log("📚 Daftar Buku:")
                for (const buku of this.koleksiBuku) {
                    console.log(`- ${buku.judul} oleh ${buku.penulis} (${buku.jenis ?? "Umum"})`)
                }
            }
        }

        const laskar = new Buku("Laskar Pelangi", "Andrea Hirata")
        const sero = new Buku("Sero", "Andrea Hirata")
        const perahu = new BukuFiksi("Perahu Kertas", "Ana")
        const kupukupu = new BukuNonFiksi("Kupu-kupu", "Puku")

        const fathan = new Anggota("fathan", "12134")
        const fathah = new Anggota("fathah", "12134")

        Perpustakaan.tambahBuku(laskar)
        Perpustakaan.tambahBuku(sero)
        Perpustakaan.tambahBuku(perahu)
        Perpustakaan.tambahBuku(kupukupu)

        Perpustakaan.tambahAnggota(fathan)
        Perpustakaan.tambahAnggota(fathah)


        fathan.pinjamBuku(laskar)
        fathah.pinjamBuku(perahu)

        console.log(`Jumlah Anggota = ${Perpustakaan.jumlahAnggota}`)
        console.log(`Jumlah Buku = ${Perpustakaan.jumlahBuku}`)

        Perpustakaan.tampilkanBuku()

        console.log(`Password Fathan benar? ${fathan.cekPassword(12345)}`)

        fathan.password = 1234
        console.log(`Password Fathan benar? ${fathan.cekPassword(12345)}`)
