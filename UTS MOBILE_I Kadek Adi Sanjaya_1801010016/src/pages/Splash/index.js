import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';
import { welcomeAuth } from '../../assets';
import { colors } from '../../utils';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth');
        }, 3000);
    });


   return (
        <View style={styles.wrapper.page}>
            <Image source={welcomeAuth} style={styles.wrapper.illustration}/>
            <Text style={styles.text.welcome}>
            Selamat Datang di O-jol
            </Text>
        </View>
    );
};

const styles = {
    wrapper: {
        page: {
            alignItems: 'center', 
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white',
        },
        illustration: {
                width: 160, 
                height: 150, 
                marginBottom: 5,
                },
        },

        text: {
            welcome: {
                    fontSize: 18, 
                    fontWeight: 'bold', 
                    color: colors.default, 
                    marginBottom: 76,
        },
    },
};
export default Splash;