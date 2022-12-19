import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService, PrimeIcons } from 'primeng/api';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    SearchPipe
  ],
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    MessageModule,
    
  ],
  exports: [
    CommonModule,
    TableModule,
    ToastModule,
    MessageModule,SearchPipe
  ],
  providers:[MessageService ]
})
export class ShareModule { }
