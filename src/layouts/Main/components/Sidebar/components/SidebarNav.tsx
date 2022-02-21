import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Logo from 'svg/Logo';

interface Props {
  pages: Array<PageItem>;
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Pokepedia"
            width={{ xs: 100, md: 120 }}
          >
            <Logo width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {pages.map((item, i) => (
          <Box
            display={'flex'}
            alignItems={'center'}
            sx={{ cursor: 'pointer' }}
          >
            <Button
              component={'a'}
              href={item.href}
              fullWidth
              sx={{
                justifyContent: 'flex-start',
              }}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarNav;
