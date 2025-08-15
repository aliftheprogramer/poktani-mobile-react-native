import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Selamat Datang Kembali</Text>
            <Text style={styles.subtitle}>Silahkan masuk untuk melanjutkan</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>No Hp</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Masukan no Hp anda'
                    keyboardType='phone-pad'
                    value={identifier}
                    onChangeText={setIdentifier} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Kata Sandi</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan kata sandi Anda"
                    secureTextEntry // Ini akan membuat teks menjadi ••••
                    value={password} // Tampilkan isi "papan tulis" password
                    onChangeText={setPassword} // Update "papan tulis" password
                />
            </View>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Masuk</Text>
            </Pressable>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38761D',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});