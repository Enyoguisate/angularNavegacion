import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PrincipalPage, TabsPage, AjustesPage, Ajustes2Page, Pagina2Page, Pagina3Page, ModalPage } from '../pages/index.pages';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage, 
    TabsPage, 
    AjustesPage, 
    Ajustes2Page, 
    Pagina2Page, 
    Pagina3Page,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage, 
    TabsPage, 
    AjustesPage, 
    Ajustes2Page, 
    Pagina2Page, 
    Pagina3Page,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
