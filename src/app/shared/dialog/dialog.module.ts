import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { AlertDialogComponent } from '@app/shared/dialog/alert-dialog/alert-dialog.component';

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
