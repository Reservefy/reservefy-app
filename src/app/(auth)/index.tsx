import { Button } from '@/components/ui/button';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

interface ILoginProps {}

const Login: React.FC<ILoginProps> = (props) => {
  return (
    <View>
      <Text>Login</Text>
      <Link href="/(auth)/register" asChild>
        <Button>
          <Text>Navigate to register</Text>
        </Button>
      </Link>
    </View>
  );
};

export default Login;
