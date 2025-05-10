import { Redirect } from 'expo-router';

const Page = () => {
  const visited = true;

  if (visited) return <Redirect href="/(tabs)" />;

  return <Redirect href="/(auth)/login" />;
};

export default Page;
