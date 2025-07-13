export interface itemList {
  jobPosition: string;
  enterprise: string;
  period: {
    start: Date;
    end?: Date;
  };
  description: string;
  skills?: string[];
}
