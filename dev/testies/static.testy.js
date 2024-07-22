// @flow
import { test, testPromise, should } from "../testy.js";
import fs, { read } from "fs";

test("Nothing | Just a simple test example", () /*: any */ => {
  const aString /*: string */ =
    "This is a testy test test.";
  const anotherString /*: string */ =
    "It looks like this test is working.";

  const result /*: string */ = aString + " " + anotherString;

  should(aString).be.exactly("This is a testy test test. It looks like this test is working.");
});
