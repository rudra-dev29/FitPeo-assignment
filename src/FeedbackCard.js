import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { purple } from '@mui/material/colors';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A1A1A' : '#FFFFFF',
  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
  margin: '1rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A1A1A' : '#FFFFFF',
  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A1A1A' : '#FFFFFF',
  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A1A1A' : '#FFFFFF',
  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
}));

const StyledStarIcon = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
}));

const StyledStarBorderIcon = styled(StarBorderIcon)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
}));

const FeedbackCard = () => {
  return (
    <>
      <StyledCard>
        <StyledCardHeader
          avatar={
            <StyledAvatar aria-label="recipe" src="/static/images/avatar/1.jpg" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Jenny Wilson"
        />
        <StyledCardContent>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <StyledStarIcon key={index} />
            ))}
          </div>
          <StyledTypography variant="body2" color="text.secondary">
            The food was excellent and so was the service. I had the
            mushroom risotto with scallops which was awesome. I had a burger
            over greens (gluten-free) which was also very good. They were
            very conscientious about gluten allergies.
          </StyledTypography>
        </StyledCardContent>
      </StyledCard>
      <StyledCardHeader
        avatar={
          <StyledAvatar aria-label="recipe" src="/static/images/avatar/2.jpg" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Dianne Russell"
      />
      <StyledCardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map((star, index) => (
            <StyledStarIcon key={index} />
          ))}
        </div>
        <StyledTypography variant="body2" color="text.secondary">
          We enjoyed the Eggs Benedict served on homemade focaccia
          bread and hot coffee. Perfect service
        </StyledTypography>
      </StyledCardContent>
      <StyledCard>
        <StyledCardHeader
          avatar={
            <StyledAvatar aria-label="recipe" src="/static/images/avatar/3.jpg" />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Devon Lane"
        />
        <StyledCardContent>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <StyledStarIcon key={index} />
            ))}
          </div>
          <StyledTypography variant="body2" color="text.secondary">
            Normally wings are wings, but theirs are lean meaty and tender, and
          </StyledTypography>
        </StyledCardContent>
      </StyledCard>
    </>
  )
}

export default FeedbackCard;
