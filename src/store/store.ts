import { reactive } from "vue";
import { Image } from "../utils/types";

export const store = reactive({
  images: {},
  addImage(image: Image) {
    this.images = { ...this.images, [image.id]: image };
  },
  locale: "en",
});
