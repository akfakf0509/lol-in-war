export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("post body", body);
  try {
    return await new UserScheme(body).save();
  } catch (error) {
    return error;
  }
});
