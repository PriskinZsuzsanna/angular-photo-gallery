import { Component, Input } from '@angular/core';
import {Beach} from '../../Beach'

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.css']
})
export class BeachComponent {
  @Input() beach: Beach;

}
