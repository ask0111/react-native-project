
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Modal } from 'react-native';
import SignUp from './components/signup/SignUp';
import Home from './components/home/Home';






function App(){
  
  return (
    <>
      {/* <SignUp /> */}
      <Home />
    </>
      
  );
}

const styles = StyleSheet.create({
  main:{
    
    borderWidth: 2
  }
  
});

export default App;
