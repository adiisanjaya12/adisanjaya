/**import React from 'react';
import {IconBack} from '../../../assets';
import {TouchableOpacitiy} from 'react-native-gesture-handler';

const ButtonIcon = ({...rest}) => {
    return ( 
        <TouchableOpacitiy {...rest}>
                {rest.name === 'back' && <IconBack width={25} height={25}/>}
        </TouchableOpacitiy>
    );
};

export default ButtonIcon; */