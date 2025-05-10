import { Button } from '@/components/ui/button';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Register: React.FC = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Register</Text>
      <Link href="/(auth)/login" asChild>
        <Button>
          <Text>Navigate to login</Text>
        </Button>
      </Link>

      <Button onPress={() => router.dismissTo('/')}>
        <Text>Go back</Text>
      </Button>
    </View>
  );
};

export default Register;
