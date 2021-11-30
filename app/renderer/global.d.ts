// 用来解决路径正确，但是ts报错说找不到资源的报错
declare module '*.jpg' {
    const jpg: string;
    export default jpg;
}
// 这里用于扩充window对象上的值
declare interface Window {
    pdk: string;
}