import React, { useEffect, useState } from "react";
import './index.less';

// 引入简历模版
import * as UseTemplateList from './UseTemplate';
import MyScrollBox from "@src/common/components/myScrollBox";

import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';

import CertificateForm from './UseForm/Certificate';
import ContactForm from './UseForm/Contact';
import EducationForm from './UseForm/Education';
import PersonalForm from './UseForm/Personal';
import SkillForm from './UseForm/Skill';
import WorkForm from './UseForm/Work';


function ResumeContent() {
    const HRADER_ACTION_HEIGHT = 92;
    const height = document.body.clientHeight;


    const [formName, setFormName] = useState('');
    const [showFormModal, setShowFormModal] = useState(false);

    useEffect(() => {
        document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
        return () => {
            document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive)
        }
    })
    /**
     * @description 接收订阅事件的传参
     */
    const onReceive = (e: any) => {
        Messager.receive(e, (data: any) => {
            setShowFormModal(true);
            setFormName(data?.form_name);
        });
    };
    /**
     * @description 关闭弹窗的时候清空formName以及弹窗的现实状态
     */
    const onClose = () => {
        setShowFormModal(false);
        setFormName('')
    }

    return (
        <MyScrollBox maxHeight={height - HRADER_ACTION_HEIGHT}>
            <UseTemplateList.TemplateOne />
            {
                showFormModal && (
                    <>
                        {formName === RESUME_TOOLBAR_MAPS.certificate && <CertificateForm onClose={onClose} />}
                        {formName === RESUME_TOOLBAR_MAPS.contact && <ContactForm onClose={onClose} />}
                        {formName === RESUME_TOOLBAR_MAPS.education && <EducationForm onClose={onClose} />}
                        {formName === RESUME_TOOLBAR_MAPS.personal && <PersonalForm onClose={onClose} />}
                        {formName === RESUME_TOOLBAR_MAPS.skill && <SkillForm onClose={onClose} />}
                        {formName === RESUME_TOOLBAR_MAPS.workPrefer && <WorkForm onClose={onClose} />}
                    </>
                )
            }
        </MyScrollBox>
    )
}

export default ResumeContent;