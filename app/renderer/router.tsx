import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ROUTER from '@common/constants/router'
import Root from '@src/container/root';
import Resume from "@src/container/root/resume";

function Router() {
    return (
        <HashRouter>
            <Switch>
                {/* 一定要添加exact */}
                <Route path={ROUTER.root} exact>
                    <Root />
                </Route>
                <Route path={ROUTER.resume} exact>
                    <Resume />
                </Route>
            </Switch>
            {/* 重定向到首页 */}
            <Redirect to={ROUTER.root}  />
        </HashRouter>
    )
}

export default Router