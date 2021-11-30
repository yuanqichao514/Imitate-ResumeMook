import React from 'react'
import lessStyle from './index.less'

interface IProps {
    /**
     * @des 标题
     */
    text: string;
    /**
     * @des 样式
     */
    styles: React.CSSProperties;
}

function Title({text, styles}: IProps) {
    return (
        <div style={styles} className={lessStyle.title}>{ text }</div>
    )
}

export default Title