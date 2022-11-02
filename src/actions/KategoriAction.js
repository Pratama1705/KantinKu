import FIREBASE from "../config/FIREBASE";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";

export const GET_LIST_KATEGORI = 'GET_LIST_KATEGORI';

export const getListKategori = () => {
    return (dispatch) => {
        dispatchLoading(dispatch, GET_LIST_KATEGORI);

        FIREBASE.database()
            .ref('kategori')
            .once('value', (querySnapshot) => {
                //Hasil
                // console.log("Data :", querySnapshot);
                let data = querySnapshot.val();

                dispatchSuccess(dispatch, GET_LIST_KATEGORI, data);
            })
            .catch((error) => {
                dispatchError(dispatch, GET_LIST_KATEGORI, error);
                alert(error);
            });
    };
};

