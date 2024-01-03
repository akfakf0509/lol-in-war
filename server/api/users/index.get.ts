export default defineEventHandler(async (event) => {
  try {
    return await UserScheme.find();
  } catch (error) {
    return error;
  }
});
