// https://www.codewars.com/kata/5908242330e4f567e90000a3

// Given two congruent circles a and b of radius r, return the area of their intersection rounded down to the nearest integer.
// Javascript: Less than 94 characters.

with(Math)circleIntersection=([a,b],[c,d],r)=>(-sin(x=2*acos(hypot(a-c,b-d)/2/r))+x)*r*r|0;
