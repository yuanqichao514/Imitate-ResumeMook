import React from "react";
import './index.less'
import { useHistory } from "react-router";
import { shell } from 'electron'
import logo from '@assets/happyHoney.png'
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router'
import { isHttpOrHttpsUrl } from "@src/common/utils/router";

function Root() {
    // 通过history.push进行跳转
    const history = useHistory()

    const onRouterToLink = (router: TSRouter.Item) => {
        if( isHttpOrHttpsUrl(router.url) )
        {
            shell.openExternal('https://github.com/yuanqichao514/Imitate-ResumeMook')
        } else {
            console.log('跳转到简历页面');
            history.push(router.url)
        }
    }
    return (
        <div styleName="root">
            <div styleName="container">
                <img src={logo} alt="logo" />
                <div styleName="title">VisResumeMook</div>
                <div styleName="tips">超棒的模版简历制作平台，简单，简洁，高效，让你更出众！</div>
                <div styleName="action">
                    {/* {['介绍', '简历', '源码'].map((item, index) => {
                        return (
                            <div key={index} styleName="actionItem" onClick={() => onRouterToLink(item)}>
                                {item}
                            </div>
                        )
                    })} */}
                    {
                        ROUTER_ENTRY.map((router: TSRouter.Item) => {
                            return (
                                <div key={router.key} styleName="actionItem" onClick={() => onRouterToLink(router)}>
                                    {router.text}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="copyRight">
                    <div className="footer">
                        <p className="copyright">
                            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By Kerwin Yuan 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Root