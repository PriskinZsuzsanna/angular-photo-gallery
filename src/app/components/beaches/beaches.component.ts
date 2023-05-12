import { Component } from '@angular/core';
import {Beach} from '../../Beach';
import {BEACHES} from '../../mock-beaches';

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css']
})
export class BeachesComponent {
  beaches: Beach [] = BEACHES;
}
