import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export type Place = "right" | "top" | "left" | "bottom";

export interface Offset {
    top?: number;
    left?: number;
}

type Props = {
    renderItem: Function,
    renderContent: Function,
    place: Place,
    offset: Offset
}
type FixedFields = {
    top: string,
    left: string
}

type Positions = {
    [key in Place]: FixedFields;
}

const Tooltip: React.FC<Props> = ({ renderContent, renderItem, place,offset }) => {
    const ItemRef = useRef<HTMLDivElement>(null);
    const fixedRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        if (show) {
            const ItemPosition = ItemRef.current?.getBoundingClientRect();
            const FixedPosition = fixedRef.current?.getBoundingClientRect();
            console.log('ITEMPOSITION 问号', ItemPosition)
            console.log('tooltip', FixedPosition)
            const position = calPosition(place, FixedPosition, ItemPosition, 10, offset)
            console.log('position', position)

            if (fixedRef.current != null) {
                fixedRef.current.style.top = position.top
                fixedRef.current.style.left = position.left
            }
        }

    }, [show,place,offset])
    // 根据所靠元素的位置计算tooltip的位置
    //
    const calPosition = (place: Place, tooltipItem: DOMRect | undefined, accompanyItem: DOMRect | undefined, gap: number, offset: Offset) => {
        const position: Positions = {
            'right': {
                top: accompanyItem!.top + accompanyItem!.height / 2 - tooltipItem!.height / 2 + (offset.top ? offset.top : 0) + 'px',
                left: accompanyItem!.right + gap + 'px'
            },
            'top': {
                top: '',
                left: ''
            },
            'left': {
                top: '',
                left: ''
            },
            'bottom': {
                top: '',
                left: ''
            },

        }
        const itemPlacement = position[place]
        return itemPlacement
    }
    return <>
        <div ref={ItemRef} onClick={() => setShow(true)}>{renderItem()}</div>

        {show && createPortal(<div className="fixed" ref={fixedRef}>
            {renderContent()}
        </div>, document.getElementById('root')!)
        }
    </>;
};

export default Tooltip;