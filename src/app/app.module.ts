import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RechnungenComponent } from './rechnungen/rechnungen.component';
import { AuftraegeComponent } from './auftraege/auftraege.component';
import { GutschriftenComponent } from './gutschriften/gutschriften.component';
import { AngeboteComponent } from './angebote/angebote.component';
import { AufmasseComponent } from './aufmasse/aufmasse.component';
import { ZahlungenComponent } from './zahlungen/zahlungen.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavigationComponent,
    RechnungenComponent,
    AuftraegeComponent,
    GutschriftenComponent,
    AngeboteComponent,
    AufmasseComponent,
    ZahlungenComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
