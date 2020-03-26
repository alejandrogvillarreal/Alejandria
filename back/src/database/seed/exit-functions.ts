export function successfulExit(msg: string) {
  console.log(msg);
  return Promise.resolve(msg);
}

export function unsuccessfulExit(model: string, error: string) {
  const errorMessage = `Error seeding ${model}: ${error}`;
  console.log(errorMessage);
  return Promise.reject(new Error(errorMessage));
}
