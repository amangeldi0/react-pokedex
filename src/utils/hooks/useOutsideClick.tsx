import {useEffect, useRef, useState} from "react";
import { useOutsideClickProps } from "@types";

export const useOutsideClick = ({initialIsVisible, setSearch}: useOutsideClickProps) => {

    const [show, setShow] = useState<boolean>(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: Event) => {

        if (ref.current && !ref.current.contains(event.target as HTMLElement)){
            setShow(false);
            setSearch('')
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    });
    return {ref, show, setShow};
};