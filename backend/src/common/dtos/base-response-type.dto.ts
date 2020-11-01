import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseResponseDto {
  @Field(() => String)
  msg: string;

  @Field(() => Int)
  statusCode: number;

  constructor(msg: string, statusCode: number) {
    this.msg = msg;
    this.statusCode = statusCode;
  }
}
