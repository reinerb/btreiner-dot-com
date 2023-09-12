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
export async function projectsQuery(
  params?: QueryParameters,
): Promise<ProjectData[]> {
  const url = `${WP_URL}/wp-json/wp/v2/projects?_fields=id,slug,title${
    params?.fields ? `,${params?.fields.join(",")}` : ""
  }${params?.slug ? `,&slug=${params?.slug}` : ""}`;

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
      title: decode(title.rendered),
      content: content?.rendered,
    };

    return JSON.parse(JSON.stringify(data));
  });
}

// Query function for tools
export async function toolQuery(params?: QueryParameters): Promise<Tool[]> {
  const url = `${WP_URL}/wp-json/wp/v2/tools?_fields=id,slug,name${
    params?.fields ? `,${params?.fields.join(",")}` : ""
  }${params?.slug ? `&slug=${params?.slug}` : ""}`;

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
  const url = `${WP_URL}/wp-json/wp/v2/media/${id}?_fields=source_url,alt_text`;

  const response: MediaResponse = await fetch(url, { method: "GET" }).then(
    (res) => res.json(),
  );

  return {
    src: response.source_url,
    alt: response.alt_text,
  };
}
