export interface Claim {
  claim_no?: number;
  user_id: number;
  pay_id?: number;
  date: Date;
  reason: string;
  amount: number;
  status: number;
}
