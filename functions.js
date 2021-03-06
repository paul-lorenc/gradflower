//SIZE FUNCTIONS
//INPUT: (0,1)
//OUTPUT: pos real

const s_wideLeaf = (i) => {
  p0 = { x: 0, y: 0 };
  cp = { x: 0, y: 10 };
  p1 = { x: 1, y: 0 };
  return quadBezier(p0, cp, p1, i).y;
};

const s_posBend = (i) => {
  p0 = { x: 0, y: 0 };
  cp = { x: 0.3, y: 4 };
  p1 = { x: 1, y: 0 };
  return quadBezier(p0, cp, p1, i).y;
};

const s_leaveBend = (i) => {
  p0 = { x: 0, y: 0 };
  cp = { x: 0.3, y: 4 };
  p1 = { x: 1, y: 0 };
  return quadBezier(p0, cp, p1, i).y;
};

const s_bigThenSmall = (i) => {
  p0 = { x: 0, y: 0 };
  cp1 = { x: 0.1, y: 20 };
  cp2 = { x: 0.8, y: 2 };
  p1 = { x: 1, y: 0 };
  return cubicBezier(p0, cp1, cp2, p1, i).y;
};

const s_negBend = (i) => {
  p0 = { x: 0, y: 0 };
  cp = { x: 0.8, y: 6 };
  p1 = { x: 1, y: 0 };
  return quadBezier(p0, cp, p1, i).y;
};

const sizef_arr = [
  s_wideLeaf,
  s_leaveBend,
  s_posBend,
  s_bigThenSmall,
  s_negBend,
];

const getSizeF = () => {
  return sizef_arr[Math.floor(Math.random() * sizef_arr.length)];
};

//INTERPOLATION FUNCTIONS
//INPUT: (0,1)
//OUTPUT: (0,1]

const p_linearRet = (i) => {
  return i;
};

const p_posBend = (i) => {
  p0 = { x: 0, y: 0 };
  cp = { x: 0.3, y: 1 };
  p1 = { x: 1, y: 1 };
  return quadBezier(p0, cp, p1, i).y;
};

const p_endBend = (i) => {
  p0 = { x: 0, y: 0 };
  cp = { x: 0.6, y: 1 };
  p1 = { x: 1, y: 1 };
  o = quadBezier(p0, cp, p1, i).y;
  if (o > 1) o = 1;
  return o;
};

const p_negBend = (i) => {
  p0 = { x: 0, y: 0 };
  cp = { x: 1, y: 0 };
  p1 = { x: 1, y: 1 };
  return quadBezier(p0, cp, p1, i).y;
};
const p_leafBend = (i) => {
  p0 = { x: 0, y: 0 };
  cp = { x: 0, y: 1 };
  p1 = { x: 1, y: 1 };
  return quadBezier(p0, cp, p1, i).y;
};

const pointf_arr = [p_linearRet, p_posBend, p_endBend, p_negBend];

const getPointF = () => {
  return pointf_arr[Math.floor(Math.random() * pointf_arr.length)];
};
