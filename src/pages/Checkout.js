import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { CardPesanan, Jarak, Pilihan, Tombol } from '../components';
import { colors, fonts, getData, numberWithCommas, responsiveHeight } from '../utils';
import { connect } from 'react-redux';
import { snapTransactions } from '../actions/PaymentActions';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: false,
            pesanan: this.props.route.params.pesanan,
            totalHarga: this.props.route.params.totalHarga,
            date: new Date().getTime()
        };
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = () => {
        getData('user').then((res) => {
            const data = res;

            if (data) {
                this.setState({
                    profile: data
                })
            } else {
                this.props.navigation.replace('Login');
            }
        })
    }

    componentDidUpdate(prevProps) {
        const { snapTransactionsResult } = this.props;

        if (snapTransactionsResult && prevProps.snapTransactionsResult !== snapTransactionsResult) {
            // console.log("Hasil : ", snapTransactionsResult)
            const params = {
                url: snapTransactionsResult.redirect_url,
                order_id: "TEST-" + this.state.date + "-" + this.state.profile.uid
            }

            this.props.navigation.navigate('Midtrans', params);

        }
    }

    Bayar = () => {
        const { totalHarga, profile, date } = this.state
        const data = {
            transaction_details: {
                order_id: "TEST-" + date + "-" + profile.uid,
                gross_amount: parseInt(totalHarga)
            },
            credit_card: {
                secure: true
            },
            customer_details: {
                first_name: profile.nama,
                email: profile.email,
                phone: profile.nohp
            }
        }
        // console.log("Data : ", data);
        this.props.dispatch(snapTransactions(data))
    }

    render() {
        const { pesanan, totalHarga } = this.state;
        const { snapTransactionsLoading } = this.props;
        // console.log(pesanan)
        return (
            <View style={styles.pages}>
                <ScrollView>
                    <View style={styles.isi}>
                        <Text style={styles.textBold}>Apakah Benar Ini Pesanan Anda ?</Text>
                        <Jarak height={15} />
                        <CardPesanan pesanan={pesanan} onPress={() => this.props.navigation.navigate('Keranjang')} />
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    {/* Total Harga  */}
                    <View style={styles.totalHarga}>
                        <Text style={styles.textBold}>Total Harga :</Text>
                        <Text style={styles.textBold}>
                            Rp. {numberWithCommas(totalHarga)}
                        </Text>
                    </View>

                    {/* Tombol  */}
                    <Tombol
                        title="Bayar"
                        type="textIcon"
                        fontSize={18}
                        padding={responsiveHeight(10)}
                        icon="submit"
                        onPress={() => this.Bayar()}
                        loading={snapTransactionsLoading}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    snapTransactionsResult: state.PaymentReducer.snapTransactionsResult,
    snapTransactionsLoading: state.PaymentReducer.snapTransactionsLoading
});

export default connect(mapStateToProps)(Checkout)

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
