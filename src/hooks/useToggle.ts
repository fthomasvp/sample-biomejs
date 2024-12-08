import {useCallback, useState} from 'react';

import type {Dispatch, SetStateAction} from 'react';

type ReturnTypeUseToggle = [
    boolean,
    () => void,
    Dispatch<SetStateAction<boolean>>,
];

// Hook copied from https://usehooks-ts.com/react-hook/use-toggle
export function useToggle(defaultValue?: boolean): ReturnTypeUseToggle {
    const [value, setValue] = useState(Boolean(defaultValue));

    const toggle = useCallback(() => {
        setValue((x) => !x);
    }, []);

    return [value, toggle, setValue];
}
