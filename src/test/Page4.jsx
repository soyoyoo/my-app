import { useState } from 'react';
import { useSelectOptions } from './useSelectOptions.jsx';

export default function Page4() {
  const [
    planetList,
    planetId,
    setPlanetId
  ] = useSelectOptions('/planets');

  const [
    placeList,
    placeId,
    setPlaceId
  ] = useSelectOptions(planetId ? `/planets/${planetId}/places` : null);
// 💡 선택된 ID에 해당하는 객체 찾기 (id 데이터 타입 일치를 위해 String 변환 비교)
  const selectedPlanet = planetList?.find(planet => String(planet.id) === String(planetId));
  const selectedPlace = placeList?.find(place => String(place.id) === String(placeId));

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select value={planetId} onChange={e => {
          setPlanetId(e.target.value);
        }}>
          {planetList?.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList?.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      {/* 💡 ID 대신 찾은 객체의 name 사용 */}
      <p>You are going to: {selectedPlace?.name || '...'} on {selectedPlanet?.name || '...'} </p>
      <p>You are going to: {placeId || '...'} on {planetId || '...'} </p>
    </>
  );
}
