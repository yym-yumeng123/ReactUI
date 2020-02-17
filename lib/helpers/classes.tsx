function classes(...names: Array<string | undefined | boolean>) {
  return names.filter(Boolean).join(" ");
}

export default classes;
