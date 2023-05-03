import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false);

    const Icon = (
        <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} onClick={() => setVisible((visible) => !visible)} />
    );

    const InputType = visible ? 'text' : 'password';

    return [InputType, Icon];
};

export default usePasswordToggle;
