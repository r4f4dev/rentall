import React from 'react';
import PropTypes from 'prop-types';

// Assets
import mediumNoImage from '../../../public/SiteImages/medium_no_image.png';

class ListPopularLocationPhoto extends React.Component {
  static propTypes = {
    coverPhoto: PropTypes.number,
    listPhotos: PropTypes.array,
    className: PropTypes.string,
    bgImage: PropTypes.bool
  };

  static defaultProps = {
    bgImage: false
  }

  constructor(props) {
    super(props);
    this.state = {
      photo: null
    };
  }

  UNSAFE_componentWillMount() {
    const { coverPhoto, listPhotos } = this.props;
    let activePhoto;
    if (listPhotos != undefined) {
      activePhoto = listPhotos;
    }
    this.setState({ photo: activePhoto });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { coverPhoto, listPhotos } = nextProps;
    let activePhoto;
    if (listPhotos != undefined) {
      activePhoto = listPhotos;
    }
    this.setState({ photo: activePhoto });
  }

  render() {
    const { className, photoType, bgImage, listPhotos } = this.props;
    const { photo } = this.state;
    let path = '', source;
    if (listPhotos != null) {
      source = photo;
      path = '/images/popularLocation/';
    } else {
      source = mediumNoImage;
    }

    if (bgImage) {
      return (
        <div className={className} style={{ backgroundImage: `url(${path}${source})` }}>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <img src={path + source} className={className} />
      );
    }
  }
}

export default ListPopularLocationPhoto;
