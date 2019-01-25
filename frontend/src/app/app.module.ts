import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {LoginUIComponent} from './login-ui/login-ui.component';
import {PaymentUIComponent} from './payment-ui/payment-ui.component';
import {CarDataUiComponent} from './car-data-ui/car-data-ui.component';
import {CustomerInfoUIComponent} from './customer-info-ui/customer-info-ui.component';
import {CarserviceUiComponent} from './carservice-ui/carservice-ui.component';
import {AuthGuardService} from './service/auth-guard.service';
import {HospitalUIComponent} from './hospital-ui/hospital-ui.component';

const routes: Routes = [
  {path: 'login', component: LoginUIComponent},
  {path: 'cardata', component: CarDataUiComponent},
  {path: 'payment', component: PaymentUIComponent},
  {path: 'customer', component: CustomerInfoUIComponent},
  {path: 'carservice', component: CarserviceUiComponent},
  {path: 'hospital', component: HospitalUIComponent , canActivate: [AuthGuardService]},
  {path: '', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginUIComponent,
    CarDataUiComponent,
    PaymentUIComponent,
    CarserviceUiComponent,
    HospitalUIComponent,
    CustomerInfoUIComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
