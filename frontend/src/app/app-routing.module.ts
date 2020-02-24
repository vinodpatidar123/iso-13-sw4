import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HeroComponent } from './hero/hero.component';


const routes: Routes = [
  {path:'patient', component: PatientComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'hospital', component: HospitalComponent},
  {path: '', component: HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
