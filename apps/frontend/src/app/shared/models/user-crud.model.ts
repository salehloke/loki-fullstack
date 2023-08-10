export interface UserCRUDSubmitModel {
  POST: {
    email: string;
    username: string;
    phoneNumber: string;
    skillsets: string[];
    hobby?: string;
    jobTitle: string;
  };
  PUT: {
    // email: string;
    // username: string;
    phoneNumber: string;
    skillsets: string[];
    hobby?: string;
    jobTitle: string;
    completedAt?: Date;
  };
}
