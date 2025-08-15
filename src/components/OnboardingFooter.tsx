import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const OnboardingFooter = () => {

    const router = useRouter();
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, styles.buttonPrimary]} onPress={() => router.push('/register')}>
                <Text style={[styles.buttonText, styles.buttonTextPrimary]}> Daftar</Text>
            </Pressable>

            <Pressable style={[styles.button, styles.buttonSecondary]} onPress={() => router.push('/login')}>
                <Text style={[styles.buttonText, styles.buttonTextSecondary]}> Masuk</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        width: '80%',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 12,
    },
    buttonPrimary: {
        backgroundColor: '#38761D',
        borderColor: '#fff'
    },
    buttonSecondary: {
        borderWidth: 1, // Garis tepi
        borderColor: '#FFFFFF', // Warna garis tepi
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextPrimary: {
        color: '#FFFFFF',
    },
    buttonTextSecondary: {
        color: '#FFFFFF',
    },
})