export interface ContentMetadata {
  id: string;
  title: string;
  topic: string;
  subtopic?: string;
  lastUpdated: string;
  authors?: string[];
  tags?: string[];
}

export interface ContentSection {
  id: string;
  level: number; // Markdown heading level
  title: string;
  content: string;
  subsections?: ContentSection[];
  metadata?: {
    equations?: string[];
    examples?: string[];
    references?: string[];
    relatedTopics?: string[];
  };
}

export interface ContentDocument {
  metadata: ContentMetadata;
  sections: ContentSection[];
  relatedContent?: {
    prerequisites?: string[];
    nextTopics?: string[];
    relatedSimulations?: string[];
  };
}

export interface ParsedMarkdown {
  metadata: ContentMetadata;
  content: string;
}

interface Section {
  id: string;
  title: string;
  subsections: {
    id: string;
    title: string;
    content: Record<string, unknown>;
    navigation?: {
      title: string;
      path: string;
    }[];
  }[];
}

interface Introduction {
  mainDescription: string;
  historicalContext: {
    development: string[];
    significance: string;
    limitations: string;
    keyContributors: {
      name: string;
      contributions: string[];
    }[];
  };
}

export interface ContentData {
  id: string;
  title: string;
  introduction: Introduction;
  sections: Section[];
}
