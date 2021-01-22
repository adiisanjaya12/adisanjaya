import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.rincian}>        
                    <Text style={styles.fontPesan}>Rincian Pesanan</Text>
                </View>

                <View>
                <View style={styles.pesanan} >
                    <Text style={styles.fontorder}> Catatan : </Text>
                    <Text> Ayam Panggang Sambalnya Pedas </Text>
                </View>
                </View>

                <View style={{ borderBottomWidth: 1, borderColor: "#000000", }}></View>


                <View style={styles.pesanan}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 20 }}>
                        <Text style={styles.fontorder}>1x</Text>
                        <Text>Ayam panggang</Text>
                        <Text>25K</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 25 }}>
                        <Text style={styles.fontorder}>1x</Text>
                        <Text>Nasi Goreng Pedas</Text>
                        <Text>20K</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 25 }}>
                        <Text style={styles.fontorder}>1x</Text>
                        <Text>Sate Kambing Spesial</Text>
                        <Text>25K</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 15 }}>
                        <Text style={styles.fontorder}>1x</Text>
                        <Text>Sate Ayam Spesial</Text>
                        <Text>20K</Text>
                    </View>
                    
                    <View style={{ borderBottomWidth: 1, borderColor: "#000000", marginBottom: 20 }}></View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
                        <Text style={styles.fontorder}>Subtotal</Text>
                        <Text>90K</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 20, color:'#ffffff' }}>
                        <Text style={styles.fontorder}> PPN (10%) </Text>
                        <Text>11K</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: "#000000", marginBottom: 15 }}></View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={styles.fontorder}>Total Harga</Text>
                        <Text>Rp 111.000</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.fontPesan}>Terima Pesanan</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flex: 1,
    },
    pesanan: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 5,
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        backgroundColor: '#00FF00',
        height: 55,
        borderRadius: 5,
    },
    fontPesan: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    rincian: {
        backgroundColor: '#00FF00',
        padding: 10,
        display: "flex",
        alignItems: 'center',

    },
    fontorder: {
        color: '#808080',
        fontSize: 15,
        fontWeight: 'bold',
    },

})