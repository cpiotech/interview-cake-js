// https://www.interviewcake.com/question/javascript/rectangular-love
function rangeOverlap(p1, len1, p2, len2) {
  let highestStartPoint = Math.max(p1, p2);
  let lowestEndPoint = Math.min(p1 + len1, p2 + len2);

  if (highestStartPoint >= lowestEndPoint) {
    return {
      point: null,
      length: null
    };
  }

  let overlap = lowestEndPoint - highestStartPoint;
  return {
    point: highestStartPoint,
    length: overlap
  };
}

function rectangular(rect1, rect2) {
  let xo = rangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  let yo = rangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  if (!xo.length || !yo.length) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    }
  }

  return {
    leftX: xo.point,
    bottomY: yo.point,
    width: xo.length,
    height: yo.length
  };
}

let r1 = {
  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,
  // width and height
  width: 10,
  height: 4,
};
let r2 = {
  // coordinates of bottom-left corner
  leftX: 4,
  bottomY: 4,
  // width and height
  width: 5,
  height: 9,
}

console.log(rectangular(r1, r2));

