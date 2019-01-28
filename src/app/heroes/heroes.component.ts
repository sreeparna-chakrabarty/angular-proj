import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
//import {Country} from '../ListOfCountries';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})
export class HeroesComponent implements OnInit {
 //hero = 'Windstorm';string;
 heroes = HEROES;
 hero:Hero = {
   id : 16 ,
   name : 'Windstorm'
 }
 
 
 
  constructor() {
    
   }
  
  ngOnInit() {
    
    
  }
  selectedHero : Hero;
  onselect(hero:Hero){
    this.selectedHero = hero;
  }
  

}
