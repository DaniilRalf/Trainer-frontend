import {TrainingEnum} from "../enums/training-enum";

export interface User{
  id: number;
  roleId: number | null;
  token: string | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  is_active: boolean;

  personal?: Personal;
  parameters?: Parameters[];
  schedules? : Schedules[];
  photos?: Photo[];
  feed?: Feed;
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
  id: number;
  date: number;
  description: TrainingEnum | string;
  time_duration: string;
  time_start: string;
}

export interface Photo {
  id: number;
  file_name: string;
  date: number;
  angle: string;
  type: number;
}

export interface Feed {
  id: number;
  protein: string;
  fat: string;
  carbohydrates: string;
  recommendation: string;
}
