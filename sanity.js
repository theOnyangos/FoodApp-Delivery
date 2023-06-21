import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "bos4vy5w",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21", // use a UTC date string
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// sanity cors add http://localhost:3000
// https://deliveroodennis.sanity.studio/

export default client;
