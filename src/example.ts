import { createFixture } from 'zod-fixture';
import {z} from 'zod';

const Foo = z.object({
  bar: z.string(),
  baz: z.number().positive(),
});

const fooFixture = createFixture(Foo);

console.log(fooFixture)