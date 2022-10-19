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

## RegExp Object Methods
- Testing for a *match*: <code>test()</code>
- Array containing all of the match: <code>match()</code>. This returns an array containing all of the matches, including capturing  groups, or null if no match is found.
**NOTE**: If we do not use global flag, match() returns an array containing the pattern, index, input and group.
- <code>search()</code>: Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
- replacing a substring <code>replace()</code>: Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

+ []: A set of characters
+ \: uses to escape special charaters
+ .: Any character except new line character (\n)
+ ^: Starts with
+ $: ends with
+ *: zero or more times
+ +: One or more times
+ ?: zero or one time
+ \b: word bounder. Matches with the beginning or ending of a word
+ {3}: Exactly 3 characters
+ {3,8}: 3 to 8 characters
+ {3,}: At least 3 characters
+ |: either or
+ (): capture or group

### Square Bracket
