
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleRegistration = () => {
    // Perform registration logic here, e.g., send data to server for processing
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Mobile Number:', mobileNumber);
    console.log('Date of Birth:', dateOfBirth);

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    setMobileNumber('');
    setDateOfBirth('');
  };

  return (
    <View style={styles.container}>
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      <Button style={{alignItems: 'end'}} title="Register" onPress={handleRegistration} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    borderColor: 'red',
    borderWidth: 4,
  },
  box: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
    padding: 20,
    elevation: 5,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default SignUp;