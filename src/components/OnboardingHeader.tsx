import { StyleSheet, Text, View } from 'react-native';

export const OnboardingHeader = () => {
    return (
        <View >
            <Text style={styles.title}>Poktani App</Text>
            <Text style={styles.subTitle}>
                Mulailah dengan mengelola lahan pertanian dan memantau perkembangannya
                untuk hasil optimal.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF', // Warna teks putih
        fontSize: 32, // Ukuran font
        fontWeight: 'bold', // Teks tebal
        textAlign: 'center', // Rata tengah
        marginBottom: 16, // Jarak ke bawah
    },
    subTitle: {
        color: '#E0E0E0', // Warna teks putih keabuan
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 24, // Beri sedikit jarak di kiri dan kanan
    }
})