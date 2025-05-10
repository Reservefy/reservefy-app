import { PropsWithChildren, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n, { initI18n } from '../../i18n.config'; // Make sure `initI18n()` is exported

export function I18nProvider({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n().then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
