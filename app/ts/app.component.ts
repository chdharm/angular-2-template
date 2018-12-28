import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './videos';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

// export class AppComponent {
//     mainHeading="Dharmpal's Videos's"
// }
export class AppComponent2 {
    // mainHeading="Dharmpal's Videos's2"
    mainHeading=Config.MAIN_HEADER;
    video:Array<Video>;

    constructor(){
        this.video=[
            new Video(1,"Abhi Mujh me Kahi!","oWKgpB2zpgw","Hritik Roshan"),
            new Video(2,"Kun Faya Kun!","T94PHkuydcw","Ranbir Kapoor"),
            new Video(2,"Rab Na kare ki ye zindagi!","maC8FQBPPsE","Random Guy")
        ]
    }
}
