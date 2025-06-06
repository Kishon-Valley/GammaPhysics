"use client"

import { useState, useMemo, useEffect } from "react"
import { 
  Container, 
  Typography, 
  TextField,
  Box,
  Paper,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  InputAdornment,
  Grid
} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { physicsNotes } from "../../data/physicsNotes"
import { physicsNotes2 } from "../../data/physicsNotes2"
import { physicsNotes3 } from "../../data/physicsNotes3"
import { physicsNotes4 } from "../../data/physicsNotes4"
import { physicsNotes5 } from "../../data/physicsNotes5"
import { physicsNotes6 } from "../../data/physicsNotes6"
import { physicsDefinitions } from "../../data/physicsDefinitions"

import { PhysicsNotes } from "./PhysicsNotes"
import { PhysicsDefinitionCard } from "./PhysicsDefinitionCard"


interface PhysicsDefinition {
  title: string
  category: string
  definition: string
  formula: string
  hasNotes: boolean
}

interface PhysicsNote {
  title: string
  description: string
  sections: {
    title: string
    content: string
  }[]
}

interface PhysicsNotesCollection {
  [key: string]: PhysicsNote
}

// Function to normalize strings consistently
const normalizeString = (str: string): string => {
  if (!str) return "";
  return str.replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase().trim();
};

