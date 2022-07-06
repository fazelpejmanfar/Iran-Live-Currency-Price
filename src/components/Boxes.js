import React from 'react'
import * as s from "./styles";

function Boxes({oz, eight, twenty}) {
  return (
    <s.BXWrapper>
        <s.BX>
            <div>
                <p>
                Gold 18k
                </p>
            </div>
            <div>
                <p>
                {eight}
                </p>
            </div>
        </s.BX>
        <s.BX>
            <div>
                <p>
                Gold oz
                </p>
            </div>
            <div>
                <p>
                {oz}
                </p>
            </div>
        </s.BX>
        <s.BX>
            <div>
                <p>
                Gold 24k
                </p>
            </div>
            <div>
                <p>
                {twenty}
                </p>
            </div>
        </s.BX>
    </s.BXWrapper>

    
  );
}

export default Boxes