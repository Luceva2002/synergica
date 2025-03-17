import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  
  // Disabilitiamo i log in produzione
  if (window.console) {
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    window.console.log = () => {};
    window.console.warn = () => {};
    
    // Conserviamo l'errore originale per i casi critici
    window.console.error = (message?: any, ...optionalParams: any[]) => {
      if (message && typeof message === 'string' && message.includes('[CRITICAL]')) {
        originalConsoleError(message, ...optionalParams);
      }
    };
  }
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('[CRITICAL] Errore di avvio applicazione:', err));
