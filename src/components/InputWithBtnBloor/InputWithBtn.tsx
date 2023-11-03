import { createRef, useEffect, useState } from 'react';
import { BtnBloor } from '../BtnBloor';
import classesInputWithBloor from './InputWithBtnBloor.module.css';
import { ClueElement } from '../UI/ClueElement/ClueElement';

interface IInputWithBtnProps {
    valid?: boolean | null;
    type_input: string;
    type: string;
    children: any;
    handlerBtn: (e: string) => void;
}

export const InputWithBtn = ({children, type, type_input, valid, handlerBtn,...props}: IInputWithBtnProps) => {
    const refComponent = createRef<HTMLDivElement>();
    const [containerHeight, setContainerHeight] = useState<number | null>(null);

  useEffect(() => {
    if (refComponent.current) {
      const height = refComponent.current.getBoundingClientRect().height;
      setContainerHeight(height);
    }
  }, []);

  return (
    <>
        {type_input === 'oneIcon' && (
            <div {...props} className={classesInputWithBloor.container} ref={refComponent}>
                {children}
                {containerHeight && (
                    <BtnBloor
                        style={{ top: `${containerHeight / 2 - 8}px` }}
                        className={classesInputWithBloor.btn}
                        type={type}
                        handlerBtn={(e) => {
                            e.preventDefault();
                            handlerBtn(type);
                        } }
                    />
                )}
            </div>
        )}
        {type_input === 'twoIcons' && (
            <div {...props} className={classesInputWithBloor.container} ref={refComponent}>
                {children}
                {containerHeight && (
                    <>
                        <BtnBloor
                            style={{ top: `${containerHeight / 2 - 8}px` }}
                            className={classesInputWithBloor.btn_password}
                            type={type}
                            handlerBtn={(e) => {
                                e.preventDefault();
                                handlerBtn(type);
                            } }
                        />
                        <ClueElement valid={valid} style={{ top: `${containerHeight / 2 - 8}px` }} className={classesInputWithBloor.btn_Question}/>
                    </>
                )}
            </div>
        )}
    </>
 
  );
};
