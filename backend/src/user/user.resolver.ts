import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { BaseResponseDto } from '@/common/dtos/base-response-type.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  sayHi() {
    return 'Hello there ...';
  }

  @Mutation(() => BaseResponseDto)
  async createUser(@Args('newUser') newUser: CreateUserDto) {
    await this.userService.create(newUser);
    return new BaseResponseDto('Create new user successful', 200);
  }

  @Query(() => [UserDto])
  async getUserList() {
    return this.userService.getUsers();
  }
}
