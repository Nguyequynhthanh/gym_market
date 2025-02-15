import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ROLES } from '../utilities/roles.const';
import { AccountService } from '../account/account.service';

export const agencyGuard: CanActivateFn = (route, state) => {
	const accountService = inject(AccountService);
	const router = inject(Router);
	const isLoggedIn = accountService.isLogedIn();
	const role = accountService.getRole();

    if(isLoggedIn === true && role === ROLES.TRAINER) {
        return true;
    }

	router.navigateByUrl('/');
	return false;
};
