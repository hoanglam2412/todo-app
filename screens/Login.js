import React,{useState} from 'react'
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Keyboard,
    Alert
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Logo from '../images/logo.png'


export default function Login(props){
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        if(username.trim() === 'test' && password.trim() === '12345') {
            Alert.alert('OKKKKKKKK')
        }
        else{
        Alert.alert('Tài khoản hoặc mật khẩu không chính xác.')
    }}
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.content}>
                <Image
                    source={Logo}
                    style={styles.logo}
                ></Image>
                <TextInput
                    style={styles.input}
                    placeholder='Tên tài khoản'
                    value={username}
                    onChangeText={text => setUsername(text)}
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder='Mật khẩu'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                ></TextInput>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    logo: {
        width:64,
        height:64,
        resizeMode: 'contain'
    },
    input: {
        width:200,
        backgroundColor: 'rgba(0,0,0,.1)',
        borderRadius: 7,
        marginBottom: 20,
        paddingHorizontal: 20
    },
    button: {
        width: 100,
        backgroundColor: '#000',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        
        padding:15
    },
    textButton: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})