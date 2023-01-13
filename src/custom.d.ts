declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content as string;
}

declare module'*.scss' {
  // eslint-disable-next-line
  const content: {[key: string]: any};
  export = content;
}
