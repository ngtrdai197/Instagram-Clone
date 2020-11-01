import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;
}
