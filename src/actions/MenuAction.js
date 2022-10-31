import FIREBASE from "../config/FIREBASE";
import { dispatchError, dispatchLoading, dispatchSuccess } from "../utils";


export const GET_LIST_MENU = 'GET_LIST_MENU';
export const GET_LIST_MENU_BY_KATEGORI = 'GET_LIST_MENU_BY_KATEGORI';
export const DELETE_PARAMETER_MENU = 'DELETE_PARAMETER_MENU';
export const SAVE_KEYWORD_MENU = 'SAVE_KEYWORD_MENU';
const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

export const getListMenu = (idKategori, keyword) => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_MENU);

    if (idKategori) {
      FIREBASE.database()
        .ref('menu')
        .orderByChild('kategori')
        .equalTo(idKategori)
        .once('value', (querySnapshot) => {
          //Hasil
          // console.log("Data :", querySnapshot);
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_MENU, data);
        })
        .catch((error) => {
          dispatchError(dispatch, GET_LIST_MENU, error);
          alert(error);
        });
    } else if (keyword) {
      FIREBASE.database()
        .ref('menu')
        .orderByChild('namaMenu')
        .equalTo(capitalize(keyword))
        .once('value', (querySnapshot) => {
          //Hasil
          // console.log("Data :", querySnapshot);
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_MENU, data);
        })
        .catch((error) => {
          dispatchError(dispatch, GET_LIST_MENU, error);
          alert(error);
        });
    } else {
      FIREBASE.database()
        .ref('menu')
        .once('value', (querySnapshot) => {
          //Hasil
          // console.log("Data :", querySnapshot);
          let data = querySnapshot.val();

          dispatchSuccess(dispatch, GET_LIST_MENU, data);
        })
        .catch((error) => {
          dispatchError(dispatch, GET_LIST_MENU, error);
          alert(error);
        });
    }
  };
};

export const limitMenu = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_MENU);

    FIREBASE.database()
      .ref('menu')
      .limitToLast(6)
      .once('value', (querySnapshot) => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_MENU, data);
      })
      .catch((error) => {
        dispatchError(dispatch, GET_LIST_MENU, error);
        alert(error);
      });
  };
};

export const getMenuByKategori = (id, namaKategori) => ({
  type: GET_LIST_MENU_BY_KATEGORI,
  payload: {
    idKategori: id,
    namaKategori: namaKategori
  }
})

export const deleteParameterMenu = () => ({
  type: DELETE_PARAMETER_MENU,
})

export const saveKeywordMenu = (search) => ({
  type: SAVE_KEYWORD_MENU,
  payload: {
    data: search
  }
})