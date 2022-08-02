// This is the model for the Claim object for Claim Table in the database
// This is used for adding the claim
export interface Claim {
  claim_no?: number;
  user_id: number;
  pay_id?: number;
  date: Date;
  reason: string;
  amount: number;
  status: number;
}
