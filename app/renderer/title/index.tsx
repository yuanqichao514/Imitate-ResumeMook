import React from 'react'
import './index.less'

interface IProps {
    /**
     * @des 标题
     */
    text: string;
    /**
     * @des 样式
     */
    styles?: React.CSSProperties;
}

function Title({text, styles}: IProps) {
    return (
        <div style={styles} styleName="title">{ text }</div>
    )
}

export default Title