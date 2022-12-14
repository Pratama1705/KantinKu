import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../utils'
import Jarak from './Jarak'
import { connect } from 'react-redux'
import { updateStatus } from '../../actions/HistoryActions'


class CardHistory extends Component {
    componentDidMount() {
        const { pesanan } = this.props;
        this.props.dispatch(updateStatus(pesanan.order_id));
    }

    masukMidtrans = () => {
        const { pesanan } = this.props;
        if (pesanan.status === 'lunas') {
            Alert.alert('Info', 'Pesanan Sudah Lunas');
        } else {
            this.props.navigation.navigate('Midtrans', { url: pesanan.url });
        }
    };

    render() {
        const { pesanan, updateStatusLoading } = this.props
        const history = pesanan.pesanan
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.masukMidtrans()}>
                <Text style={styles.tanggal}>{pesanan.tanggal}</Text>
                {Object.keys(history).map((key, index) => {
                    return (
                        <View key={index} style={styles.history}>
                            <Text style={styles.textBold}>{index + 1}.</Text>
                            <Image source={{ uri: history[key].menu.gambarMenu }} style={styles.gambar} />
                            <View style={styles.deskripsi}>
                                <Text style={styles.nama}>{history[key].menu.namaMenu}</Text>
                                <Text style={styles.harga}>Rp. {numberWithCommas(history[key].menu.harga)}</Text>

                                <Jarak height={10}></Jarak>
                                <Text style={styles.textBold}>Pesan : {history[key].jumlahPesanan}</Text>
                                <Text style={styles.textBold}>Total Harga : Rp. {numberWithCommas(history[key].totalHargaPesanan)}</Text>
                            </View>
                        </View>
                    )
                })}

                <Jarak height={10}></Jarak>
                <View style={styles.footer}>
                    <View style={styles.label}>
                        <Text style={styles.orange}>Status :</Text>
                        <Text style={styles.orange}>Total Harga :</Text>
                    </View>
                    <View style={styles.label}>
                        <Text style={styles.orange}>{updateStatusLoading ? 'Loading' : pesanan.status}</Text>
                        <Text style={styles.orange}>Rp. {numberWithCommas(pesanan.totalHarga)}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => ({
    updateStatusLoading: state.HistoryReducer.updateStatusLoading,
});

export default connect(mapStateToProps, null)(CardHistory)

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    history: {
        flexDirection: 'row',
        marginTop: 10
    },
    gambar: {
        width: responsiveWidth(70),
        height: responsiveHeight(70),
        resizeMode: 'contain'
    },
    tanggal: {
        fontSize: 14,
        fontFamily: fonts.primary.bold
    },
    textBold: {
        fontSize: 11,
        fontFamily: fonts.primary.bold
    },
    deskripsi: {
        marginLeft: responsiveWidth(7)
    },
    nama: {
        fontSize: 13,
        fontFamily: fonts.primary.bold,
        textTransform: 'capitalize'
    },
    harga: {
        fontSize: 12,
        fontFamily: fonts.primary.regular
    },
    footer: {
        flexDirection: 'row'
    },
    label: {
        flex: 1
    },
    orange: {
        fontSize: 14,
        fontFamily: fonts.primary.bold,
        color: colors.primary,
        textAlign: 'right',
        textTransform: 'uppercase'
    }

})