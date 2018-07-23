import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from 'angularfire2/firestore';
import {User} from '../app.component';

@Injectable()

export class CreateUserService {

  constructor(
    private http: HttpClient,
    private  afs: AngularFirestore
  ) {
  }

  saveUser(user: User) {
    console.log(user);
    this.afs.collection('userProfile').add(user);
  }
}
