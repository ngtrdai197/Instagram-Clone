import { createParamDecorator } from '@nestjs/common';

export const Currentuser = createParamDecorator(
  (data, [root, args, ctx, info]) => {
    return ctx.req.user;
  },
);
