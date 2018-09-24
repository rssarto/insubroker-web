import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AlertDialogComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  entryComponents: [
    AlertDialogComponent
  ],
  exports: [AlertDialogComponent]
})
export class DialogModule {

}
