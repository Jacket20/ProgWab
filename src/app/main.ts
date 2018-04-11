import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/pluck';
import { AppModule } from './app.module';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/switchMap';
platformBrowserDynamic().bootstrapModule(AppModule);
