import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AspirantesComponent } from "./aspirantes/aspirantes.component";
import { PrototipoComponent } from "./UtlWeb/prototipo/prototipo.component";
import { AlumnosComponent } from "./alumnos/alumnos.component";
import { DocentesComponent } from "./docentes/docentes.component";
import { AdministrativoComponent } from "./administrativo/administrativo.component";
import { EmpresarioComponent } from "./empresario/empresario.component";
import { EgresadoComponent } from "./egresado/egresado.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
    { path: '', redirectTo: 'UTL', pathMatch: 'full' },
    { path: 'UTL', component: PrototipoComponent },
    { path: 'Aspirantes', component: AspirantesComponent },
    { path: 'Alumnos', component: AlumnosComponent },
    { path: 'Docentes', component: DocentesComponent},
    { path: 'Administrativo', component: AdministrativoComponent},
    { path: 'Empresario', component: EmpresarioComponent},
    { path: 'Egresado', component: EgresadoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
