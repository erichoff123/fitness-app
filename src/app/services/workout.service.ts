import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  public workout = [];
  public selectedWorkout: any;
  ref = firebase.database().ref('workouts/');

  constructor() {
    this.ref.on('value', resp => {
      this.workout = [];
      this.workout = snapshotToArray(resp);
      console.log(this.workout);
    });
  }

  addWorkout (workout) {
    workout['user'] = firebase.auth().currentUser.email;
    return firebase.database().ref('workouts/').push(workout);
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
};