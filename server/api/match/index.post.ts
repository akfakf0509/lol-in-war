export default defineEventHandler(async () => {
  try {
    const code = makeCode(6);
    await new MatchScheme({ code }).save();
    return { code };
  } catch (error) {
    return;
  }
});

function makeCode(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
