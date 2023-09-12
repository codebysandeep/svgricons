const myTemplate = (
  { imports, interfaces, componentName, props, jsx, exports, title },
  { tpl }
) => {
  return tpl`${imports}
${interfaces}

function ${componentName}(${props}) {
  if (title === undefined) {
    const getTitle = '${componentName}'.slice(3);
    title = getTitle;
  }
  return ${jsx};
}
${exports}
  `;
};

module.exports = myTemplate;
