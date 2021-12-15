/**
 * @description 按钮组件
 */
import React from "react";
import classnames from 'classnames';
import './index.less';

export interface Button {
    /**
     * @description 按钮大小
     */
    size?: 'middle' | 'big' | 'small';
    /**
     * @des 宽度
     */
    width?: number;
    /**
     * @des 自定义样式
     */
    style?: React.CSSProperties;
    /**
     * @des 子组件
     */
    children?: React.ReactNode | any;
    /**
     * @des 禁止
     */
    disabled?: boolean;
    /**
     * @des 样式名
     */
    className?: string;
    /**
     * @des 点击时间
     */
    onClick?: Function;
    /**
     * @des 是否显示边框
     */
    border?: boolean;
}

function MyButton({ size = "small", style, width, children, disabled, className, onClick, border = true} : Button) {
    return (
        <div
            style={{
                ...style,
                width: width,
            }}
            className={className}
            styleName={classnames('es-button', {
                [`es-button-${size}`]: true,
                'es-button-disabled': disabled,
                'es-button-border': border,
            })}
            onClick={() => {
                onClick && onClick()
            }}
        >
            { children }
        </div>
    );
}

export default MyButton