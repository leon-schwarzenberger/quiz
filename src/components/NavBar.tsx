import { AppBar, Toolbar, Button, Box } from '@mui/material';

interface NavBarProps {
  pages: string[];
  currentPage: string;
  setPage: (page: string) => void;
}

export function NavBar (props: NavBarProps){
    const { pages, currentPage, setPage } = props;
    return (
        <AppBar position="static" color="primary">
        <Toolbar>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
            {pages.map((page) => (
                <Button
                key={page}
                variant={currentPage === page ? 'contained' : 'text'}
                color={currentPage === page ? 'secondary' : 'inherit'}
                onClick={() => setPage(page)}
                sx={{
                    color: currentPage === page ? 'white' : 'rgba(255, 255, 255, 0.7)',
                    backgroundColor: currentPage === page ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                }}
                >
                {page}
                </Button>
            ))}
            </Box>
        </Toolbar>
        </AppBar>
    );
};
