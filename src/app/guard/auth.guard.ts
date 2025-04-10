import { CanActivateFn } from '@angular/router';
import { log } from 'console';

export const authGuard: CanActivateFn = (route, state) => {
  let loginStatus = localStorage.getItem("loginStatus");
  if(loginStatus == "1"){
    return true;
  }
  return false;
};
