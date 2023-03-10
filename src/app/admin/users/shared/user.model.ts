export interface UserPage {
  content:          User[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface User{
  id:        number;
  firstName: string;
  lastName:  string;
  fullName:  string;
  email:     string;
  password:  string;
  role:      Role;
  createdAt: Date;
  updatedAt: Date | null;
}

export enum Role {
  Admin = "ADMIN",
  User = "USER",
}

export interface Pageable {
  sort:       Sort;
  offset:     number;
  pageSize:   number;
  pageNumber: number;
  unpaged:    boolean;
  paged:      boolean;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}
