import React, { useEffect } from "react";
import './index.less'
import { useHistory } from "react-router";
import { shell } from 'electron'
// import logo from '@assets/happyHoney.png'
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router'
import { isHttpOrHttpsUrl } from "@src/common/utils/router";

function Root() {
    // 通过history.push进行跳转
    const history = useHistory()

    const onRouterToLink = (router: TSRouter.Item) => {
        if (isHttpOrHttpsUrl(router.url)) {
          shell.openExternal(router.url);
        } else {
          if (router.key !== ROUTER_KEY.resume) {
            history.push(router.url);
          } else {
            history.push(router.url);
          }
        }
      };

    return (
        <div styleName="root">
            <div styleName="container">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="logo" />
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