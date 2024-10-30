import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
  
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDZQw9YMcs_7g1lqgesyVjrQ2RcemiDoFVd4GMk82-HuE94Fy7' }} 
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Discover Your Dream Job here</Text>
        <Text style={styles.subText}>
          Explore all the existing job roles based on your interest and study major
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7D7D7D',
  },
  buttonContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#3b5998',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  registerButton: {
    width: '80%',
    backgroundColor: '#00A86B',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default WelcomeScreen;