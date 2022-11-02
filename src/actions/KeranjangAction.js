import FIREBASE from '../config/FIREBASE';
import { dispatchError, dispatchLoading, dispatchSuccess } from '../utils';

export const MASUK_KERANJANG = 'MASUK_KERANJANG';
export const GET_LIST_KERANJANG = 'GET_LIST_KERANJANG';
export const DELETE_KERANJANG = 'DELETE_KERANJANG';

export const masukKeranjang = (data) => {
    return (dispatch) => {
        dispatchLoading(dispatch, MASUK_KERANJANG);

        // Cek Apakah Data Keranjang User tersebut sudah ada atau tidak
        FIREBASE.database()
            .ref('keranjang/' + data.uid)
            .once('value', (querySnapshot) => {


                if (querySnapshot.val()) {
                    //Update Keranjang Utama
                    const keranjangUtama = querySnapshot.val();
                    const hargaBaru = parseInt(data.jumlahPesanan) * parseInt(data.menu.harga);

                    FIREBASE.database()
                        .ref('keranjang')
                        .child(data.uid)
                        .update({
                            totalHarga: keranjangUtama.totalHarga + hargaBaru,
                        })
                        .then((response) => {
                            //Simpan Ke Keranjang Detail
                            dispatch(masukKeranjangDetail(data));
                        })
                        .catch((error) => {
                            dispatchError(dispatch, MASUK_KERANJANG, error);
                            alert(error);
                        });
                } else {
                    //Simpan Keranjang Utama
                    const keranjangUtama = {
                        user: data.uid,
                        tanggal: new Date().toDateString(),
                        totalHarga: parseInt(data.jumlahPesanan) * parseInt(data.menu.harga),
                    };

                    FIREBASE.database()
                        .ref('keranjang')
                        .child(data.uid)
                        .set(keranjangUtama)
                        .then((response) => {

                            //Simpan Ke Keranjang Detail
                            dispatch(masukKeranjangDetail(data));
                        })
                        .catch((error) => {
                            dispatchError(dispatch, MASUK_KERANJANG, error);
                            alert(error);
                        });
                }
            })
            .catch((error) => {
                dispatchError(dispatch, MASUK_KERANJANG, error);
                alert(error);
            });
    };
};

export const masukKeranjangDetail = (data) => {
    return (dispatch) => {
        const pesanan = {
            menu: data.menu,
            jumlahPesanan: data.jumlahPesanan,
            totalHargaPesanan: parseInt(data.jumlahPesanan) * parseInt(data.menu.harga),
            keteranganPesanan: data.keteranganPesanan,
        };

        FIREBASE.database()
            .ref('keranjang/' + data.uid)
            .child('pesanan')
            .push(pesanan)
            .then((response) => {

                dispatchSuccess(dispatch, MASUK_KERANJANG, response ? response : []);
            })
            .catch((error) => {
                dispatchError(dispatch, MASUK_KERANJANG, error);
                alert(error);
            });
    };
};

export const getListKeranjang = (id) => {
    return (dispatch) => {
        dispatchLoading(dispatch, GET_LIST_KERANJANG);

        FIREBASE.database()
            .ref('keranjang/' + id)
            .once('value', (querySnapshot) => {
                //Hasil
                let data = querySnapshot.val();

                dispatchSuccess(dispatch, GET_LIST_KERANJANG, data);
            })
            .catch((error) => {
                dispatchError(dispatch, GET_LIST_KERANJANG, error);
                alert(error);
            });
    };
};

export const deleteKeranjang = (id, keranjangUtama, keranjang) => {
    return (dispatch) => {
        dispatchLoading(dispatch, DELETE_KERANJANG);

        const totalHargaBaru = keranjangUtama.totalHarga - keranjang.totalHargaPesanan;

        if (totalHargaBaru === 0) {
            // hapus keranjang utama & detail
            FIREBASE.database()
                .ref('keranjang')
                .child(keranjangUtama.user)
                .remove()
                .then((response) => {
                    dispatchSuccess(
                        dispatch,
                        DELETE_KERANJANG,
                        'Keranjang Sukses Dihapus',
                    );
                })
                .catch((error) => {
                    dispatchError(dispatch, DELETE_KERANJANG, error);
                    alert(error);
                });
        } else {
            // update total harga keranjang utama
            FIREBASE.database()
                .ref('keranjang')
                .child(keranjangUtama.user)
                .update({
                    totalHarga: totalHargaBaru,
                })
                .then((response) => {
                    // hapus pesanan/keranjang detail
                    dispatch(deleteKeranjangDetail(id, keranjangUtama));
                })
                .catch((error) => {
                    dispatchError(dispatch, DELETE_KERANJANG, error);
                    alert(error);
                });
        }
    };
};

export const deleteKeranjangDetail = (id, keranjangUtama) => {
    return (dispatch) => {
        FIREBASE.database()
            .ref('keranjang/' + keranjangUtama.user)
            .child('pesanan')
            .child(id)
            .remove()
            .then((response) => {
                dispatchSuccess(dispatch, DELETE_KERANJANG, 'Keranjang Sukses Dihapus');
            })
            .catch((error) => {
                dispatchError(dispatch, DELETE_KERANJANG, error);
                alert(error);
            });
    };
};
