import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/core/shared/share.module';

const routes:Routes=[
  {path:'',component:BaseComponent,children:[
    {path:'',loadChildren:()=>import('../../pages/pages.module').then(m=>m.PagesModule)}
  ]}
]

@NgModule({
  declarations: [BaseComponent , NavbarComponent],
  imports: [
    CommonModule,ShareModule,
    RouterModule.forChild(routes)
  ],
  exports:[BaseComponent]
})
export class BaseModule { }
