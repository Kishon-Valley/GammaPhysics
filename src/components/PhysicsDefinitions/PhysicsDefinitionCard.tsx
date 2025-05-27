import React from 'react';
import { Button, Card, Typography, Box } from '@mui/material';

interface PhysicsDefinitionCardProps {
  definition: {
    title: string;
    category: string;
    definition: string;
    formula: string;
    hasNotes: boolean;
  };
  onNotesClick: () => void;
  hasNotes: boolean;
  darkMode?: boolean;
}

const PhysicsDefinitionCard: React.FC<PhysicsDefinitionCardProps> = ({
  definition,
  onNotesClick,
  darkMode = false,
}) => {
  return (
    <Card sx={{ 
      p: 2, 
      mb: 2,
      bgcolor: darkMode ? '#121212' : 'background.paper',
      color: darkMode ? '#fff' : 'text.primary',
      boxShadow: darkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : 1,
      border: darkMode ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <Typography 
        variant="h6" 
        component="h3"
        sx={{ color: darkMode ? '#90caf9' : 'primary.main' }}
      >
        {definition.title}
      </Typography>
      <Typography 
        color={darkMode ? 'rgba(255, 255, 255, 0.7)' : 'textSecondary'} 
        gutterBottom
      >
        {definition.category}
      </Typography>
      <Typography 
        variant="body1" 
        paragraph
        sx={{ color: darkMode ? 'rgba(255, 255, 255, 0.9)' : 'inherit' }}
      >
        {definition.definition}
      </Typography>
      {definition.hasNotes && (
        <Button
          variant="outlined"
          onClick={onNotesClick}
          sx={{ 
            mt: 2,
            color: darkMode ? '#90caf9' : 'primary',
            borderColor: darkMode ? 'rgba(144, 202, 249, 0.5)' : 'primary.main',
            '&:hover': {
              backgroundColor: darkMode ? 'rgba(144, 202, 249, 0.08)' : undefined,
              borderColor: darkMode ? 'rgba(144, 202, 249, 0.8)' : undefined
            }
          }}
        >
          View Notes
        </Button>
      )}
      <Box sx={{ 
        mt: 2, 
        p: 1.5, 
        bgcolor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
        borderRadius: 1,
        borderLeft: '3px solid',
        borderColor: darkMode ? '#90caf9' : 'primary.main'
      }}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontFamily: 'monospace',
            color: darkMode ? 'rgba(255, 255, 255, 0.9)' : 'text.primary',
            fontWeight: 500
          }}
        >
          {definition.formula}
        </Typography>
      </Box>
    </Card>
  );
};

export { PhysicsDefinitionCard };
