import { Component, OnInit, ViewEncapsulation } from '@angular/core'; 

@Component({
  templateUrl: './video.component.html',
  selector: 'app-video',
  encapsulation: ViewEncapsulation.None
})
export class VideoComponent implements OnInit {
  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}