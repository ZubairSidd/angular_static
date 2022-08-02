// This is the model for the Plan object for Plan Table in the database

export interface Plan {
  plan_id: number;
  type: string;
  plan_details: number;
  amount: number;
  policy_number: number;
}
