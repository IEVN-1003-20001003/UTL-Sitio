import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent {

  
 
  constructor(private router: Router) { }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      //Navega a la ruta y evita la recarga de la página
      this.router.navigate([], {
        fragment: sectionId,
        queryParamsHandling: 'merge',
        preserveFragment: true
      });
    }
  }

  navigateToAspirantes(): void {
    this.router.navigate(['/Aspirantes'])

    setTimeout(() => {
      const ofertaedu = document.getElementById('oferta-educativa');
      const contacto = document.getElementById('contactanos');
      const comoestudiar = document.getElementById('como-estudiar-en-utl');
      if (ofertaedu) {
        ofertaedu.scrollIntoView({ behavior: 'smooth' });
      }

      if (contacto) {
        contacto.scrollIntoView({ behavior: 'smooth' })
      }

      if (comoestudiar) {
        comoestudiar.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  navigateToAlumnos(): void {
    this.router.navigate(['/Alumnos'])

    setTimeout(() => {
      const tramites = document.getElementById('tramites-escolares');
      const sito = document.getElementById('sito');
      const aula = document.getElementById('aula-virtual');
      const servicios = document.getElementById('servicios');
      const calendario = document.getElementById('calendario');
      const correoins = document.getElementById('correo-institucional');
      const becas = document.getElementById('becas');
      const biblioteca = document.getElementById('biblioteca');
      const normativa = document.getElementById('normativa');
      const quejas = document.getElementById('quejas');


      if (tramites) {
        tramites.scrollIntoView({ behavior: 'smooth' });
      }

      if (sito) {
        sito.scrollIntoView({ behavior: 'smooth' })
      }

      if (aula) {
        aula.scrollIntoView({ behavior: 'smooth' })
      }

      if (servicios) {
        servicios.scrollIntoView({ behavior: 'smooth' })
      }

      if (calendario) {
        calendario.scrollIntoView({ behavior: 'smooth' })
      }

      if (correoins) {
        correoins.scrollIntoView({ behavior: 'smooth' })
      }

      if (becas) {
        becas.scrollIntoView({ behavior: 'smooth' })
      }

      if (biblioteca) {
        biblioteca.scrollIntoView({ behavior: 'smooth' })
      }

      if (normativa) {
        normativa.scrollIntoView({ behavior: 'smooth' })
      }

      if (quejas) {
        quejas.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  navigateToDocentes(): void {
    this.router.navigate(['/Docentes'])

    setTimeout(() => {
      const recursos = document.getElementById('recursos');
      const desarrollo = document.getElementById('desarrollo');
      const investigacion = document.getElementById('investigacion-utl');
      const salud = document.getElementById('salud');
      const sito = document.getElementById('sito');
      const correoins = document.getElementById('correo-institucional');
      const biblioteca = document.getElementById('biblioteca');
      const normativa = document.getElementById('normativa');


      if (recursos) {
        recursos.scrollIntoView({ behavior: 'smooth' });
      }

      if (sito) {
        sito.scrollIntoView({ behavior: 'smooth' })
      }

      if (salud) {
        salud.scrollIntoView({ behavior: 'smooth' })
      }

      if (investigacion) {
        investigacion.scrollIntoView({ behavior: 'smooth' })
      }

      if (desarrollo) {
        desarrollo.scrollIntoView({ behavior: 'smooth' })
      }

      if (correoins) {
        correoins.scrollIntoView({ behavior: 'smooth' })
      }

      if (biblioteca) {
        biblioteca.scrollIntoView({ behavior: 'smooth' })
      }

      if (normativa) {
        normativa.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  navigateToAdmin(): void {
    this.router.navigate(['/Administrativo'])

    setTimeout(() => {
      const recursosadm = document.getElementById('recursos-admin');
      const desarrollohm = document.getElementById('desarrollo-human');
      const seguridad = document.getElementById('seguridad');
      const salud = document.getElementById('salud');



      if (recursosadm) {
        recursosadm.scrollIntoView({ behavior: 'smooth' });
      }

      if (desarrollohm) {
        desarrollohm.scrollIntoView({ behavior: 'smooth' })
      }

      if (salud) {
        salud.scrollIntoView({ behavior: 'smooth' })
      }

      if (seguridad) {
        seguridad.scrollIntoView({ behavior: 'smooth' })
      }

    }, 100)
  }

  navigateToEmpre(): void {
    this.router.navigate(['/Empresario'])

    setTimeout(() => {
      const vinculacion = document.getElementById('recursos-admin');
      const serviciosind = document.getElementById('servicios-industria');
      const programas = document.getElementById('programas-educativos');
      const contacto = document.getElementById('contacto');



      if (vinculacion) {
        vinculacion.scrollIntoView({ behavior: 'smooth' });
      }

      if (serviciosind) {
        serviciosind.scrollIntoView({ behavior: 'smooth' })
      }

      if (programas) {
        programas.scrollIntoView({ behavior: 'smooth' })
      }

      if (contacto) {
        contacto.scrollIntoView({ behavior: 'smooth' })
      }

    }, 100)
  }

  navigateToEgre(): void {
    this.router.navigate(['/Egresado'])

    setTimeout(() => {
      const bolsa = document.getElementById('bolsa-de-trabajo');
      const emprendimiento = document.getElementById('emprendimiento');
      const educacion = document.getElementById('educacion-continua');

      if (bolsa) {
        bolsa.scrollIntoView({ behavior: 'smooth' });
      }

      if (emprendimiento) {
        emprendimiento.scrollIntoView({ behavior: 'smooth' })
      }

      if (educacion) {
        educacion.scrollIntoView({ behavior: 'smooth' })
      }


    }, 100)
  }
}
