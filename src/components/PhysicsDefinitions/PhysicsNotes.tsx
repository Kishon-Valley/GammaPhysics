import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Typography, 
  IconButton, 
  Box, 
  Paper, 
  alpha,
  Chip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BookIcon from '@mui/icons-material/MenuBook';
import InfoIcon from '@mui/icons-material/Info';

interface PhysicsNotesProps {
  open: boolean;
  onClose: () => void;
  notes: {
    title: string;
    description: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

export const PhysicsNotes: React.FC<PhysicsNotesProps> = ({ open, onClose, notes }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden'
        }
      }}
    >
      <DialogTitle sx={{ 
        p: 0, 
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.2) : alpha(theme.palette.primary.light, 0.2),
      }}>
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center"
          sx={{ 
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Box display="flex" alignItems="center" gap={1.5}>
            <BookIcon color="primary" fontSize="large" />
            <Typography variant="h5" fontWeight={600} color="primary.main">
              {notes.title}
            </Typography>
          </Box>
          <IconButton 
            onClick={onClose} 
            size="medium"
            sx={{
              backgroundColor: (theme) => 
                theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.2) : alpha(theme.palette.background.paper, 0.8),
              '&:hover': {
                backgroundColor: (theme) => 
                  theme.palette.mode === 'dark' ? alpha(theme.palette.background.paper, 0.3) : alpha(theme.palette.background.paper, 0.9),
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ p: 3, pt: 2.5 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 1.5,
              mb: 2,
              p: 2,
              borderRadius: 1.5,
              backgroundColor: (theme) => 
                theme.palette.mode === 'dark' ? alpha(theme.palette.info.dark, 0.1) : alpha(theme.palette.info.light, 0.1),
              border: '1px solid',
              borderColor: (theme) => 
                theme.palette.mode === 'dark' ? alpha(theme.palette.info.main, 0.3) : alpha(theme.palette.info.main, 0.2),
            }}
          >
            <InfoIcon 
              color="info" 
              sx={{ 
                mt: 0.5,
                opacity: 0.8 
              }} 
            />
            <Typography 
              variant="body1"
              sx={{ 
                color: 'text.primary',
                lineHeight: 1.6 
              }}
            >
              {notes.description}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {notes.sections.map((section, index) => (
              <Chip 
                key={`section-chip-${index}`}
                label={section.title}
                color="primary"
                variant="outlined"
                sx={{ 
                  borderRadius: 1.5,
                  px: 1
                }}
              />
            ))}
          </Box>
          
          {notes.sections.map((section, index) => (
            <Paper 
              key={`section-${index}`} 
              elevation={0}
              sx={{ 
                mb: 3,
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Box 
                sx={{ 
                  p: 2, 
                  backgroundColor: (theme) => 
                    theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.1) : alpha(theme.palette.primary.light, 0.1),
                  borderBottom: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <Typography 
                  variant="h6" 
                  fontWeight={600}
                  color="primary.main"
                >
                  {section.title}
                </Typography>
              </Box>
              <Box sx={{ p: 2.5 }}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    whiteSpace: 'pre-line',
                    '& ul': { paddingLeft: 2, mt: 1, mb: 1 },
                    '& li': { marginBottom: 0.8, lineHeight: 1.6 },
                    lineHeight: 1.7
                  }}
                >
                  {section.content}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
