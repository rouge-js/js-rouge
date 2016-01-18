export const TREEBANK_CONTRACTIONS = [
  /\b(can)(not)\b/i, /\b(d)('ye)\b/i, /\b(gim)(me)\b/i,
  /\b(gon)(na)\b/i, /\b(got)(ta)\b/i, /\b(lem)(me)\b/i,
  /\b(more)('n)\b/i, /\b(wan)(na) /i, /\ ('t)(is)\b/i,
  /\ ('t)(was)\b/i,
];

export const HONORIFICS = [
  'jr', 'mr', 'mrs', 'ms', 'dr', 'prof', 'sr', 'sen', 'corp', 'rep', 'gov',
  'atty', 'supt', 'det', 'rev', 'col', 'gen', 'lt', 'cmdr', 'adm', 'capt',
  'sgt', 'cpl', 'maj', 'miss', 'misses', 'mister', 'sir', 'esq', 'mstr', 'phd',
  'adj', 'adv', 'asst', 'bldg', 'brig', 'comdr', 'hon', 'messrs', 'mlle', 'mme',
  'op', 'ord', 'pvt', 'reps', 'res', 'sens', 'sfc', 'surg',
];

export const ABBR_COMMON = [
  'arc', 'al', 'exp', 'rd', 'st', 'dist', 'mt', 'fy', 'pd', 'pl', 'plz', 'tce',
  'llb', 'md', 'bl', 'ma', 'ba', 'lit', 'ex', 'eg', 'ie', 'circa', 'ca', 'cca',
  'vs', 'etc', 'esp', 'ft', 'bc', 'ad',
];

export const ABBR_ORGANIZATIONS = [
  'co', 'corp', 'yahoo', 'joomla', 'jeopardy',
  'dept', 'univ', 'assn', 'bros', 'inc', 'ltd',
];

export const ABBR_PLACES = [
  'ala', 'ariz', 'ark', 'cal', 'calif', 'col', 'colo', 'conn', 'del', 'fed',
  'fla', 'fl', 'ga', 'ida', 'ind', 'ia', 'la', 'kan', 'kans', 'ken', 'ky',
  'la', 'md', 'mich', 'minn', 'mont', 'neb', 'nebr', 'nev', 'okla', 'penna',
  'penn', 'pa', 'dak', 'tenn', 'tex', 'ut', 'vt', 'va', 'wash', 'wis', 'wisc',
  'wy', 'wyo', 'usafa', 'alta', 'ont', 'que', 'sask', 'yuk', 'ave', 'blvd',
  'cl', 'ct', 'cres', 'hwy',
];

export const ABBR_DATES = [
  'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug',
  'sep', 'oct', 'nov', 'dec', 'sept', 'sep',
];

export const GATE_SUBSTITUTIONS = [
  ...ABBR_COMMON,
  ...ABBR_DATES,
  ...ABBR_ORGANIZATIONS,
  ...ABBR_PLACES,
  ...HONORIFICS,
];
