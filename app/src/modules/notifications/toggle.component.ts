import { Component, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'm-notifications--topbar-toggle',
  templateUrl: 'toggle.component.html'
})

export class NotificationsTopbarToggleComponent {

  toggled: boolean = false;
  minds: any = window.Minds;

  toggle(e){
    this.toggled = !this.toggled;
    console.log(this.toggled)
  }

}
