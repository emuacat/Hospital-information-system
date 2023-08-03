<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/patients">Patients</a>
  <a routerLink="/appointments">Appointments</a>
  <a routerLink="/billing">Billing</a>
  <a routerLink="/medical-records">Medical Records</a>
  <a routerLink="/staff">Staff</a>
</nav>
<router-outlet></router-outlet>

{ path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BillingComponent } from './billing/billing.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'medical-records', component: MedicalRecordsComponent },
  { path: 'staff', component: StaffComponent },
  // You can also redirect unmatched paths to the home component
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BillingComponent } from './billing/billing.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { StaffComponent } from './staff/staff.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientsComponent,
    AppointmentsComponent,
    BillingComponent,
    MedicalRecordsComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

