import NetInfo from "@react-native-community/netinfo";
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CheckInternet = ({ isConnected, setIsConnected }) => {
    useEffect(() => {
        // Subscribe
        
        const unsubscribe = NetInfo.addEventListener(state => {
            // console.log("Connection type", state.type);
            // console.log("Is connected?", state.isConnected);
            setIsConnected(state.isConnected)
        });

        // Unsubscribe
        return () => {
            unsubscribe();
        }
    }, []);

    const CheckConnections = () => {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setIsConnected(state.isConnected)
        });
    }

    return (
        <View style={[styles.container, { borderColor: isConnected === true ? null : '#FFF' }]}>
            {isConnected === true ? null : (
                <View style={styles.container}>
                    <Button title="No internet connection" />
                    <Text style={styles.message}>{isConnected === true ? "" : "NO Internet Connection"}</Text>

                    <TouchableOpacity
                        style={styles.refresh}
                        onPress={() => {
                            CheckConnections();
                        }}>
                        <Text style={styles.text}>Reload</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default CheckInternet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    message: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20,
    },
    refresh: {
        backgroundColor: 'black',
        height: 50,
        width: 70,
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        color: '#ffffff'
    }
});
