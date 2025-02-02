type ClassNames = string | Array<ClassNames>;

function composeStylesIntoSet(
  set: Set<string>,
  ...classNames: Array<ClassNames>
) {
  for (const className of classNames) {
    if (className.length === 0) {
      continue;
    }

    if (typeof className === 'string') {
      if (className.includes(' ')) {
        composeStylesIntoSet(set, ...className.trim().split(' '));
      } else {
        set.add(className);
      }
    } else if (Array.isArray(className)) {
      composeStylesIntoSet(set, ...className);
    }
  }
}

export function composeStyles(...classNames: Array<ClassNames>) {
  const set: Set<string> = new Set();

  composeStylesIntoSet(set, ...classNames);

  return Array.from(set).join(' ');
}
