import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board 1',
    Board: () => <div>
        <input type="password" />
        <input>
            {undefined}
        </input></div>,
    environmentProps: {
        canvasHeight: 30
    }
});
