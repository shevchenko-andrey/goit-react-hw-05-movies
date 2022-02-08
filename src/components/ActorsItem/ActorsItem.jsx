import defaultImg from '../../images/profileSkelets.jpeg';
const ActorsItem = ({ imgUrl, profile_path, name, id }) => {
  if (profile_path) {
    return (
      <li>
        <img src={imgUrl} id={id} alt={`profile ${name}`} />
        <p>{name}</p>
      </li>
    );
  }
  return (
    <li>
      <img
        src={defaultImg}
        width="92px"
        haight="138px"
        id={id}
        alt={`profile ${name}`}
      />
      <p>{name}</p>
    </li>
  );
};

export default ActorsItem;
