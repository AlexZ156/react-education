'use strict';
import React, {dangerouslySetInnerHTML} from 'react';
import {connect} from 'react-redux';

const stateToProps = ({tabset}) => ({
    tabset
});

const TabContent = ({tabset}) => {
    return(
        <div>
            {tabset.map((item) => (
                <div
                    key={item.id}
                    dangerouslySetInnerHTML={{__html: item.content}}
                    className={item.active ? 'active' : 'js-hidden'}
                ></div>
            ))}            
        </div>
    )
};

export default connect(stateToProps)(TabContent);