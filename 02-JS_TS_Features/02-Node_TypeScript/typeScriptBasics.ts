// 1. Basic Types

// Primitive types

let isDone: boolean = true;
let count: number = 90;
let name: string = "Parvez";

// Arrays

let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b", "c"];

// Tuples

let user: [string, number, string[]] = ["a", 0, ["b", "c"]];

// Enums

enum Status {
  Success,
  Padding,
  Delivered,
}

let status: Status = Status.Success;
