import { useOnboarding } from '@/stores/use-onboarding';
import { Redirect } from 'expo-router';

const Middleware = () => {
  const { visited, canVisitAgain } = useOnboarding();

  if (visited && !canVisitAgain) return <Redirect href="/(tabs)" />;

  return <Redirect href="/(website)" />;
};

export default Middleware;
