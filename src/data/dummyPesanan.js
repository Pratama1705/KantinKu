import {
    SotoMie, NasiPadang, PaketNasiAyam, Ramen, TehPucuk, GoodDay
} from '../assets'
import { Nasi, Mie, Snack, Minuman } from "../assets";

export const dummyPesanan = [
    {
        id: 1,
        tanggalPesanan: 'Sabtu, 24 September 2022',
        status: 'keranjang',
        totalHarga: 75000,
        totalPenjualan: 5,
        pesanans: [
            {
                id: 1,
                product: {
                    id: 1,
                    nama: 'Soto Mie',
                    gambar: SotoMie,
                    kategori: {
                        id: 2,
                        nama: "Mie",
                        gambar: Mie,
                    },
                    harga: 15000,
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus elit. Praesent eu lobortis lectus, sit amet ultrices sem. Phasellus accumsan tellus vel ipsum euismod iaculis. Ut hendrerit, purus id pretium faucibus, diam lorem scelerisque sem, nec porttitor puru",
                    ready: true
                },
                jumlahPesan: 2,
                totalHarga: 30000,
                keterangan: 'Pedes yaa bu'
            },
            {
                id: 2,
                product: {
                    id: 2,
                    nama: 'Ramen',
                    gambar: Ramen,
                    kategori: {
                        id: 2,
                        nama: "Mie",
                        gambar: Mie,
                    },
                    harga: 20000,
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus elit. Praesent eu lobortis lectus, sit amet ultrices sem. Phasellus accumsan tellus vel ipsum euismod iaculis. Ut hendrerit, purus id pretium faucibus, diam lorem scelerisque sem, nec porttitor puru",
                    ready: true
                },
                jumlahPesan: 2,
                totalHarga: 40000,
                keterangan: 'Pedes Sedang'
            },
            {
                id: 3,
                product: {
                    id: 5,
                    nama: 'Teh Pucuk',
                    gambar: TehPucuk,
                    kategori: {
                        id: 4,
                        nama: "Minuman",
                        gambar: Minuman,
                    },
                    harga: 5000,
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus elit. Praesent eu lobortis lectus, sit amet ultrices sem. Phasellus accumsan tellus vel ipsum euismod iaculis. Ut hendrerit, purus id pretium faucibus, diam lorem scelerisque sem, nec porttitor puru",
                    ready: true
                },
                jumlahPesan: 1,
                totalHarga: 5000,
                keterangan: 'Dingin'
            }
        ]
    },
    {
        id: 2,
        tanggalPesanan: 'Minggu, 25 September 2022',
        status: 'Lunas',
        totalHarga: 35000,
        totalPenjualan: 3,
        pesanans: [
            {
                id: 1,
                product: {
                    id: 5,
                    nama: 'Teh Pucuk',
                    gambar: TehPucuk,
                    kategori: {
                        id: 4,
                        nama: "Minuman",
                        gambar: Minuman,
                    },
                    harga: 5000,
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus elit. Praesent eu lobortis lectus, sit amet ultrices sem. Phasellus accumsan tellus vel ipsum euismod iaculis. Ut hendrerit, purus id pretium faucibus, diam lorem scelerisque sem, nec porttitor puru",
                    ready: true
                },
                jumlahPesan: 1,
                totalHarga: 5000,
                keterangan: 'Ngga Dingin'
            },
            {
                id: 2,
                product: {
                    id: 6,
                    nama: 'Good Day',
                    gambar: GoodDay,
                    kategori: {
                        id: 4,
                        nama: "Minuman",
                        gambar: Minuman,
                    },
                    harga: 5000,
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus elit. Praesent eu lobortis lectus, sit amet ultrices sem. Phasellus accumsan tellus vel ipsum euismod iaculis. Ut hendrerit, purus id pretium faucibus, diam lorem scelerisque sem, nec porttitor puru",
                    ready: true
                },
                jumlahPesan: 1,
                totalHarga: 5000,
                keterangan: 'Good day Capuchino Dingin'
            },
            {
                id: 3,
                product: {
                    id: 3,
                    nama: 'Nasi Padang',
                    gambar: NasiPadang,
                    kategori: {
                        id: 1,
                        nama: "Nasi",
                        gambar: Nasi,
                    },
                    harga: 25000,
                    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus elit. Praesent eu lobortis lectus, sit amet ultrices sem. Phasellus accumsan tellus vel ipsum euismod iaculis. Ut hendrerit, purus id pretium faucibus, diam lorem scelerisque sem, nec porttitor puru",
                    ready: true
                },
                jumlahPesan: 1,
                totalHarga: 25000,
                keterangan: 'Null'
            }
        ]
    }
]