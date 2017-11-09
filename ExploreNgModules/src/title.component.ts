import { UserService } from './user.service';
import { Component, Input } from '@angular/core';
import { HighlightDirective } from './highlight.directive'

@Component({
    selector:'app-title',
    templateUrl: './title.component.html'
})
export class TitleComponent {
    @Input() subTitle = '';
    title = 'Exploring NgModule'
    user = '';

    constructor(userService:UserService) {
        this.user = userService.userName;
    }
}