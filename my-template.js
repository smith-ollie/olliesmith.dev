const propTypesTemplate = (
  { imports, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`${imports}

function ${componentName}(${props}) {
  const baseJsx = ${jsx};
  return (({ children, ...props }, ref) => {
      return React.cloneElement(
          baseJsx,
          { ref, ...props },
          [
              ...(baseJsx.props.children ? [baseJsx.props.children] : []),
              ...(children ? [children] : [])
          ]
       );
  })(props, ref);
}

${exports}
  `;
};

module.exports = propTypesTemplate;
