import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Injectable({ providedIn: 'root'})
export class PlatformDetectorService {

    /// INJEÇÃO TOKEN IDENTIFICADOR PLATFORM_ID
    constructor(@Inject(PLATFORM_ID) private platformid: string) {
    }

    isPlatformBrowser() {
        return isPlatformBrowser(this.platformid);
    }
}