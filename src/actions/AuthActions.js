import FIREBASE from "../config/FIREBASE";
import { dispatchError, dispatchLoading, dispatchSuccess, storeData } from "../utils";

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";

export const registerUser = (data, password) => {
    return (dispatch) => {
        // Loading
        dispatchLoading(dispatch, REGISTER_USER);

        FIREBASE.auth().createUserWithEmailAndPassword(data.email, password)
            .then((success) => {
                // ambil UID, buat dataBaru berisi (data+UID) 
                const dataBaru = {
                    ...data,
                    uid: success.user.uid,
                };

                // console.log("Data :", data)
                // console.log("Password :", password)
                // simpan ke realtime database firebase
                FIREBASE.database().ref('users/' + success.user.uid).set(dataBaru);

                //sukses
                dispatchSuccess(dispatch, REGISTER_USER, dataBaru);

                //local storage (async storage)
                storeData('user', dataBaru)
            })
            .catch((error) => {
                dispatchError(dispatch, REGISTER_USER, error.message);

                alert(error.message)
            });
    };
};

export const loginUser = (email, password) => {
    return (dispatch) => {
        // LOADING
        dispatchLoading(dispatch, LOGIN_USER);

        FIREBASE.auth().signInWithEmailAndPassword(email, password)
            .then((success) => {
                // Signed in
                FIREBASE.database().ref('/users/' + success.user.uid)
                    .once('value')
                    .then((resDB) => {
                        if (resDB.val()) {

                            //SUKSES
                            dispatchSuccess(dispatch, LOGIN_USER, resDB.val());

                            //Local Storage (Async Storage)
                            storeData('user', resDB.val());
                        } else {
                            // ERROR
                            dispatchError(dispatch, LOGIN_USER, 'Data User tidak ada');

                            alert('Data User tidak ada');
                        }
                    });
            })
            .catch((error) => {
                // ERROR
                dispatchError(dispatch, LOGIN_USER, error.message);

                alert(error.message);
            });
    };
};