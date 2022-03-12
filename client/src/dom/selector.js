const { body } = document;

const DFS = (element, className, targetInfo) => {
  if (targetInfo.find) return;
  if (element.classList.contains(className)) {
    targetInfo.find = true;
    targetInfo.target = element;
    return;
  }

  [...element.children].forEach((child) => {
    DFS(child, className, targetInfo);
  });
};

const fullDFS = (element, className, targets) => {
  if (element.classList.contains(className)) {
    targets.push(element);
  }

  [...element.children].forEach((child) => {
    fullDFS(child, className, targets);
  });
};

export const getElementByClassName = (className, base = body) => {
  const targetInfo = {
    find: false,
    target: null,
  };

  DFS(base, className, targetInfo);
  return targetInfo.target;
};

export const getElementsByClassName = (className, base = body) => {
  let targets = [];

  fullDFS(base, className, targets);
  return targets;
};
