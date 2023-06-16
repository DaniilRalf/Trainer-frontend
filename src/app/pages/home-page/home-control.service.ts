import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class HomeControlService {

  constructor(
    private router: Router,
  ) { }

  public scroll(elem: HTMLElement): void {
    elem.scrollIntoView({behavior: 'smooth'})
  }

  public navigate(url: string): void {
    this.router.navigate([url])
  }

}
