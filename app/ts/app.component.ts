import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './videos';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    template: '<h1>{{mainHeading}}</h1>'
})

// export class AppComponent {
//     mainHeading="Dharmpal's Videos's"
// }
export class AppComponent2 {
    // mainHeading="Dharmpal's Videos's2"
    mainHeading=Config.MAIN_HEADER;
}
