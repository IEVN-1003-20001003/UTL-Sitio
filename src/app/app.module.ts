import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule} from '@angular/material/tabs'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'

import { AppComponent } from './app.component';
import { PrototipoComponent } from './UtlWeb/prototipo/prototipo.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AspirantesComponent } from './aspirantes/aspirantes.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DocentesComponent } from './docentes/docentes.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { EmpresarioComponent } from './empresario/empresario.component';
import { EgresadoComponent } from './egresado/egresado.component';

@NgModule({
  declarations: [
    AppComponent,
    PrototipoComponent,
    AlumnosComponent,
    AspirantesComponent,
    HomeComponent,
    DocentesComponent,
    AdministrativoComponent,
    EmpresarioComponent,
    EgresadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
