import React from 'react';
import { useParams } from 'react-router-dom';

function FitnessEquipInfo() {
  const { id } = useParams();
  const equipmentId = Number(id);

  const equipmentData = {
    1: { name: '레그프레스', description: '하체 근력 강화 기구' },
    2: { name: '케이블 암 풀 다운', description: '팔과 등 근력 운동 기구' },
    3: { name: '랫풀다운', description: '등 근육 강화 기구' },
    4: { name: '체스트프레스', description: '가슴 근력 강화 기구' },
    5: { name: '리버스 백익스텐션', description: '허리 근육 강화 기구' },
    6: { name: '백 익스텐션', description: '하부 허리 근력 기구' },
    7: { name: '스텝퍼', description: '하체 유산소 운동 기구' },
    8: { name: '치닝디핑', description: '상체 근력 운동 기구' },
    9: { name: '인버전 테이블', description: '척추 교정 기구' },
  };

  const equipment = equipmentData[equipmentId];

  if (!equipment) {
    return <p>운동기구 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <h1>{equipment.name}</h1>
      <p>{equipment.description}</p>
    </div>
  );
}

export default FitnessEquipInfo;
