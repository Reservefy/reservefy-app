import * as Location from 'expo-location';
import { useCallback, useEffect, useState } from 'react';

export function useUserLocation() {
  const [location, setLocation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLocation = useCallback(async () => {
    setIsLoading(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setIsLoading(false);
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    const [addr] = await Location.reverseGeocodeAsync(loc.coords);
    const city = addr?.city || addr?.subregion || 'Unknown';
    setLocation(city);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

  return {
    location,
    isLoading,
    reloadLocation: fetchLocation,
  };
}
