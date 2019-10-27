import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-new',
  templateUrl: './workout-new.page.html',
  styleUrls: ['./workout-new.page.scss'],
})
export class WorkoutNewPage implements OnInit {
  newWorkout = { activity: '', description: '', time: 0 };

  constructor( private workoutService: WorkoutService,
               private router: Router ) { }

  ngOnInit() {
  }

  addWorkout() {
    console.log(this.newWorkout);
    this.workoutService.addWorkout(this.newWorkout)
      .then(data => {
        console.log(data);
        this.router.navigateByUrl('/list');
      })
      .catch(error => {
        console.log(error);
      });
  }

  inputCheck() {
    return (this.newWorkout.description == '');
  }

}