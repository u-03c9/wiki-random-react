import axios from "axios";

export interface WikiItemInterface {
  id: string;
  title: string;
  thumbnail: string;
  image: string;
  extract: string;
  sourceUrl: string;
}

export const fetchRandomWikiItem = async (): Promise<WikiItemInterface> => {
  return axios
    .get("https://en.wikipedia.org/api/rest_v1/page/random/summary")
    .then(({ data }) => {
      console.log(data);
      const { tid, title, thumbnail, originalimage, extract, content_urls } =
        data;
      return {
        id: tid,
        title,
        thumbnail: thumbnail.source,
        image: originalimage.source,
        extract,
        sourceUrl: content_urls.desktop.page,
      };
    });
};
