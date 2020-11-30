import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { Input, Button } from '../../components';
import { colors } from '../../utils';
import {IconBack, IllustrationsLogin} from '../../assets';
import { ScrollView, TouchableOpacitiy } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Login = ({navigation}) => {
   const RegisterReducer = useSelector(state => state.RegisterReducer);
    const [form, setForm] = useState ({
        fullname: '',
        password: '',
    });
    
    
    const sendData = () => {
        console.log('data yang dikirim', form);
    };

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };
    return (
        <View style={styles.wrapper.page}>
            <ScrollView showsVerticalScrollIndicator={false}>

           
            <IconBack width={25} height={25} onPress={() => navigation.goBack()}/>
            

            <IllustrationsLogin width={106} height={110} style={styles.ilustration} />


            <Text 
                style={styles.text.desc}>
                Mohon mengisi beberapa data untuk proses Login anda
            </Text>
             <View style={styles.space(30)} />
            <Input 
                placeholder="Nama lengkap" 
                value={form.fullname} 
                onChangeText={(value) => onInputChange(value, 'fullname') }
                />

            <View style={styles.space(15)} />
            <Input 
                placeholder="password" 
                value={form.password} 
                onChangeText={(value) => onInputChange(value, 'password')}
                secureTextEntry={true}
                />
            <View style={styles.space(50)}/>
            <Button title="Login" onPress={() => navigation.navigate("Home")}/>
            </ScrollView>
        </View>
    );
};

const styles = {
    wrapper: {
        page:{padding: 20}
    },
    ilustration: {
        marginTop: 30
    },
    text: {
        desc: {
                fontSize: 14, 
                fontWeight: 'bold', 
                color: colors.default, 
                marginTop: 16,
                marginBottom: 10,
                maxWidth: 200,
        },
    },
    space: (value) => {
        return {
            height: value,
        };
    },
};

export default Login;