export const PhysicsDefinitionList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNotes, setSelectedNotes] = useState<PhysicsNote | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredDefinitions, setFilteredDefinitions] = useState<[string, PhysicsDefinition][]>([]);
  const [localDarkMode, setLocalDarkMode] = useState(false);
  const [categoriesDarkMode, setCategoriesDarkMode] = useState(false);

  // Combine all notes sources
  const combinedNotes = useMemo(() => {
    const notes: PhysicsNotesCollection = {};

    const addNotes = (newNotes: PhysicsNotesCollection) => {
      Object.entries(newNotes).forEach(([key, note]) => {
        const normalizedKey = normalizeString(key);
        if (notes[normalizedKey]) {
          notes[normalizedKey].description += "\n\n" + note.description;
          notes[normalizedKey].sections.push(...note.sections);
        } else {
          notes[normalizedKey] = note;
        }
      });
    };

    addNotes(physicsNotes);
    addNotes(physicsNotes2);
    addNotes(physicsNotes3);
    addNotes(physicsNotes4);
    addNotes(physicsNotes5);
    addNotes(physicsNotes6);

    return notes;
  }, []);

  // Helper function to find notes by definition title
  const findNotes = (title: string): PhysicsNote | undefined => {
    const normalizedTitle = normalizeString(title);
    return combinedNotes[normalizedTitle];
  };

  // Helper function to search within notes content
  const searchInNotes = (notes: PhysicsNote, term: string): boolean => {
    const search = normalizeString(term);
    const normalizedDescription = normalizeString(notes.description);
    
    if (normalizedDescription.includes(search)) return true;

    for (const section of notes.sections) {
      const normalizedContent = normalizeString(section.content);
      if (normalizedContent.includes(search)) return true;
    }

    return false;
  };
  
  // Extract all unique categories
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    // Add "All" as the first category
    categorySet.add("All");
    Object.values(physicsDefinitions).forEach(def => {
      categorySet.add(def.category);
    });
    // Get sorted categories but ensure "All" remains first
    const sortedCategories = Array.from(categorySet);
    sortedCategories.sort((a, b) => {
      if (a === "All") return -1;
      if (b === "All") return 1;
      return a.localeCompare(b);
    });
    return sortedCategories;
  }, []);
  
  // Set initial selected category to "All"
  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory("All");
    }
  }, [categories, selectedCategory]);

  // Filter definitions based on search term and selected category
  useEffect(() => {
    const entries = Object.entries(physicsDefinitions) as [string, PhysicsDefinition][];
    const normalizedTerm = normalizeString(searchTerm);
    
    const filtered = entries.filter(([_, def]) => {
      // First filter by category if one is selected (skip filtering if "All" is selected)
      if (selectedCategory && selectedCategory !== "All" && def.category !== selectedCategory) {
        return false;
      }
      
      // Then filter by search term if it exists
      if (normalizedTerm) {
        const normalizedTitle = normalizeString(def.title);
        const normalizedDef = normalizeString(def.definition);
        const normalizedFormula = normalizeString(def.formula);
        const notes = findNotes(def.title);

        return normalizedTitle.includes(normalizedTerm) ||
               normalizedDef.includes(normalizedTerm) ||
               normalizedFormula.includes(normalizedTerm) ||
               (notes && searchInNotes(notes, searchTerm));
      }
      
      return true;
    });
    
    // Sort filtered definitions
    filtered.sort((a, b) => {
      const [keyA] = a;
      const [keyB] = b;
      const hasNotesA = combinedNotes[normalizeString(keyA)] !== undefined;
      const hasNotesB = combinedNotes[normalizeString(keyB)] !== undefined;
      
      if (hasNotesA !== hasNotesB) {
        return hasNotesA ? -1 : 1;
      }
      return normalizeString(keyA).localeCompare(normalizeString(keyB));
    });
    
    setFilteredDefinitions(filtered);
  }, [combinedNotes, searchTerm, selectedCategory, physicsDefinitions]);
  
  // Count definitions per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const allDefinitions = Object.values(physicsDefinitions);
    
    // Count for each category
    allDefinitions.forEach(def => {
      counts[def.category] = (counts[def.category] || 0) + 1;
    });
    
    // Add total count for "All" category
    counts["All"] = allDefinitions.length;
    
    return counts;
  }, []);



  return (
    <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
      {selectedNotes && (
        <PhysicsNotes
          open={true}
          onClose={() => setSelectedNotes(null)}
          notes={selectedNotes}
        />
      )}
      <Box sx={{ mb: 2, borderBottom: '1px solid', borderColor: 'divider', pb: 2 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 600, 
            color: 'primary.main',
            mb: 1
          }}
        >
          Physics Learning Hub
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'text.secondary',
            fontWeight: 500 
          }}
        >
          Physics Definitions
        </Typography>
      </Box>
      
      {/* Search field at the top */}
      <Box sx={{ 
        mb: 4,
        position: 'relative',
        maxWidth: '600px',
        mx: 'auto',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: -12,
          width: '60%',
          height: 1,
          backgroundColor: 'divider',
        }
      }}>
        <TextField
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Physics Definitions..."
          label="Search"
          variant="outlined"
          size="medium"
          sx={(theme) => ({
            '& .MuiOutlinedInput-root': {
              borderRadius: 4,
              transition: 'all 0.3s',
              py: 0.5,
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
              borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.23)',
              boxShadow: theme.palette.mode === 'dark' ? '0 2px 8px rgba(0, 0, 0, 0.5)' : '0 2px 8px rgba(0, 0, 0, 0.08)',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 1)',
                borderColor: theme.palette.primary.main,
                boxShadow: theme.palette.mode === 'dark' ? '0 4px 12px rgba(30, 144, 255, 0.3)' : '0 4px 12px rgba(25, 118, 210, 0.15)'
              },
              '&.Mui-focused': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 1)',
                borderColor: theme.palette.primary.main,
                boxShadow: theme.palette.mode === 'dark' ? '0 4px 12px rgba(30, 144, 255, 0.4)' : '0 4px 12px rgba(25, 118, 210, 0.25)'
              }
            },
            '& .MuiInputBase-input': {
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.87)'
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.23)'
            },
            '& .MuiInputLabel-root': {
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
            },
            '& .MuiInputAdornment-root': {
              color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
            }
          })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: (theme) => theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main }} />
              </InputAdornment>
            ),
            endAdornment: searchTerm ? (
              <InputAdornment position="end">
                <Chip 
                  label="Clear" 
                  size="small" 
                  color="primary" 
                  variant="outlined"
                  onClick={() => setSearchTerm('')} 
                  sx={{ cursor: 'pointer' }}
                />
              </InputAdornment>
            ) : null
          }}
        />
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3, 
        minHeight: '600px' 
      }}>
        {/* Category sidebar */}
        <Box sx={{ width: { xs: '100%', md: '250px' }, flexShrink: 0, mb: { xs: 2, md: 0 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <Tooltip title="Toggle dark mode for categories">
              <IconButton onClick={() => setCategoriesDarkMode(prev => !prev)} size="small">
                {categoriesDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Box>
          <Paper 
            elevation={3} 
            sx={{ 
              width: '100%',
              overflow: 'auto',
              borderRadius: 2,
              transition: 'box-shadow 0.3s ease-in-out',
              backgroundColor: categoriesDarkMode ? '#121212' : 'background.paper',
              color: categoriesDarkMode ? '#fff' : 'inherit',
              '&:hover': {
                boxShadow: 6
              }
            }}
          >
            <List sx={{ p: 0 }}>
              {categories.map((category) => (
                <ListItem key={category} disablePadding>
                  <ListItemButton
                    selected={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                    sx={{
                    borderLeft: selectedCategory === category ? 4 : 0,
                    borderLeftColor: categoriesDarkMode ? '#90caf9' : 'primary.main',
                    transition: 'all 0.2s ease-in-out',
                    py: 1.5,
                    '&.Mui-selected': {
                      backgroundColor: categoriesDarkMode ? 'rgba(144, 202, 249, 0.16)' : 'action.selected',
                    },
                    '&:hover': {
                      backgroundColor: categoriesDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'action.hover',
                    }
                  }}
                >
                  <ListItemText 
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body1" sx={{ color: categoriesDarkMode ? 'white' : 'inherit' }}>{category}</Typography>
                        <Chip 
                          label={categoryCounts[category] || 0} 
                          size="small" 
                          color={selectedCategory === category ? "primary" : "default"}
                          sx={{ 
                            minWidth: '32px',
                            backgroundColor: categoriesDarkMode && selectedCategory !== category ? 'rgba(255, 255, 255, 0.08)' : undefined,
                            color: categoriesDarkMode && selectedCategory !== category ? 'rgba(255, 255, 255, 0.7)' : undefined
                          }}
                        />
                      </Box>
                    } 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
        
        {/* Main content area */}
        <Box sx={{ 
          flexGrow: 1,
          bgcolor: localDarkMode ? '#121212' : 'background.paper',
          borderRadius: 2,
          p: { xs: 2, sm: 3 },
          boxShadow: 1,
          color: localDarkMode ? '#fff' : 'inherit'
        }}>
          {/* Category title */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 2,
            flexWrap: 'wrap',
            gap: 1
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography 
                variant="h6" 
                component="h2"
                sx={{ 
                  fontWeight: 600,
                  color: localDarkMode ? '#90caf9' : 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  '&::after': {
                    content: '""',
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: localDarkMode ? '#90caf9' : 'primary.main',
                    ml: 1.5,
                    mr: 0.5
                  }
                }}
              >
                {selectedCategory} <Box component="span" sx={{ ml: 0.5, color: localDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary', fontWeight: 400 }}>({filteredDefinitions.length})</Box>
              </Typography>
              <Tooltip title="Toggle dark mode for this section">
                <IconButton onClick={() => setLocalDarkMode(prev => !prev)} color="inherit" size="small">
                  {localDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </Box>
            {searchTerm && (
              <Chip 
                label={`Search: "${searchTerm}"`} 
                onDelete={() => setSearchTerm('')} 
                color="primary" 
                variant="outlined"
                sx={{ borderColor: localDarkMode ? '#90caf9' : undefined, color: localDarkMode ? '#90caf9' : undefined }}
              />
            )}
          </Box>
          
          <Divider sx={{ mb: 3, borderColor: localDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }} />
          
          {/* Definitions grid */}
          <Grid container spacing={3}>
            {filteredDefinitions.map(([key, definition]) => (
              <Grid {...{ item: true, xs: 12, sm: 6, md: 4 }} key={key}>
                <PhysicsDefinitionCard
                  definition={definition}
                  onNotesClick={() => {
                    const notes = findNotes(definition.title);
                    if (notes) setSelectedNotes(notes);
                  }}
                  hasNotes={combinedNotes[normalizeString(key)] !== undefined}
                />
              </Grid>
            ))}
          </Grid>
          
          {/* Empty state */}
          {filteredDefinitions.length === 0 && (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '200px',
              border: '1px dashed',
              borderColor: 'divider',
              borderRadius: 2,
              p: 3
            }}>
              <Typography variant="subtitle1" color="text.secondary">
                {searchTerm 
                  ? `No definitions found matching "${searchTerm}" in ${selectedCategory}` 
                  : `No definitions found in ${selectedCategory}`}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  )
}
