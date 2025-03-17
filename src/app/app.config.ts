import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withPreloading, withViewTransitions, PreloadAllModules } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'enabled', 
        anchorScrolling: 'enabled' 
      }),
      withPreloading(PreloadAllModules),
      withViewTransitions()
    ),
    provideClientHydration(),
    provideAnimations(),
    {
      provide: 'APP_VERSION',
      useValue: environment.appVersion
    },
    {
      provide: 'DEBUG_ENABLED',
      useValue: environment.debugEnabled
    }
  ]
};
