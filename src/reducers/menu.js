import { GET_LIST_MENU, GET_LIST_MENU_BY_KATEGORI, DELETE_PARAMETER_MENU, SAVE_KEYWORD_MENU, saveKeywordMenu } from "../actions/MenuAction";


const initialState = {
  getListMenuLoading: false,
  getListMenuResult: false,
  getListMenuError: false,

  idKategori: false,
  namaKategori: false,
  keyword: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_MENU:
      return {
        ...state,
        getListMenuLoading: action.payload.loading,
        getListMenuResult: action.payload.data,
        getListMenuError: action.payload.errorMessage,
      };
    case GET_LIST_MENU_BY_KATEGORI:
      return {
        ...state,
        idKategori: action.payload.idKategori,
        namaKategori: action.payload.namaKategori,
      }
    case DELETE_PARAMETER_MENU:
      return {
        ...state,
        idKategori: false,
        namaKategori: false,
        keyword: false,
      }
    case SAVE_KEYWORD_MENU:
      return {
        ...state,
        keyword: action.payload.data
      }
    default:
      return state;
  }
}
