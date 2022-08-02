// This is the model for the Detail object for Detail Table in the database
// This is used for vehicle details
export interface Detail {
  id?: number;
  user_id?: number;
  manufacturer: string;
  model: string;
  purchase_date: Date;
  reg_number?: string;
  engine_number?: number;
  driving_license: string;
  chasis_number?: string;
  address: string;
  type: string;
}
