import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Kontak from './kontak';

const Home = ({ navigation }) => {
  const handlePress = (gambar, judul, telpon) => {
    navigation.navigate('About', { gambar, judul, telpon });
  };

  return (
    <View style={styles.container}>
      <Kontak
      gambar={require('../assets/jeyy.jpg')}
        judul="Fajar"
      />
      <Button
        title="Deskripsi"
        onPress={() => handlePress(require('../assets/jeyy.jpg'), 'Fajar Budiman', '085758225942')}
      />

      <Kontak
      gambar={require('../assets/akmel.jpg')}
        judul="Akmal"
      />
      <Button
        title="Deskripsi"
        onPress={() => handlePress(require('../assets/akmel.jpg'), 'Akmal', '085681122021')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
