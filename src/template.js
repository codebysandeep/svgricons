const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`${imports}
  import PropTypes from 'prop-types';
${interfaces}

function ${componentName}(${props}) {
  return (
    ${jsx}
  );
}

${componentName}.propTypes = {
  ${componentName}: PropTypes.string,
};

${exports}
  `;
};

module.exports = propTypesTemplate;
