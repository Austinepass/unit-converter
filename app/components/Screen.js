import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constant from "expo-constants";

function Screen({children}) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: Constant.statusBarHeight
  }
});

export default Screen;