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
  const [personalChecked, setPersonalChecked] = useState(false);

  const handleAllCheckedChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    if (newAllChecked) {
      setLocationChecked(true);
      setPersonalChecked(true);
    } else {
      setLocationChecked(false);
      setPersonalChecked(false);
    }
  };

  const handleBottomCheckboxChange = (setterFunction) => {
    setterFunction((prevState) => !prevState);
  };

  useEffect(() => {
    // 모든 하단 체크박스가 체크되었는지 확인
    const areAllBottomChecked = locationChecked && personalChecked;
    if (areAllBottomChecked !== allChecked) {
      setAllChecked(areAllBottomChecked);
    }

    setCheckboxInputStatus(
      areAllBottomChecked ? InputStatus.SUCCESS : InputStatus.ERROR,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationChecked, personalChecked]);

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
        onClick={() => handleBottomCheckboxChange(setPersonalChecked)}
      >
        <Space />
        <Checkbox
          type="checkbox"
          checked={personalChecked}
          onChange={() => handleBottomCheckboxChange(setPersonalChecked)}
        />
        <CheckboxText>개인정보 이용 동의</CheckboxText>
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
    </Container>
  );
};

export default SignUpCheckbox;
