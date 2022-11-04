import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { sum } from "./dirmark.ts";

Deno.test("sum() adds given numbers", () => {
  const actual = sum(1, 2);
  const expected = 3;
  assertEquals(actual, expected);
});

Deno.test("sum() returns 0 when no arguments given", () => {
  const actual = sum();
  const expected = 0;
  assertEquals(actual, expected);
});
