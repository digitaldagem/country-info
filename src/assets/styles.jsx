import { styled } from '@mui/system';

export const BottomBorderSpan = styled('span')({
  borderBottom: '1px solid',
});

export const CenteredContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
});

export const List = styled('ul')({
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
});

export const ListItem = styled('li')({
  display: 'flex',
  flexDirection: 'column',
});

export const PaddedDiv2 = styled('div')({
  paddingTop: '2%',
});

export const PaddedDiv5 = styled('div')({
  paddingTop: '5%',
});