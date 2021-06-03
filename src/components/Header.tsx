import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

interface ThemeProps{
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export function Header({setIsDark, isDark}: ThemeProps) {
  function toggleSwitch(){setIsDark(!isDark)};

  return (
    <View style={[styles.header, { backgroundColor: (!isDark)?'#273FAD':'#3E3E3E'}]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <Switch
        style={styles.theme}
        trackColor={{ false:"#81b0ff" , true: "#767577"}}
        thumbColor={isDark ? "#f4f3f4" : "#f5dd4b"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDark}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  theme:{
    marginLeft: 10,
  }
});
