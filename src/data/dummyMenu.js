import React from "react";
import {IconChangePassword, IconEditProfile, IconHistoryPemesanan, IconSignOut} from "../assets/icons";

export const dummyMenu = [
    {
        id : 1,
        nama: "Edit Profile",
        gambar: <IconEditProfile />,
        halaman: "EditProfile"
    },
    
    {
        id : 2,
        nama: "Change Password",
        gambar: <IconChangePassword />,
        halaman: "ChangePassword"
    },
    
    {
        id : 3,
        nama: "History Pemesanan",
        gambar: <IconHistoryPemesanan />,
        halaman: "HistoryPemesanan"
    },
    
    {
        id : 4,
        nama: "Sign Out",
        gambar: <IconSignOut />,
        halaman: "SignOut"
    },
]