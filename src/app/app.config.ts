
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // this will ensure routing and go to app.routes.ts and load the pages 
    importProvidersFrom(HttpClientModule, FormsModule)]
};
