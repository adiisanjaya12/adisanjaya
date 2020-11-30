import React, { useEffect } from 'react';
import {View, Text, Image, Button} from 'react-native';
import { welcomeAuth } from '../../assets';
import { colors } from '../../utils';

const Home = ({navigation}) => {
    
   return (
        <View style={styles.wrapper.page}>
            <Image source={welcomeAuth} style={styles.wrapper.illustration}/>
            <Text style={styles.text.welcome}>
            Wellcome To O-jol Profile
            </Text>

            <View style={styles.space(50)}/>
            <Button title="Go to Detail" onPress={() => navigation.navigate("Detail")}/>
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

    space: (value) => {
        return {
            height: value,
        }
}
};
export default Home;