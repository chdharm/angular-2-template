import {Component} from 'angular2/core';
import {Video} from './videos';

@Component({
    selector:'playlist',
    templateUrl:'app/ts/playlist.component.html',
    inputs:['video']
})
export class PlaylistComponent{
    onSelect(vid:Video){
        console.log(JSON.stringify(vid));
    }
}