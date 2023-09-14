const myTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`${imports}
${interfaces}

function ${componentName}(${props}) {
  if (title === undefined) {
    const getTitle = '${componentName}'.slice(3); // get component name and remove 3 characters(SVG)
    title = getTitle;
  }
  return ${jsx};
}
${exports}
  `;
};

module.exports = myTemplate;
