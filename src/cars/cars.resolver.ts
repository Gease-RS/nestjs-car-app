import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsResolver) {}

  @Query((returns) => String)
  public async cars() {
    return 'Hello and welcome to the cars resolver!';
  }
}
