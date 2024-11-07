import React from 'react';

function FitnessEquipList() {
  
  const equipmentList = [
    { id: 1, name: '레그프레스', description: '하체 근력 강화 기구' },
    { id: 2, name: '케이블 암 풀 다운', description: '팔과 등 근력 운동 기구' },
    { id: 3, name: '랫풀다운', description: '등 근육 강화 기구' },
    { id: 4, name: '체스트프레스', description: '가슴 근력 강화 기구' },
    { id: 5, name: '리버스 백 익스텐션', description: '허리 근육 강화 기구' },
    { id: 6, name: '백 익스텐션', description: '하부 허리 근력 기구' },
    { id: 7, name: '스텝퍼', description: '하체 유산소 운동 기구' },
    { id: 8, name: '치닝디핑', description: '상체 근력 운동 기구' },
    { id: 9, name: '인버전 테이블', description: '척추 교정 기구' },
  ];

  return (
    <div>
      <h1>운동기구 목록</h1>
      <ul>
        {equipmentList.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FitnessEquipList;
