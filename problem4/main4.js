// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:

// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  //#Happy Coding! ^_^
  let time = 0;

  let hour = h * 3_600_000;
  let minute = m * 60_000;
  let second = s * 1_000;

  if (h >= 1) {
    time += hour;
  }
  if (m >= 1) {
    time += minute;
  }
  if (s >= 1) {
    time += second;
  }

  return time;
}
