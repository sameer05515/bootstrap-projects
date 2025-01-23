const Components: Record<string, () => React.JSX.Element> = {
  Comp1: () => <div>Component 1</div>,
  Comp2: () => <div>Component 2</div>,
};

export const componentNames = Object.keys(Components);
const componentCount = componentNames.length;

export const calculateNextPrev = (selectedIndex: number) =>
  selectedIndex >= 0
    ? {
        next: componentNames[(selectedIndex + 1 + componentCount) % componentCount],
        prev: componentNames[(selectedIndex - 1 + componentCount) % componentCount],
      }
    : { next: "", prev: "" };

export const getComponentDetails = (componentName = "") => {
  const selectedIndex = componentNames.indexOf(componentName);
  return {
    Component: Components[componentName] || null,
    ...calculateNextPrev(selectedIndex),
  };
};
