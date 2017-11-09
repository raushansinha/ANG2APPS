//Main ts file is used to bootstap root module in browser using SystemJS

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platformBrowser = platformBrowserDynamic();

platformBrowser.bootstrapModule(AppModule);