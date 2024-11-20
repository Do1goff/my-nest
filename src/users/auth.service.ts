// // src/auth/auth.service.ts

// import { Injectable } from '@nestjs/common'
// import { UsersService } from '../users/users.service'

// @Injectable()
// export class AuthService {
//   constructor(private usersService: UsersService) {}

//   async validateUser(username: string, password: string): Promise<any> {
//     const user = await this.usersService.findByUsername(username);
//     if (user && await user.validatePassword(password)) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }
// }