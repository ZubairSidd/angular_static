// This is the model for the User object for User Table in the database
// This is used for signup the user
export interface User {
  user_id: number;
  name: string;
  email: string;
  password: string;
  dob: Date;
  conf_password: string;
}
