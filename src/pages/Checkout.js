import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { CardPesanan, Jarak, Pilihan, Tombol } from '../components';
import { colors, fonts, numberWithCommas, responsiveHeight } from '../utils';
import { dummyPesanan } from '../data';

export default class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pesanan: dummyPesanan[0],
            pembayaran: ['Cash', 'Debit Card', 'Qris'],
        };
    }

    render() {
        const { pesanan, pembayaran } = this.state;
        return (
            <View style={styles.pages}>
                <ScrollView>
                    <View style={styles.isi}>
                        <Text style={styles.textBold}>Apakah Benar Ini Pesanan Anda ?</Text>
                        <Jarak height={15} />
                        <CardPesanan pesanan={pesanan} onPress={() => this.props.navigation.navigate('Keranjang')} />

                        <Pilihan label="Pilih Metode Pembayaran" datas={pembayaran} />
                        <Jarak height={10} />

                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    {/* Total Harga  */}
                    <View style={styles.totalHarga}>
                        <Text style={styles.textBold}>Total Harga :</Text>
                        <Text style={styles.textBold}>
                            Rp. {numberWithCommas(pesanan.totalHarga)}
                        </Text>
                    </View>

                    {/* Tombol  */}
                    <Tombol
                        title="Bayar"
                        type="textIcon"
                        fontSize={18}
                        padding={responsiveHeight(10)}
                        icon="submit"
                        onPress={() => this.props.navigation.navigate('Checkout')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    isi: {
        paddingHorizontal: 30,
    },
    textBold: {
        fontSize: 18,
        fontFamily: fonts.primary.bold,
        color: colors.black,
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary.regular,
    },
    totalHarga: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    ongkir: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer: {
        paddingHorizontal: 30,
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 11,
        paddingBottom: 15
    },
});
