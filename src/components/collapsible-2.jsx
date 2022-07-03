import React from 'react';
import useCollapse from 'react-collapsed';

function Collapsible_2(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header2" {...getToggleProps()}>
                {isExpanded ? '': 'Know More'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content2">
                    {/* {props.data ? props.data.paragraph : 'loading...'} */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque orci quis convallis molestie. Donec eleifend, nibh in tempus vehicula, magna metus tempor massa, eget ultricies velit lectus ut libero. Fusce iaculis luctus elit, vel tempor mi suscipit ullamcorper. Sed lectus mauris, ultrices id varius et, cursus nec nisl. Morbi sagittis lorem pretium placerat elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce pretium, risus eget dictum interdum, ante ipsum fermentum ex, non semper purus erat sed nisi. Vivamus rhoncus mi vitae semper fermentum. Praesent ut massa in dui viverra sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu est urna. Cras non elit eget purus accumsan egestas sit amet eu dolor. Phasellus eu dolor ipsum. Curabitur vel leo scelerisque, vestibulum justo a, commodo urna.</p>
                </div>
                <div className="header2" {...getToggleProps()}>
                {!isExpanded ? '': 'Collapse'}
                </div>
            </div>
        </div>
    );
}

export default Collapsible_2;