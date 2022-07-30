export interface Detail {
  id?: number;
  user_id?: number;
  manufacturer: string;
  model: string;
  purchase_date: Date;
  reg_number?: number;
  engine_number?: number;
  driving_license: string;
  chasis_number?: string;
  address: string;
  type: string;
}
