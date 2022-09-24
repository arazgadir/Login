import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    containter: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    titleText: {
        color: 'blue',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 20
    },
    input: {
        borderRadius: 8,
        borderColor: 'blue',
        width: '80%',
        paddingVertical: 5,
        borderWidth: 2,
        backgroundColor: '#BDC3C7',
        paddingLeft: 10,
        marginVertical: 10,
        flexDirection: 'row'
    },
    submit: {
        width: '50%',
        backgroundColor: '#F7DC6F',
        paddingVertical: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    infoText: {
        alignSelf: 'flex-start',
        paddingLeft: 40,
        color: '#333333',
        fontSize: 14,
        fontWeight: '500'
    },
    submitText: {
        fontSize: 14,
        fontWeight: '500'
    }
})