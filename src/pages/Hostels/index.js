import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import TopBar from '~/components/Topbar';
import Hostel from '~/components/Hostel';
import { getHostelsRequest, setLoading } from '~/store/modules/hostels/actions';
import { Container, List, CityContainer, CityText, Footer } from './styles';

export default function Hostels() {
  const dispatch = useDispatch();
  const hostels = useSelector(state => state.hostels.hostels);
  const loading = useSelector(state => state.hostels.loading);
  const currencies = useSelector(state => state.currency.currencies);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
      dispatch(getHostelsRequest());
  }, []);

  function renderFooter() {
    if (!loading) return null;

    return (
      <Footer testID="footer">
        <ActivityIndicator animating size="large" />
      </Footer>
    );
  };

  function renderHeader() {
    let city = null;
    if(hostels.location) {
      city = hostels.location.city.name + ', ' + hostels.location.city.country;
    }

    return (
      <>
        <TopBar testeID="topbar"/>
        {city && <CityContainer><CityText>{city}</CityText></CityContainer>}
      </>
    );
  };

  function handleRefresh() {
    setRefreshing(true);
    dispatch(getHostelsRequest());
    setRefreshing(false);
  }

  function handleLoadMore() {
    //Normally, here would be the pagination... but the 'api' don't have it
    setLoading(true, (setLoading) => {
      setTimeOut(setLoading(false),3000);
    });
  }

  return (
    <Container>
      <List testID="list"
        data={hostels.properties}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          item  && <Hostel testID="hostel" data={item} rates={currencies.rates} />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={20}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Container>
  );
}
