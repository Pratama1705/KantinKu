import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import { updatePesanan } from '../actions/PesananActions';
import { colors } from '../utils';

export class Midtrans extends Component {

    componentDidMount() {
        // console.log("param : ", this.props.route.params);
        if (this.props.route.params.order_id) {
            this.props.dispatch(updatePesanan(this.props.route.params));
        }
    }

    onMessage = (data) => {
        if(data.nativeEvent.data === "Selesai") {
            this.props.navigation.replace('HistoryPemesanan')
        }
    }

    render() {
        const { updatePesananLoading } = this.props
        return (
            <>
                {updatePesananLoading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                ) : (
                    <WebView source={{ uri: this.props.route.params.url }} onMessage={this.onMessage} />
                )}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    updatePesananLoading: state.PesananReducer.updatePesananLoading
})

export default connect(mapStateToProps, null)(Midtrans)

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        marginTop: 10,
        marginBottom: 50,
    }
})
