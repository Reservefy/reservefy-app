import { useOnboarding } from '@/stores/useOnboarding';
import { Redirect } from 'expo-router';

const Page = () => {
  const { visited, canVisitAgain } = useOnboarding();

  if (visited && !canVisitAgain) return <Redirect href="/(tabs)" />;

  return <Redirect href="/(website)" />;
};

export default Page;
