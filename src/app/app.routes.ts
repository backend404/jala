import { Routes } from '@angular/router';
import { AddproductComponent } from './Component/addproduct/addproduct.component';
import { MasterComponent } from './Component/master/master.component';
import { CatagorylistComponent } from './Component/catagorylist/catagorylist.component';
import { EditComponent } from './Component/edit/edit.component';
import { CartComponent } from './Component/cart/cart.component';
import { AddingproductComponent } from './Component/addingproduct/addingproduct.component';

export const routes: Routes = [
    {path: '', redirectTo: '/master', pathMatch: 'full'}
    {path: 'add', component:AddproductComponent},
    {path: 'master', component:MasterComponent},
    {path: 'catagory', component:CatagorylistComponent},
    {path:"details/:id" , component:EditComponent},
    {path:"card" , component:CartComponent},
    {path:"adding" , component:AddingproductComponent},

];
