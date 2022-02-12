import PropTypes from 'prop-types';
import defaultImg from '../../images/profileSkelets.jpeg';

import {
  ProfileImgWrapper,
  StyledActhorItem,
  ActorName,
} from './ActorsItemStyled';
const ActorsItem = ({ imgUrl, profile_path, name, id }) => {
  return (
    <StyledActhorItem>
      <ProfileImgWrapper>
        {profile_path ? (
          <img src={imgUrl} id={id} alt={`profile ${name}`} />
        ) : (
          <img
            src={defaultImg}
            width="92px"
            height="138px"
            id={id}
            alt={`profile ${name}`}
          />
        )}
      </ProfileImgWrapper>
      <ActorName>{name}</ActorName>
    </StyledActhorItem>
  );
};
ActorsItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ActorsItem;
