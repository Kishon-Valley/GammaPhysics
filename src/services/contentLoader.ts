import { ContentDocument, ContentSection, ContentMetadata } from '../types/content';

export class ContentLoader {
  /**
   * Load and parse a markdown content file
   */
  async loadContent(path: string): Promise<ContentDocument> {
    try {
      // Remove leading slash if present
      const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
      
      // Import the markdown file
      let markdown;
      const response = await fetch(`/${normalizedPath}`);
      if (!response.ok) {
        throw new Error(`Failed to load content: ${response.statusText}`);
      }
      markdown = await response.text();
      
      return this.parseMarkdown(markdown, path);
    } catch (error) {
      console.error(`Error loading content from ${path}:`, error);
      throw error;
    }
  }

  /**
   * Parse markdown content into structured document
   */
  private parseMarkdown(markdown: string, path: string): ContentDocument {
    const lines = markdown.split('\n');
    const metadata = this.extractMetadata(path);
    const sections: ContentSection[] = [];
    
    let currentSection: ContentSection | null = null;
    let contentBuffer: string[] = [];
    
    for (const line of lines) {
      if (line.startsWith('#')) {
        // If we have a current section, save it before starting new one
        if (currentSection) {
          currentSection.content = contentBuffer.join('\n').trim();
          sections.push(currentSection);
          contentBuffer = [];
        }
        
        const [level, title] = this.parseHeading(line);
        currentSection = {
          id: this.createSectionId(title),
          level,
          title,
          content: '',
          subsections: [],
        };
      } else {
        contentBuffer.push(line);
      }
    }
    
    // Don't forget to save the last section
    if (currentSection) {
      currentSection.content = contentBuffer.join('\n').trim();
      sections.push(currentSection);
    }
    
    return {
      metadata,
      sections,
    };
  }

  /**
   * Extract metadata from content path
   */
  private extractMetadata(path: string): ContentMetadata {
    const parts = path.split('/');
    const topic = parts[0] || '';
    const subtopic = parts[1] || '';
    const title = parts[2] || topic;
    
    return {
      id: path,
      title,
      topic,
      subtopic,
      lastUpdated: new Date().toISOString(),
    };
  }

  /**
   * Parse heading line into level and title
   */
  private parseHeading(line: string): [number, string] {
    const match = line.match(/^(#+)\s+(.+)$/);
    if (!match) {
      return [1, line.trim()];
    }
    return [match[1].length, match[2].trim()];
  }

  /**
   * Create section ID from title
   */
  private createSectionId(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  async loadSectionContent(sectionId: string, subsectionId: string): Promise<string> {
    try {
      // Map section IDs to their correct paths
      const sectionMap: { [key: string]: string } = {
        'rotational-motion': 'rotational-motion',
        'angular-kinematics': 'rotational-motion/angular-kinematics',
        'rotational-dynamics': 'rotational-motion/rotational-dynamics'
      };

      // Get the correct path for the section
      const sectionPath = sectionMap[sectionId] || sectionId;
      const path = `content/classical-mechanics/${sectionPath}/${subsectionId}.md`;
      
      const response = await fetch(`/${path}`);
      if (!response.ok) {
        throw new Error(`Failed to load content: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Error loading content:', error);
      throw error;
    }
  }
}
