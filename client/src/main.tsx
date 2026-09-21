import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MaxUI } from '@maxhub/max-ui';
import '@maxhub/max-ui/dist/styles.css';

import '@/app/styles/index.css'
import { App } from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MaxUI>
        <App />
    </MaxUI>
  </StrictMode>
)
