import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { LOCAL_STORAGE_USER_EMAIL } from 'src/constants/data';

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanLoad, CanActivate {

    public constructor(private storageService: StorageService) { }

    public canLoad(): boolean {
        return this.hasAccess();
    }

    public canActivate(): boolean {
        return this.hasAccess();
    }

    private hasAccess(): boolean {
        // return this.storageService.get(LOCAL_STORAGE_USER_EMAIL) !== undefined;
        return true;
    }
}
