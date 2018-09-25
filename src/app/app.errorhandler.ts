import { ErrorHandler } from '@angular/core';
import { LogService } from '@app/shared/service/log.service';
import { Router } from '@angular/router';
import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN } from 'http-status-codes';
import { DialogService } from '@app/shared/dialog/dialog.service';

export class AppErrorHandler implements ErrorHandler {

  static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string =
    'Aconteceu um erro inesperado: Por favor clique nesta mensagem para tentar novamente';

  static readonly DEFAULT_ERROR_TITLE: string = 'Ops, alguma coisa deu errado.';

  constructor(private logService: LogService, private router: Router, private dialogService: DialogService) {}

  public handleError(error: any) {
    this.logService.log(error);
    const httpErrorCode = error.httpErrorCode;
    switch (httpErrorCode) {
      case UNAUTHORIZED:
          this.router.navigate(['login']);
          break;
      case FORBIDDEN:
          this.router.navigate(['unauthorized']);
          break;
      case BAD_REQUEST:
         this.showError(error.message);
          break;
      default:
         this.showError(AppErrorHandler.REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE);
    }
  }

  showError(message: string) {
    this.dialogService.alertSnackBar(message);
  }
}
