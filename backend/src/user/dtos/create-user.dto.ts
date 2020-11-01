import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('CreateUserInput')
export class CreateUserDto {
  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;
}
