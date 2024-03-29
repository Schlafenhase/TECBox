import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthService } from './shared/services/auth.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WarehouseConsoleComponent } from './components/warehouse-console/warehouse-console.component';
import { DeliveryConsoleComponent } from './components/delivery-console/delivery-console.component';
import { KeysPipe } from './components/admin/keys.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { CartProductComponent } from './components/cartProduct/cartProduct.component';
import { ProductService } from './shared/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { PopUpModule } from 'src/app/components/pop-up/pop-up.module';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';
import { ModifyEmployeeComponent } from './components/modify-employee/modify-employee.component';
import { ModifyWorkerComponent } from './components/modify-worker/modify-worker.component';
import { ModifySellerComponent } from './components/modify-seller/modify-seller.component';
import { ModifyRouteComponent } from './components/modify-route/modify-route.component';
import { ModifyBranchComponent } from './components/modify-branch/modify-branch.component';
import { WarehouseModifyComponent } from './components/warehouse-modify/warehouse-modify.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserProfileComponent,
    WarehouseConsoleComponent,
    DeliveryConsoleComponent,
    KeysPipe,
    AdminComponent,
    CartComponent,
    CartProductComponent,
    ModifyProductComponent,
    ModifyEmployeeComponent,
    ModifyWorkerComponent,
    ModifySellerComponent,
    ModifyRouteComponent,
    ModifyBranchComponent,
    WarehouseModifyComponent,
    ModifyUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    PopUpModule
  ],
  providers: [
    AuthService,
    ProductService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
