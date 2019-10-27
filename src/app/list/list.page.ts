import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  // items = this.expenseService.expenses;

  constructor( private userService: UserService,
               private workoutService: WorkoutService,
               private router: Router ) {
  }

  ngOnInit() {
  }

  onSelect(workout) {
    console.log(workout);
    this.workoutService.selectedWorkout = workout;
    this.router.navigateByUrl('/workout-detail');
  }

  newWorkout() {
    this.router.navigateByUrl('/workout-new');
  }

}