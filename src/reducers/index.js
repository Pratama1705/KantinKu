import { combineReducers } from "redux";
import AuthReducer from './auth';
import ProfileReducer from './profile';
import KategoriReducer from './kategori';
import MenuReducer from './menu';
import KeranjangReducer from './keranjang';
import PaymentReducer from './payment';
import PesananReducer from './pesanan';
import HistoryReducer from './history';

const rootReducer = combineReducers({
    AuthReducer,
    ProfileReducer,
    KategoriReducer,
    MenuReducer,
    KeranjangReducer,
    PaymentReducer,
    PesananReducer,
    HistoryReducer,
});

export default rootReducer