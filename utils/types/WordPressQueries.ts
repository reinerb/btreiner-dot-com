// Query parameters
type Fields =
  | "acf"
  | "date"
  | "excerpt"
  | "featured_media"
  | "id"
  | "slug"
  | "categories"
  | "tools"
  | "title"
  | "name"
  | "alt_text"
  | "link";

export type QueryParameters = {
  slug?: string;
  fields?: Fields[];
};

export type MediaQueryParameters = {
  id: number;
  fields?: Fields[];
};

// Responses
export type ProjectResponse = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf?: {
    liveUrl: string;
    githubUrl: string;
  };
  excerpt?: {
    rendered: string;
    protected: boolean;
  };
  content?: {
    rendered: string;
    protected: boolean;
  };
  tools: number[];
};

export type ToolResponse = {
  id: number;
  slug: string;
  name: string;
};

export type MediaResponse = {
  link: string;
  altText: string;
};

// Clean data
export type BaseData = {
  id: number;
  slug: string;
  title: string;
};

export type Project = BaseData & {
  acf?: {
    liveUrl: string;
    githubUrl?: string;
  };
  excerpt?: string;
  content?: string;
  tools: number[];
};

export type Tool = BaseData;

export type Media = {
  link: string;
  altText: string;
};
