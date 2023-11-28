import { useEffect, useState } from 'react';
import {
  Container,
  CheckboxContainer,
  CheckboxText,
  Checkbox,
  Space,
} from './styles';
import { InputStatus } from '../../libs/AuthMessage';

const SignUpCheckbox = ({ setCheckboxInputStatus }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);

  const handleAllCheckedChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    if (newAllChecked) {
      setLocationChecked(true);
      setAgeChecked(true);
    } else {
      setLocationChecked(false);
      setAgeChecked(false);
    }
  };

  const handleBottomCheckboxChange = (setterFunction) => {
    setterFunction((prevState) => !prevState);
  };

  useEffect(() => {
    // 모든 하단 체크박스가 체크되었는지 확인
    const areAllBottomChecked = locationChecked && ageChecked;
    if (areAllBottomChecked !== allChecked) {
      setAllChecked(areAllBottomChecked);
    }

    setCheckboxInputStatus(
      areAllBottomChecked ? InputStatus.SUCCESS : InputStatus.ERROR,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationChecked, ageChecked]);

  return (
    <Container>
      <CheckboxContainer onClick={handleAllCheckedChange}>
        <Checkbox
          type="checkbox"
          checked={allChecked}
          onChange={handleAllCheckedChange}
        />
        <CheckboxText>모두 동의</CheckboxText>
      </CheckboxContainer>
      <CheckboxContainer
        onClick={() => handleBottomCheckboxChange(setLocationChecked)}
      >
        <Space />
        <Checkbox
          type="checkbox"
          checked={locationChecked}
          onChange={() => handleBottomCheckboxChange(setLocationChecked)}
        />
        <CheckboxText>위치기반 서비스 이용 동의</CheckboxText>
      </CheckboxContainer>
      <CheckboxContainer
        onClick={() => handleBottomCheckboxChange(setAgeChecked)}
      >
        <Space />
        <Checkbox
          type="checkbox"
          checked={ageChecked}
          onChange={() => handleBottomCheckboxChange(setAgeChecked)}
        />
        <CheckboxText>만 14세 이상입니다.</CheckboxText>
      </CheckboxContainer>
    </Container>
  );
};

export default SignUpCheckbox;
