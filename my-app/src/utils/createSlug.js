export const createSlug = (imageName) => {
  const slug = imageName.replace(".jpg", "").replace(".png", "").replace(".jpeg", "").replace(/\s+/g, "-").toLowerCase();
  return slug;
};