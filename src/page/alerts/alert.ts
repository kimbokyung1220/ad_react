import { Modal } from 'antd';
const { confirm } = Modal;


export const successReloadAlert = (msg: string) => {
    Modal.success({
        content: (msg), onOk() {window.location.reload()},
    });
}
export const successAlert = (msg: string) => {
    Modal.success({
        content: (msg), onOk() {},
    });
}

export const errorAlert = (msg: string) => {
    Modal.error({
        content: (msg), onOk() {},
    });
};

export const warningAlert = (msg: string) => {
    Modal.warning({
        content: (msg), onOk() {},
      });
};

// export const showConfirm = (msg: string, fnc:void) => {
//     confirm({
//         content: (msg), onOk(){
//             fnc;
//         }, onCancel(){return false;}
//     })
// }