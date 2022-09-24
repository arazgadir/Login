import React from 'react';
import { View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../assets/svg/backButton';
import { Logo } from '../../../assets/svg/logo';
import { styles } from './styles';

export const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.containter}>
            <Logo />
            <Pressable onPress={() => navigation.goBack()}>
                <BackButton />
            </Pressable>
        </View>
    )
}