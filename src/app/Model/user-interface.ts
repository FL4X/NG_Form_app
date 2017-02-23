"use strict";

export interface User {
  id?: number;
  companyId?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: [
    'Male',
    'Female'
    ];
  role?: [
    'USER',
    'ADMIN',
    'ROOT'
    ];
}
