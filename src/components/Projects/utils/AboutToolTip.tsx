
import Tooltip from "../../Shared/Tooltip/Tooltip";
import { Place, Offset } from "../../Shared/Tooltip/Tooltip";
import React from 'react';

type Props={
    renderItem: Function,
    place: Place,
    offset: Offset
}

const AboutTooltip: React.FC<Props> = (props) => {
    return (
        <Tooltip {...props} 
          renderContent={()=>(
            <div>
                hey, i'm the content of the tooltip
            </div>
          )}
        />
    )

}

export default React.memo(AboutTooltip);