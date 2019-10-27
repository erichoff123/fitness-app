import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.page.html',
  styleUrls: ['./workout-detail.page.scss'],
})
export class WorkoutDetailPage implements OnInit {
  workout = this.workoutService.selectedWorkout;

  constructor( private workoutService: WorkoutService ) { }

  ngOnInit() {
    console.log(this.workout);
  }

}