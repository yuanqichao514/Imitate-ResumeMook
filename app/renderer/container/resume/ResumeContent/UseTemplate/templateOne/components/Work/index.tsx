/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';

function Work() {
  return (
    <div styleName="content">
      <p styleName="label">工作经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2020.09-至今</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>吹牛</p>
            <p>就职于吹牛公司，吹了会吹牛，还会摸鱼。</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;
