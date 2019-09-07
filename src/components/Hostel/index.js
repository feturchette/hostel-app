import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Banner,
  Info,
  Rate,
  Name,
  SmallText,
  Value,
  SameLine,
  New,
  Featured
} from './styles';

function Hostel({data, rates}) {
  const valueParsed = useMemo(() => {
    // if(!data) {
    //   return '';
    // }
    const currency = data.lowestPricePerNight.currency;
    const value = data.lowestPricePerNight.value * rates[currency];

    return value.toFixed(2)
  }, [data]);

  return (
    <Container>
      <Banner testID="banner"
        source={{
          uri: `https://${data.images[0].prefix}${data.images[0].suffix}`
        }}
      />
      {data.isNew && <New testID="new">NEW</New> }
      {data.isFeatured && <Featured testID="featured">Featured</Featured>}
      <Info>
          <SmallText testID="type">{data.type}</SmallText>
        <Name testID="name">{data.name}</Name>

        <SameLine>
            <SmallText testID="district">{data.district ? data.district.name : ''}</SmallText>
            <SmallText>Prices From:</SmallText>
        </SameLine>
        <SameLine>
            <Rate testID="rate">{data.overallRating ? (data.overallRating.overall / 10).toFixed(1) : '0.0'}</Rate>
            <Value testID="value">€{data.lowestPricePerNight ? valueParsed : ''}</Value>
        </SameLine>
        <SmallText testID="overview">{
          data.overview && data.overview.length > 200 ?
          data.overview.slice(0,200) + '...' : data.overview
        }</SmallText>
      </Info>
    </Container>
  );
}

Hostel.defaultProps = {
  type: '',
  overview: '',
  district: '',
  isNew: false,
  isFeatured: false,
  overallRating: {
    overal: '0.0'
  }
};

Hostel.propTypes = {
  data: PropTypes.shape({
    isNew: PropTypes.bool,
    isFeatured: PropTypes.bool,
    type: PropTypes.string,
    overview: PropTypes.string,
    overallRating: PropTypes.shape({ overall: PropTypes.number }),
    district: PropTypes.shape({ name: PropTypes.string.isRequired }),
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      prefix: PropTypes.string.isRequired,
      suffix: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    lowestPricePerNight: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
  rates: PropTypes.shape({
    VEF: PropTypes.number.isRequired,
    USD: PropTypes.number.isRequired,
    CAD: PropTypes.number.isRequired,
    BRL: PropTypes.number.isRequired,
    GBP: PropTypes.number.isRequired,
  }).isRequired
};

export default Hostel;
