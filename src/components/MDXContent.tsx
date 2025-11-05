import * as runtime from 'react/jsx-runtime';

const sharedComponents = {};

function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

// https://velite.js.org/guide/using-mdx
export function MDXContent({ code, components }: MDXProps) {
  const Component = useMDXComponent(code);
  // eslint-disable-next-line react-hooks/static-components
  return <Component components={{ ...sharedComponents, ...components }} />;
}
