import { writable } from 'svelte/store';

export const actPage = writable(0);
export const user = writable(null);
export const profil = writable(null);
export const isOpen = writable(false);
