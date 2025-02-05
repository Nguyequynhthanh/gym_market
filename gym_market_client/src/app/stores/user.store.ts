import { signalStore, withState } from '@ngrx/signals';

type UserStore = {
	fullName: string;
	id: string | null;
	phoneNumber: string;
	Address: string;
	Avatar: string;
	Status: string;
	Email: string;
	PhoneNumber: string;
    trainerId: string;
};

const initalState: UserStore = {
	fullName: 'Account',
	id: null,
	phoneNumber: '',
	Address: '',
	Avatar: '',
	Status: '',
	Email: '',
	PhoneNumber: '',
    trainerId: ''
};

export const UserStore = signalStore({ providedIn: 'root' }, withState(initalState));
