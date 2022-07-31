export interface Purchase {
  id?: number;
  details_id: number;
  plan_id: number;
  dop: Date;
  end_date: Date;
  status: number;
}
