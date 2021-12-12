// 路由类型约束
declare namespace TSRouter {
    export interface Item {
        /**
         * @des 路由跳转链接
         */
        url: string,
        /**
         * @des 关键词
         */
        key: string,
        /**
         * @des 文本
         */
        text: string,
    }
}