export interface developmentItemList {
  course: string;
  institute: string;
  period: {
    start: Date;
    end?: Date;
  };
  description?: string;
}
