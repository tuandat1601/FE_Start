export type User = {
  id: number;
  name: string;
};

export type UserDetail = User & {
  email: string;
};
