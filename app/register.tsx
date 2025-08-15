import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            {/* Kita akan menggunakan ScrollView agar bisa di-scroll jika tidak muat */}
            {/* Tapi untuk sekarang, kita biarkan dulu agar fokus pada input */}
            <Text style={styles.title}>Buat Akun Baru</Text>
            <Text style={styles.subtitle}>Silahkan isi data diri Anda</Text>

            {/* Name Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nama Lengkap</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan nama lengkap Anda"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            {/* Email Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="contoh@email.com"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* Phone Number Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nomor Handphone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="08123456789"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>

            {/* Address Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Alamat Lengkap</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan alamat lengkap Anda"
                    value={address}
                    onChangeText={setAddress}
                />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Kata Sandi</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Buat kata sandi Anda"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            {/* Password Confirmation Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Konfirmasi Kata Sandi</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ketik ulang kata sandi Anda"
                    secureTextEntry
                    value={passwordConfirmation}
                    onChangeText={setPasswordConfirmation}
                />
            </View>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Daftar</Text>
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