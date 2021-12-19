import React from "react";
import './index.less';
import { useHistory } from "react-router";
import ROUTER from '@common/constants/router'

import MyButton from "@src/common/components/MyButton";

function ResumeAction() {
    const history = useHistory()
    // 返回首页
    const onBack = () => history.push(ROUTER.root)
    // 导出PDF: 功能在后面在解锁
    const onExport = () => {}

    return (
        <div styleName="actions">
            <div styleName="back" onClick={onBack}>返回首页</div>
            <MyButton size="middle" className="export-btn" onClick={onExport}>导出PDF</MyButton>
        </div>
    )
}

export default ResumeAction;