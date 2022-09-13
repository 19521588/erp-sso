export interface UserComp {
  content: {
    id: string;
    compId: string;
    userId: string;
    appUser: {
      createdAt: string;
      createdBy: string;
      email: string;
      enabled: string;
      id: string;
      modifiedAt: string;
      modifiedBy: string;
      password: string;
      phone: string;
      resetPasswordToken: string;
      username: string;
      firstName: string;
      lastName: string;
    };
    component: {
      color: string;
      createdAt: string;
      createdBy: string;
      description: string;
      icon: string;
      id: string;
      modifiedAt: string;
      modifiedBy: string;
      name: string;
      status: string;
    };
  };

  totalElements: number;
  totalPages: number;
}
