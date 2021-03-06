import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import {
  ApiService,
  AuthGuard,
  LprGuard,
  JwtService,
  ProfileService,
  UserService,
  ClaimService,
  DocumentService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    AuthGuard,
    JwtService,
    ProfileService,
    UserService,
    ClaimService,
    LprGuard,
    DocumentService
  ],
  declarations: []
})
export class CoreModule { }
