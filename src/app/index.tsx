import { Redirect } from 'expo-router';

const Page = () => {
  const visited = true;
  if (visited) return <Redirect href="/" />;

  return <Redirect href="/" />;
};

export default Page;
