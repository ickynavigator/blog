export const randomProperty = <K extends PropertyKey, V = unknown>(
  obj: Record<K, V>,
) => {
  const keys = Object.keys(obj) as K[];

  const key = keys[(keys.length * Math.random()) << 0];

  return [key, obj[key]] as const;
};
