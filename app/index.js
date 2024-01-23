import React, { useEffect, useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, SafeAreaView, Image, StyleSheet, Animated } from 'react-native';

export default function Index() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();

    // Simulate some loading process
    setTimeout(() => {
      router.replace('/home')
    }, 1500); // Adjust the timeout as needed
  }, [fadeAnim, scaleAnim, router]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.logoContainer}>
        <Animated.Image
          source={require('../Assets/Logo/logo.png')}
          style={[
            styles.logo,
            { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 'auto',
    height: 48,
  },
  logoContainer: {
    width: 325,
    height: 'auto',
  },
});