import React from "react";
import './index.less';

// 引入简历模版
import * as UseTemplateList from './UseTemplate';
import MyScrollBox from "@src/common/components/myScrollBox";

function ResumeContent() {
    const HRADER_ACTION_HEIGHT = 92;
    const height = document.body.clientHeight;


    return (
        <MyScrollBox maxHeight={height - HRADER_ACTION_HEIGHT}>
            <UseTemplateList.TemplateOne />
        </MyScrollBox>
    )
}

export default ResumeContent;