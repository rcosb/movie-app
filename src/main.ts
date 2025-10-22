import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // ✅ Adicionar withInterceptors
import { IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Se você criou o interceptor, importe corretamente
// Se não criou ainda, vamos criar primeiro

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // ✅ Por enquanto, sem interceptor até criarmos ele
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
});