export function closest(elem: HTMLElement, selector: string): HTMLElement {
  if (elem === null) {
    return null;
  }
  if (elem.matches(selector)) {
    return elem;
  }
  if (!elem.parentNode || elem.parentNode.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }
  return closest(elem.parentNode as HTMLElement, selector);
}

export function addClass(elem: HTMLElement, ...tokens: string[]): void {
  if (elem.classList) {
    elem.classList.add(...tokens);
  } else {
    const classes = elem.className.split(' ').filter(c => c.length > 0);
    for (const token of tokens) {
      if (classes.indexOf(token) < 0) {
        classes.push(token);
      }
    }
    elem.className = classes.join(' ');
  }
}

export function removeClass(elem: HTMLElement, ...tokens: string[]): void {
  if (elem.classList) {
    elem.classList.remove(...tokens);
  } else {
    const classes = elem.className.split(' ').filter(name => name.length > 0);
    for (const token of tokens) {
      const i = classes.indexOf(token);
      if (i >= 0) {
        classes.splice(i, 1);
      }
    }
    elem.className = classes.join(' ');
  }
}

export function toggleClass(elem: HTMLElement, token: string): boolean {
  if (elem.classList && elem.classList.toggle) {
    return elem.classList.toggle(token);
  } else {
    const classes = elem.className.split(' ').filter(name => name.length > 0);
    const i = classes.indexOf(token);
    if (i >= 0) {
      classes.splice(i, 1);
    } else {
      classes.push(token);
    }
    elem.className = classes.join(' ');
  }
}
