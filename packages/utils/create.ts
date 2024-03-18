// const bem = createNamespace('button')

function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (prefixName) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }
  if (modifier) {
    prefixName += `--${modifier}`;
  }
  return prefixName;
}

function createBEM(prefixName: string) {
  const b = (block: string = "") => _bem(prefixName, block, "", "");
  const e = (element: string = "") =>
    element ? _bem(prefixName, "", element, "") : "";
  const m = (modifier: string = "") =>
    modifier ? _bem(prefixName, "", "", modifier) : "";
  const be = (block: string = "", element: string = "") =>
    block && element ? _bem(prefixName, block, element, "") : "";
  const bm = (block: string = "", modifier: string = "") =>
    block && modifier ? _bem(prefixName, block, "", modifier) : "";
  const em = (element: string = "", modifier: string = "") =>
    element && modifier ? _bem(prefixName, "", element, modifier) : "";
  const bem = (
    block: string = "",
    element: string = "",
    modifier: string = ""
  ) =>
    block && element && modifier ? _bem(prefixName, block, element, "") : "";
  const is = (name: string, state) => (state ? `is-${name}` : "");
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  };
}
export function createNamespace(name: string) {
  const prefixName = `y-${name}`;
  return createBEM(prefixName);
}
