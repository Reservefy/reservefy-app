import { Button } from '@/components/ui/button';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

interface IRegisterProps {}

const Register: React.FC<IRegisterProps> = (props) => {
  const router = useRouter();
  return (
    <View>
      <Text>Register</Text>
      <Link href="/(auth)" asChild>
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
