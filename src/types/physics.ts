export interface HistoricalContext {
  development: string[];
  significance: string;
  limitations: string;
  keyContributors: {
    name: string;
    contributions: string[];
  }[];
}

export interface Introduction {
  text: string;
}

export interface Type {
  name: string;
  description?: string;
  formula?: string;
  variables?: string[];
  types?: Type[];
  units?: string;
  examples?: string[];
  applications?: string[];
}

export interface Formula {
  equation: string;
  description?: string;
  variables?: string[];
}

export interface FundamentalConcept {
  name: string;
  details: {
    definition?: string;
    properties?: string[];
    mathematicalForm?: string;
    examples?: string[];
    types?: Type[];
    formulas?: Formula[];
    characteristics?: string[];
    energyTypes?: Type[];
    mechanicalEnergy?: {
      description: string;
      conservation?: string[];
    };
  };
}

export interface MotionEquation {
  formula: string;
  name: string;
  description: string;
  applications: string[];
}

export interface ConceptDetails {
  graphicalRepresentation?: {
    type: string;
    description: string;
  }[];
  position?: {
    definition: string;
    properties: string[];
    mathematicalForm: string;
    examples: string[];
  };
  displacement?: {
    definition: string;
    properties: string[];
    formula: string;
    examples: string[];
  };
  commonScenarios?: Array<{
    name: string;
    applications: string[];
  }>;
  definition?: string;
  properties?: string[];
  mathematicalForm?: string;
  examples?: string[];
  types?: Type[];
  formulas?: Formula[];
  characteristics?: string[];
  energyTypes?: Type[];
  mechanicalEnergy?: {
    definition: string;
    conservation?: string[];
  };
  mainConcepts?: string[];
  energyTransformation?: {
    principles: string[];
    examples: string[];
  };
  applications?: string[];
}

export interface Concept {
  name: string;
  formula?: string;
  description?: string;
  details?: ConceptDetails;
  definition?: string;
  properties?: string[];
  examples?: string[];
}

export interface SubsectionContent {
  introduction?: string;
  mainDescription?: {
    overview: string;
    importance: string[];
    keyPrinciples: string[];
    realWorldApplications: string[];
    commonMisconceptions: string[];
  };
  topics?: Array<{
    name: string;
    properties: string[];
    examples?: string[];
    applications?: string[];
  }>;
  formulas?: Array<{
    title: string;
    equation: string;
    description?: string;
  }>;
  definition?: string;
  formula?: string;
  variables?: string[];
  examples?: string[];
  applications?: string[];
  energy?: {
    total: string;
    forms: string[];
  };
  equations?: Array<{
    name: string;
    formula: string;
    variables?: string[];
    description?: string;
  }>;
  law?: {
    statement: string;
    formula: string;
    variables: string[];
  };
  gravitationalField?: {
    definition: string;
    formula: string;
    variations: string[];
  };
  quantities?: Array<{
    name: string;
    symbol?: string;
    formula?: string;
    units?: string;
  }>;
  relationships?: Array<{
    name: string;
    formula: string;
    variables: string[];
  }>;
  torque?: {
    definition: string;
    formula: string;
    variables: string[];
  };
  angularMomentum?: {
    definition: string;
    formula: string;
    conservation?: string;
    applications?: string[];
  };
  types?: Array<{
    name: string;
    properties: string[];
    examples?: string[];
    applications?: string[];
  }>;
  conservation?: {
    statement: string;
    applications: string[];
  };
  impulse?: {
    definition: string;
    formula: string;
    applications: string[];
  };
  fundamentalLaws?: Array<{
    name: string;
    statement: string;
    implications: string[];
    examples: string[];
    mathematicalForm: string;
    variables?: string[];
    applications?: string[];
  }>;
  fundamentalConcepts?: Concept[];
  fundamentalForces?: Array<{
    name: string;
    description?: string;
    formula?: string;
    variables?: string[];
    properties?: string[];
    applications?: string[];
    types?: Array<{
      name: string;
      formula?: string;
      description?: string;
    }>;
  }>;
  concepts?: Array<{
    name: string;
    definition?: string;
    formula?: string;
    variables?: string[];
    properties?: string[];
    applications?: string[];
    types?: Array<{
      name: string;
      formula?: string;
      variables?: string[];
    }>;
  }>;
  conservationLaws?: {
    name: string;
    statement: string;
    applications: string[];
  };
  practicalApplications?: Record<string, string[]>;
  commonMisconceptions?: Array<{
    myth: string;
    reality: string;
  }>;
  advancedTopics?: Array<{
    name: string;
    description: string;
    applications?: string[];
    examples?: string[];
  }>;
  motionEquations?: {
    title: string;
    equations: Array<{
      formula: string;
      description: string;
      applications: string[];
    }>;
    specialCases?: Array<{
      name: string;
      acceleration?: string;
      equations?: string[];
      characteristics?: string[];
    }>;
  };
  graphicalRepresentation?: Array<{
    type: string;
    description: string;
  }>;
  insights?: string[];
  markdownFile?: string;
}

export interface Subsection {
  id: string;
  title: string;
  description?: string;
  content: SubsectionContent;
  navigation?: Array<{
    title: string;
    path: string;
  }>;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  subsections: Subsection[];
}

export interface PhysicsContent {
  id: string;
  title: string;
  introduction: {
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
  };
  sections: Section[];
  navigation?: {
    title: string;
    path: string;
    items: Array<{
      title: string;
      path: string;
      items?: Array<{
        title: string;
        path: string;
      }>;
    }>;
  };
}

export interface Course {
  title: string;
  description: string;
  concepts: {
    title: string;
    description: string;
    topics: {
      title: string;
      description: string;
      simulationAvailable?: boolean;
      simulationPath?: string;
      content?: string;
      animation?: string;
    }[];
  }[];
}
