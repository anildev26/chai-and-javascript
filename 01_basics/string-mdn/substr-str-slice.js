// ******************substring(start, end)************************
/*
substring() extracts characters from indexStart up to but not including indexEnd. In particular:

- If indexEnd is omitted, substring() extracts characters to the end of the string.
- If indexStart is equal to indexEnd, substring() returns an empty string.
- If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; see example below.
- Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.
NOTE :- Any argument value that is NaN is treated as if it were 0.
*/


const text = "Chrome"

//The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned.
console.log(text.substring(2, 0))

//negative ex: Negative lengths in substring() will clamp it to 0.
console.log(text.substring(4, -4))


// ******************substr(start, length)************************

/*ifference between substring() and substr()
There are subtle differences between the substring() and substr() methods, so you should be careful not to get them confused.

- The two parameters of substr() are ***start and length*** , while for substring(), they are start and end.
- substr()'s start index will wrap to the end of the string if it is negative, while substring() will clamp it to 0.
- Negative lengths in substr() are treated as zero, while substring() will swap the two indexes if end is less than start.
- Furthermore, substr() is considered a legacy feature in ECMAScript, so it is best to avoid using it if possible.
*/