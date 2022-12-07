import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from './auth/authorization.guard';

@Resolver()
export class TesterResolver {
  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'Hello World';
  }
}
