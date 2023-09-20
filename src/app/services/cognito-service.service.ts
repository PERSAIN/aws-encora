import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CognitoServiceService {
  constructor() {
    Amplify.configure({
      Auth: environment.cognito,
    });
  }

  public signUp(user: User): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
      attributes: {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
      },
    });
  }

  public confirmSignUp(user: User) {
    return Auth.confirmSignUp(user.email, user.code);
  }
}
