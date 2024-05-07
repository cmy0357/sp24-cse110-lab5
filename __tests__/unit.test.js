// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('checks (123)456-7890 is valid', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('checks 123-456-7890 is valid', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('checks (123))456-7890 is valid but is actually invalid', () => {
  expect(isPhoneNumber('(123))456-7890')).toBe(true);
});

test('checks 123-)456-7890 is valid but is actually invalid', () => {
  expect(isPhoneNumber('123-)456-7890')).toBe(true);
});

// isEmail
test('checks abc@google.com is valid', () => {
  expect(isEmail('abc@google.com')).toBe(true);
});

test('checks abCD@XYZ.xy is valid', () => {
  expect(isEmail('abCD@XYZ.xy')).toBe(true);
});

test('checks abc@uc_sd.edu is valid but is actually invalid', () => {
  expect(isEmail('abc@uc_sd.edu')).toBe(true);
});

test('checks abc@123.com is invalid but is actually valid', () => {
  expect(isEmail('abc@123.com')).toBe(false);
});

// isStrongPassword
test('checks a123 is valid', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('checks Xabc123abc123ab is valid', () => {
  expect(isStrongPassword('Xabc123abc123ab')).toBe(true);
});

test('checks aa is invalid', () => {
  expect(isStrongPassword('aa')).toBe(false);
});

test('checks 1234abc is invalid', () => {
  expect(isStrongPassword('1234abc')).toBe(false);
});

// isDate
test('checks 1/1/2000 is valid', () => {
  expect(isDate('1/1/2000')).toBe(true);
});

test('checks 06/25/2020 is valid', () => {
  expect(isDate('06/25/2020')).toBe(true);
});

test('checks 0/0/0000 is valid but is actually invalid', () => {
  expect(isDate('0/0/0000')).toBe(true);
});

test('checks 23/45/2000 is valid but is actually invalid', () => {
  expect(isDate('23/45/2000')).toBe(true);
});

// isHexColor
test('checks AA000a is valid', () => {
  expect(isHexColor('AA000a')).toBe(true);
});

test('checks 123456 is valid', () => {
  expect(isHexColor('123')).toBe(true);
});

test('checks AB12 is invalid', () => {
  expect(isHexColor('AB12')).toBe(false);
});

test('checks 12@ABC is invalid', () => {
  expect(isHexColor('12@ABC')).toBe(false);
});