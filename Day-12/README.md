# Regular Expressions
A regular expression or *RegExp* is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exits in a different data types. 

To use *RegExp* in JavaScript either we use *RegExp* constructor or we can declare a RegExp pattern using two forward slashes followed by a flag.

To declare a string, we use a single quote, double quote, a backtick. To declare a regular expression, we use two forward slashes and an optional flag. The flag could be g, i, m, s, or y.

## RegExp parameters
A regular expression takes two parameters. *One required search pattern* and an *optional flag*.

### Pattern
A pattern could be text or any form of pattern with some sort of similarity.

### Flags
Flags are optional parameter in a regular expression which determine the type of searching. Examples
+ g: a global flag which means looking for a pattern in whole text.
+ i: case insenitive flag (It searches for both lowercase and uppercase).
+ m: multiline.

### Creating a pattern with RegEx constructor