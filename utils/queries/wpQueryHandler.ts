import { decode } from "html-entities";
import type {
  Media,
  MediaQueryParameters,
  MediaResponse,
  Project,
  ProjectResponse,
  QueryParameters,
  Tool,
  ToolResponse,
} from "@/utils/types/WordPressQueries";

const WP_URL = "https://api.btreiner.com";

// Query function for multiple projects
export async function projectsQuery({
  fields,
  slug,
}: QueryParameters): Promise<Project[]> {
  const url = `${WP_URL}/wp-json/wp/v2/projects?_fields=id,slug,title${
    fields && `,${fields.join(",")}`
  }${slug && `,&slug=${slug}`}`;

  const response = await fetch(url, { method: "GET" });

  const pagination = await Number(response.headers.get("X-WP-TotalPages"));
  let queryData: ProjectResponse[] = await response.json();

  if (pagination > 1) {
    for (let i = 2; i <= pagination; i++) {
      let newResponse: ProjectResponse[] = await fetch(`${url}&page=${i}`, {
        method: "GET",
      }).then((res) => res.json());
      queryData = [...queryData, ...newResponse];
    }
  }

  return queryData.map(({ title, content, ...element }) => {
    let data = {
      ...element,
      title: title.rendered,
      content: content?.rendered,
    };

    return JSON.parse(JSON.stringify(data));
  });
}

// Query function for tools
export async function toolQuery({
  fields,
  slug,
}: QueryParameters): Promise<Tool[]> {
  const url = `${WP_URL}/wp-json/wp/v2/tools?_fields=id,slug,name${
    fields && `,${fields.join(",")}`
  }${slug && `,&slug=${slug}`}`;

  const response = await fetch(url, { method: "GET" });

  const pagination = await Number(response.headers.get("X-WP-TotalPages"));
  let queryData: ToolResponse[] = await response.json();

  if (pagination > 1) {
    for (let i = 2; i <= pagination; i++) {
      let newResponse: ToolResponse[] = await fetch(`${url}&page=${i}`, {
        method: "GET",
      }).then((res) => res.json());
      queryData = [...queryData, ...newResponse];
    }
  }

  return queryData.map(({ name, ...element }) => {
    let data = {
      ...element,
      title: name,
    };

    return JSON.parse(JSON.stringify(data));
  });
}

// Query function for single images
export async function singleMediaQuery({
  id,
}: MediaQueryParameters): Promise<Media> {
  const url = `${WP_URL}/wp-json/wp/v2/media/${id}?_fields=link,alt_text`;

  const response: MediaResponse = await fetch(url, { method: "GET" }).then(
    (res) => res.json(),
  );

  return response;
}
