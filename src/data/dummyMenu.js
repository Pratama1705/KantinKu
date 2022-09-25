import { SotoMie, NasiPadang, PaketNasiAyam, Ramen, TehPucuk, GoodDay } from '../assets';
import { Nasi, Mie, Snack, Minuman } from "../assets";
export const dummyMenu = [
    {
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
    {
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
    {
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
    {
        id: 4,
        nama: 'Paket Nasi Ayam',
        gambar: PaketNasiAyam,
        kategori: {
            id: 1,
            nama: "Nasi",
            gambar: Nasi,
        },
        harga: 15000,
        deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus elit. Praesent eu lobortis lectus, sit amet ultrices sem. Phasellus accumsan tellus vel ipsum euismod iaculis. Ut hendrerit, purus id pretium faucibus, diam lorem scelerisque sem, nec porttitor puru",
        ready: true
    },
    {
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
    {
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
    
]