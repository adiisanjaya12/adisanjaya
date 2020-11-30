import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';
import { welcomeAuth } from '../../assets';
import { colors } from '../../utils';
import {IconBack, IllustrationsLogin} from '../../assets';


const Detail = ({navigation}) => {
    
   return (

    

            
    
            <View style={styles.wrapper.page}>
            <IconBack width={25} height={25} onPress={() => navigation.goBack()}/>
            <Image source={welcomeAuth} style={styles.wrapper.illustration}/>
            <Text style={styles.text.welcome}>
            Wellcome To O-jol Detai Produk
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


export default Detail;;