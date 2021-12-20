/**
 * @description 编辑简历-模块管理
 */
import React, { useEffect, useState } from "react";
import './index.less';
import MyScrollBar from '@common/components/myScrollBox';
import RESUME_TOOLBAR_LIST from "@src/common/constants/resume";
import { onAddToolbar, onDeleteToolbar } from './utils';
import { useDispatch } from 'react-redux';

function ResumeToolbar() {
    const height = document.body.clientHeight;

    const dispatch = useDispatch();
    // 定义已添加模块和未添加模块
    const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
    const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);
    // 从未添加到已添加中，并删除未添加中的内容
    const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
        // 1. 获取已添加模块的所有key值

        const nextAddSliderList = onAddToolbar(addToolbarList, moduleToolbar);
        // 2. 如果未包含当前要添加的模块key， 则加入
        setAddToolbarList(nextAddSliderList);

        const nextUnAddSliderList = onDeleteToolbar(unAddToolbarList, moduleToolbar);
        // 3. 如果在未添加模块中还存在此模块，则删除
        setUnAddToolbarList(nextUnAddSliderList);
        changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
    }

    // 删除模块
    const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
        const nextAddSliderList = onDeleteToolbar(addToolbarList, moduleSlider);
        setAddToolbarList(nextAddSliderList);
        const nextUnAddSliderList = onAddToolbar(unAddToolbarList, moduleSlider);
        setUnAddToolbarList(nextUnAddSliderList);
        changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
    }


    // 在生命周期中，根据require字段，分别加入对应的数据源
    useEffect(() => {
        if(RESUME_TOOLBAR_LIST.length > 0) {
            let _addToolbarList: TSResume.SliderItem[] = [];
            let _unAddToolbarList: TSResume.SliderItem[] = [];
            RESUME_TOOLBAR_LIST.forEach((s: TSResume.SliderItem) => {
                if(s.require) _addToolbarList.push(s);
                if(!s.require) _unAddToolbarList.push(s);
            });
            setAddToolbarList(_addToolbarList);
            setUnAddToolbarList(_unAddToolbarList);
            // 将已添加模块的所有keys进行修改
            changeResumeToolbarKeys(_addToolbarList.map((s) => s.key));
        }
    }, []);

    // 修改redux中的值，使用rc-redux-model提供的API
    const changeResumeToolbarKeys = (moduleKeys: string[]) => {
        if(moduleKeys.length > 0) {
            dispatch({
                type: "templateModel/setStore",
                payload: {
                    key: 'resumeToolbarKeys',
                    values: moduleKeys
                }
            })
        }
    }


    return (
        <div styleName="slider">
            <MyScrollBar maxHeight={height - 180}>
                {
                    !!addToolbarList.length && (
                        <div styleName="module">
            <div styleName="title">
              <span styleName="line" />
              已添加模块
            </div>
            <div styleName="content">
              {addToolbarList.map((addSlider: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={addSlider.key}
                    onClick={() => {
                      Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                        form_name: addSlider.key,
                      });
                    }}
                  >
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{addSlider.name}</div>
                        <div styleName="summary">{addSlider.summary}</div>
                      </div>
                      {addSlider.require && <div styleName="tips">必选项</div>}
                      {!addSlider.require && (
                        <div styleName="action">
                          <i styleName="edit" onClick={(e: React.MouseEvent) => {}} />
                          <i
                            styleName="delete"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation && e.stopPropagation();
                              onDeleteSliderAction(addSlider);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!!unAddToolbarList.length && (
          <div styleName="module">
            <div styleName="title un-first">
              <span styleName="line" />
              未添加模块
            </div>
            <div styleName="content">
              {unAddToolbarList.map((unAddSlider: TSResume.SliderItem) => {
                return (
                  <div styleName="box" key={unAddSlider.key} onClick={() => onAddSliderAction(unAddSlider)}>
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{unAddSlider.name}</div>
                        <div styleName="summary">{unAddSlider.summary}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
            </MyScrollBar>
        </div>
    )
}

export default ResumeToolbar;