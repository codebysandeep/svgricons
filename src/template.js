const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`${imports}
${interfaces}

function ${componentName}(${props}) {
  return (
    ${jsx}
    <div>{title ? <title id={titleId}>{title}</title> : ${componentName}}</div>
  );
}

${exports}
  `;
};

module.exports = propTypesTemplate;
