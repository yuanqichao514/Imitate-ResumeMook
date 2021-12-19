/**
 * @desc 基本信息
 * @author pengdaokuan
 */
import React from 'react';
import '../../../styles/template-one.less';

function BaseInfo() {
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：专业摸鱼大学</li>
        <li>专业：软件工程</li>
        <li>学历：本科</li>
        <li>学年：2012.09 - 2016.06</li>
        <li>籍贯：浙江·湖州</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
