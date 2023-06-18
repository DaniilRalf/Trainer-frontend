export interface User{
  id: number;
  roleId: number | null;
  token: string | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;

  personal?: Personal;
  parameters?: Parameters[];
  schedules? : Schedules[];
}

export interface Personal {
  gender: number;
  height: number;
  birth_day: number
  start_train: number
}

export interface Parameters {
  weight: string;
  shoulder_bust: string;
  shoulder_girth: string;
  shoulder_hips: string;
  shoulder_hip: string;
  date_metering: string;
}

export interface Schedules {
  date: number;
  description: string;
}
