/**
 * @desc 在校经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';

function Post() {
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2013.09-2014.09</p>
            <p>院学生会宣传部部长</p>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2020.09-至今</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>杭州在线吹牛网络有限公司</p>
            <p>
              主要担任前端开发工程师，开发公司包括国内站与国际站，主要是在线吹牛页面的开发，用户可以在线看其他用户吹牛
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
