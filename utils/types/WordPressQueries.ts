// Query parameters
type Fields =
  | "acf"
  | "date"
  | "excerpt"
  | "content"
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
  featured_media: number;
};

export type ToolResponse = {
  id: number;
  slug: string;
  name: string;
};

export type MediaResponse = {
  id?: number;
  source_url: string;
  alt_text: string;
};

// Clean data
export type BaseData = {
  id: number;
  slug: string;
  title: string;
};

export type ProjectData = BaseData & {
  acf?: {
    liveUrl: string;
    githubUrl?: string;
  };
  excerpt?: string;
  content?: string;
  tools: number[];
  featured_media: number;
};

export type Tool = {
  id: number;
  slug: string;
  title: string;
};

export type Media = {
  id?: number;
  src: string;
  alt: string;
};

export type Project = Omit<ProjectData, "tools" | "featured_media"> & {
  tools: Tool[];
  featuredMedia: Media;
};
